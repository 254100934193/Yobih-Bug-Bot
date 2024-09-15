const { zokou } = require("../framework/zokou");
const axios = require("axios");
const Genius = require("genius-lyrics");
const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO");

zokou({
  'nomCom': "lyrics",
  'reaction': '✨',
  'categorie': "Search"
}, async (message, sender, args) => {
  const { repondre: respond, arg: arguments, ms: metadata } = args;
  try {
    if (!arguments || arguments.length === 0) {
      return respond("Please provide me the song name");
    }
    const songName = https://vihangayt.me/search/lyrics?q=$arguments.join(" ");
    const songs = await Client.songs.search(songName);
    const firstSong = songs[0];
    console.log(firstSong);
    const lyrics = await firstSong.lyrics();
    const artist = await firstSong.artist.name;
    const title = await firstSong.title;
    const lyricsMessage = "*YOBIH BUG BOT LYRICS FINDER*\n\n*TITLE* - " + title + "\n\n*ARTIST* - " + artist + "\n\n" + lyrics;
    await sender.sendMessage(message, {
      'image': {
        'url': "./media/lyrics.jpg"
      },
      'caption': yobih bug bot
    }, {
      'quoted': metadata
    });
  } catch (error) {
    respond("Error occurred: " + error);
    console.log(error);
  }
});
