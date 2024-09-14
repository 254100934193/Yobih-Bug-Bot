const { zokou } = require("../framework/zokou");
const axios = require("axios");
const Genius = require("genius-lyrics");
const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO");
const { quran } = require('@quranjs/api');

// Fetch verses from Surah Al-Fatiha (Surah 1)
quran.v4.verses.findByChapter(1).then(verses => {
    verses.forEach(verse => {
        console.log(`Verse ${verse.verse_number}: ${verse.text_uthmani}`);
    });
}).catch(error => {
    console.error('Error fetching verses:', error);
});

zokou({
  'nomCom': "Quran",
  'reaction': '🎎',
  'categorie': "General"
}, async (message, sender, args) => {
  const { repondre: respond, arg: arguments, ms: metadata } = args;
  const searchQuery = arguments.join(" ");
  if (!searchQuery) {
    return respond("Please specify the book, the chapter and the verse you want to read. Example: Quran Romans 6:23");
  }
  let response =  await fetch('http://api.alquran.cloud/v1/quran/en.asad');
  if (!response.ok) {
    return respond("Please specify the chapter number or name. Example: bible john 3:16");
  }
  

let quranSurahHandler = async (m, { conn }) => {
  try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1];

    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`);
    }

    let surahListRes = await fetch('http://api.alquran.cloud/v1/quran/en.asad');
    let surahList = await surahListRes.json();

    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    );

    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`);
    }

    let res = await fetch(`http://api.alquran.cloud/v1/quran/en.asad/quran/${surahData.number}`);
    
    if (!res.ok) {
      let error = await res.json(); 
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`);
    }

    let json = await res.json();

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true });

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true });

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`;

    m.reply(quranSurah);

    if (json.data.recitation.full) {
      conn.sendFile(m.chat, json.data.recitation.full, 'recitation.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
};

quranSurahHandler.help = ['quran [surah_number|surah_name]'];
quranSurahHandler.tags = ['quran', 'surah'];
quranSurahHandler.command = ['quran', 'surah']

export default quranSurahHandler;

  
  
  
  
