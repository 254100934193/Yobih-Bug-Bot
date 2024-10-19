const {
  zokou
} = require("../framework/zokou");
const {
  attribuerUnevaleur
} = require("../bdd/welcome");
async function events(_0xd68e6c) {
  zokou({
    'nomCom': _0xd68e6c,
    'categorie': "Group"
  }, async (_0x34d9a2, _0x124fd, _0x29061d) => {
    const {
      ms: _0x446690,
      arg: _0x1104f3,
      repondre: _0x2b8724,
      superUser: _0x24565c,
      verifAdmin: _0x4b8556
    } = _0x29061d;
    if (_0x4b8556 || _0x24565c) {
      if (!_0x1104f3[0] || _0x1104f3.join(" ") === " ") {
        _0x2b8724(_0xd68e6c + " " + " on to active and " + " " + _0xd68e6c + " " + "off to put off");
      } else if (_0x1104f3[0] === 'on' || _0x1104f3[0] === "off") {
        await attribuerUnevaleur(_0x34d9a2, _0xd68e6c, _0x1104f3[0]);
        _0x2b8724(_0xd68e6c + "is actualised on " + _0x1104f3[0]);
      } else {
        _0x2b8724("on for active and off for desactive");
      }
    } else {
      _0x2b8724("You can't use this command lol 😂😂 ");
    }
  });
}
events("welcome");
events("goodbye");
events("antipromote");
events("antidemote");
