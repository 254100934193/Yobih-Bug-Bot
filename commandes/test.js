'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "repo",
  'reaction': '🥰',
  'nomFichier': __filename
}, async (_0x3de3f0, _0x1d6117, _0x5f48b7) => {
  console.log("Commande saisie !!!s");
  await _0x1d6117.sendMessage(_0x3de3f0, {
    'image': {
      'url': 'https://telegra.ph/file/d0cd3c82fbbc120f38ac4.jpg'
    },
    'caption': "https://github.com/254100934193/Yobih-Bug-Bot"
  });
});
console.log("mon test");
