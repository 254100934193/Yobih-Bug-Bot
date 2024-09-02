"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "🥴", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝗧𝗛𝗘💻𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦🗿YOBIH BUG BOT 𝗕𝗬 MUNGAI😎  \n\n ' + "𝗙𝗢𝗥𝗞🍽 𝗧𝗛𝗘 𝗥𝗘𝗣𝗢 𝗧𝗢 𝗗𝗘𝗣𝗟𝗢𝗬 𝗬𝗢𝗨𝗥☠️ 𝗢𝗪𝗡 👾𝗕𝗢𝗧 *YOBIH_MD 𝗥𝗘𝗣𝗢";
    let d = 'https://github.com/254100934193/Yobih-Bug-Bot';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/d0cd3c82fbbc120f38ac4.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *YOBIH-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *YOBIH*'
      let varmess=z+d
      var img='https://telegra.ph/file/d0cd3c82fbbc120f38ac4.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
