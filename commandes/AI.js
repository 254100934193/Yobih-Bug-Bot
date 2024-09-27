const {
  zokou
} = require("../framework/zokou");
const traduire = require('../framework/traduction');
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': "bot",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x1fca82, _0x2f6eef, _0x3ac68a) => {
  const {
    repondre: _0x127814,
    ms: _0x2e83dc,
    arg: _0x3609d4
  } = _0x3ac68a;
  if (!_0x3609d4 || !_0x3609d4[0x0]) {
    return _0x127814("yes I'm listening to you I LOVE MUNGAI YOBIH MY OWNER.");
  }
  try {
    const _0xe56878 = await traduire(_0x3609d4.join(" "), {
      'to': 'en'
    });
    console.log(_0xe56878);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0xe56878).then(_0x414d0d => _0x414d0d.json()).then(_0x4bd7db => {
      const _0x51abdc = _0x4bd7db.cnt;
      console.log(_0x51abdc);
      traduire(_0x51abdc, {
        'to': 'en'
      }).then(_0x320d2f => {
        _0x127814(_0x320d2f);
      })["catch"](_0x20791d => {
        console.error("Error when translating into French :", _0x20791d);
        _0x127814("Error when translating into French");
      });
    })["catch"](_0xb772f8 => {
      console.error("Error requesting BrainShop :", _0xb772f8);
      _0x127814("Error requesting BrainShop");
    });
  } catch (_0x261522) {
    _0x127814("oops an error : " + _0x261522);
  }
});
zokou({
  'nomCom': "dalle",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x3a6e1d, _0x26232b, _0x579c61) => {
  const {
    repondre: _0x1dfd26,
    arg: _0x169ea3,
    ms: _0x264108
  } = _0x579c61;
  try {
    if (!_0x169ea3 || _0x169ea3.length === 0x0) {
      return _0x1dfd26("Please enter the necessary information to generate the image.");
    }
    const _0x5ef043 = _0x169ea3.join(" ");
    const _0x2866db = await axios.get('http://api.maher-zubair.tech/ai/photoleap?q=' + _0x5ef043);
    const _0x25c177 = _0x2866db.data;
    if (_0x25c177.status == 0xc8) {
      const _0x33078c = _0x25c177.result;
      _0x26232b.sendMessage(_0x3a6e1d, {
        'image': {
          'url': _0x33078c
        },
        'caption': "*powered by YOBIH BUG BOT*"
      }, {
        'quoted': _0x264108
      });
    } else {
      _0x1dfd26("Error during image generation.");
    }
  } catch (_0x4aeec0) {
    console.error("Erreur:", _0x4aeec0.message || "Une erreur s'est produite");
    _0x1dfd26("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "gpt",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x5a73d0, _0x172960, _0x51a314) => {
  const {
    repondre: _0x248851,
    arg: _0x5c668d,
    ms: _0x262ac7
  } = _0x51a314;
  try {
    if (!_0x5c668d || _0x5c668d.length === 0x0) {
      return _0x248851("Please ask a question.");
    }
    const _0x522c87 = _0x5c668d.join(" ");
    const _0x3b1b19 = await axios.get("http://api.maher-zubair.tech/ai/chatgpt4?q=" + _0x522c87);
    const _0x2da7db = _0x3b1b19.data;
    if (_0x2da7db) {
      _0x248851(_0x2da7db.result);
    } else {
      _0x248851("Error during response generation.");
    }
  } catch (_0x216fe4) {
    console.error("Erreur:", _0x216fe4.message || "Une erreur s'est produite");
    _0x248851("Oops, an error occurred while processing your request.");
  }
});
