
const {
  zokou
} = require("../framework/zokou");
const axios = require("axios");
zokou({
  'nomCom': "lyrics1",
  'reaction': '😎',
  'categorie': "Search"
}, async (_0x49d2fc, _0x55f0c1, _0xee8472) => {
  const {
    repondre: _0x534c09,
    arg: _0x23e3ad,
    ms: _0x71aac9
  } = _0xee8472;
  try {
    if (!_0x23e3ad || _0x23e3ad.length === 0) {
      return _0x534c09("Where is the name of musique");
    }
    let _0x35ae73 = await axios.get("http://api.maher-zubair.tech/search/lyrics?q=" + _0x23e3ad.join(" "));
    let _0x3938a2 = _0x35ae73.data.result;
    if (_0x3938a2.error) {
      return _0x534c09("no lyrics found");
    }
    let _0x120fcb = "---------Yobih-Bug-Bot-lyrics-finder--------\n\n* *Artist :* " + _0x3938a2.artist + "\n\n\n* *Title :* " + _0x3938a2.title + "\n\n\n" + _0x3938a2.lyrics;
    _0x55f0c1.sendMessage(_0x49d2fc, {
      'image': {
        'url': "./media/lyrics-img.jpg"
      },
      'caption': _0x120fcb
    }, {
      'quoted': _0x71aac9
    });
  } catch (_0x36baf7) {
    _0x534c09("Error");
  }
});
