const {
  zokou
} = require('../framework/zokou');
var gis = require("g-i-s");
zokou({
  'nomCom': "img",
  'categorie': "Search",
  'reaction': '📷'
}, async (_0x54aacf, _0x2253ac, _0x59f43b) => {
  const {
    repondre: _0x2e2207,
    ms: _0x2498fc,
    arg: _0x2658c2
  } = _0x59f43b;
  if (!_0x2658c2[0x0]) {
    _0x2e2207("which image? Im Mungai🧡 !");
    return;
  }
  const _0x5709ea = _0x2658c2.join(" ");
  gis(_0x5709ea, _0x1db44b);
  function _0x1db44b(_0x13fefa, _0x4f557d) {
    if (_0x13fefa) {
      _0x2e2207("oups une error ");
    } else {
      for (var _0x30b684 = 0x0; _0x30b684 < 0x5; _0x30b684++) {
        _0x2253ac.sendMessage(_0x54aacf, {
          'image': {
            'url': _0x4f557d[_0x30b684].url
          }
        }, {
          'quoted': _0x2498fc
        });
      }
    }
  }
});
