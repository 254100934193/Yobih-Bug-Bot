const { zokou } = require("../framework/zokou");
const axios = require("axios");
const Genius = require("genius-lyrics");
const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO");
const {zokou} =require("../framework/zokou");
const axios =require("axios");


zokou({ nomCom: "lyrics1",
        reaction: "✨",
        categorie: "Search" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions;  
        
   try {

    if (!arg || arg.length === 0) return repondre("Where is the name of music");

    let  result  = await axios.get(`http://api.maher-zubair.tech/search/lyrics?q=${arg.join(' ')}`);

    let lyrics = result.data.result;

    if (lyrics.error) return repondre("no lyrics found");

    let msg = `---------⬡┃YOBIH BUG BOT┃⬡--------

* *Artist :* ${lyrics.artist}


* *Title :* ${lyrics.title}


${lyrics.lyrics}`

    zk.sendMessage(dest,{image : { url : './media/lyrics-img.jpg'} , caption : msg}, { quoted : ms });
    
   } catch (err) {
       repondre('Error')
   }
        })
