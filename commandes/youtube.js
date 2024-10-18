const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '👀'
}, async (_0x1b8081, _0x1f14f7, _0x2ad984) => {
  const {
    ms: _0x4371c1,
    repondre: _0xff1b31,
    arg: _0x5cc7ff
  } = _0x2ad984;
  if (!_0x5cc7ff[0x0]) {
    _0xff1b31("Please insert a song/video name,You can go to youtube as well 🤣.");
    return;
  }
  try {
    let _0x1780b5 = _0x5cc7ff.join(" ");
    let _0x440fe9 = [];
    const _0x2c117f = await yts(_0x1780b5);
    _0x440fe9 = _0x2c117f.videos;
    if (_0x440fe9 && _0x440fe9.length > 0x0) {
      const _0x25a7d9 = _0x440fe9[0x0].url;
      const _0x1765c1 = await fetch("https://api-gifted-tech.onrender.com/api/download/ytmp4?url=" + encodeURIComponent(_0x194b74) + "&apikey=" + "ibrahimtech_ai");
      const _0x135bb0 = await _0x1765c1.json();
      if (_0x135bb0.status === 0xc8 && _0x135bb0.success) {
        const _0x212aff = _0x135bb0.result.download_url;
        const _0x220d77 = {
          'image': {
            'url': _0x440fe9[0x0].thumbnail
          },
          'caption': "YOUTUBE SEARCH BY MUNGAI\n\n ©Mungai Yobih"
        };
        await _0x1f14f7.sendMessage(_0x1b8081, _0x220d77, {
          'quoted': _0x4371c1
        });
        await _0x1f14f7.sendMessage(_0x1b8081, {
          'video': {
            'url': _0x212aff
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x4371c1
        });
        _0xff1b31("Downloded Successfully I'M Mungai ✅");
      } else {
        _0xff1b31("Searching...⏳");
      }
    } else {
      _0xff1b31("No videos found.");
    }
  } catch (_0x25ea06) {
    console.error("Error from API:", _0x25ea06);
    _0xff1b31('Searching...⏳');
  }
});
zokou({
  'nomCom': 'play',
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x4b12c1, _0x401396, _0x4f78ac) => {
  const {
    ms: _0x33b77a,
    repondre: _0xac3436,
    arg: _0x1f105b
  } = _0x4f78ac;
  if (!_0x1f105b[0x0]) {
    _0xac3436("Please insert a song name stupid niggah 😅.");
    return;
  }
  try {
    let _0x1e02c4 = _0x1f105b.join(" ");
    let _0x194781 = [];
    const _0x14f24a = await yts(_0x1e02c4);
    _0x194781 = _0x14f24a.videos;
    if (_0x194781 && _0x194781.length > 0x0) {
      const _0x314cde = _0x194781[0x0].url;
      const _0x4af8db = await fetch("https://api-gifted-tech.onrender.com/api/download/ytmp3?url=" + encodeURIComponent(_0x571980) + "&apikey=" + "ibrahimtech_ai");
      const _0x5db0fc = await _0x4af8db.json();
      if (_0x5db0fc.status === 0xc8 && _0x5db0fc.success) {
        const _0x82a8d7 = _0x5db0fc.result.download_url;
        const _0x33265f = {
          'image': {
            'url': _0x194781[0x0].thumbnail
          },
          'caption': "YOUTUBE SEARCH BY MUNGAI\n\n ©Mungai Yobih"
        };
        await _0x401396.sendMessage(_0x4b12c1, _0x33265f, {
          'quoted': _0x33b77a
        });
        await _0x401396.sendMessage(_0x4b12c1, {
          'audio': {
            'url': _0x82a8d7
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x33b77a
        });
        _0xac3436("Downloded Successfully I'm Mungai ✅");
      } else {
        _0xac3436("Failed to download audio. Mungai is working on it.");
      }
    } else {
      _0xac3436("No audio found.");
    }
  } catch (_0x406d35) {
    console.error("Error from API:", _0x406d35);
    _0xac3436("An error occurred while searching or downloading the audio, Be cool Mungai is fixing.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': 'Download',
  'reaction': '🎸'
}, async (_0x3c5c62, _0x3a01ac, _0x3092d2) => {
  const {
    ms: _0x2917c5,
    repondre: _0xc63620,
    arg: _0x4f3501
  } = _0x3092d2;
  if (!_0x4f3501[0x0]) {
    _0xc63620("Please insert a song name Stupid niggah.");
    return;
  }
  try {
    let _0x2862fe = _0x4f3501.join(" ");
    let _0x5ba899 = [];
    const _0x533c13 = await yts(_0x2862fe);
    _0x5ba899 = _0x533c13.videos;
    if (_0x5ba899 && _0x5ba899.length > 0x0) {
      const _0x1de937 = _0x5ba899[0x0].url;
      const _0x252c0e = await fetch("https://api-gifted-tech.onrender.com/api/download/ytmp3?url=" + encodeURIComponent(_0x571980) + "&apikey=" + "ibrahimtech_ai");
      const _0x595276 = await _0x252c0e.json();
      if (_0x595276.status === 0xc8 && _0x595276.success) {
        const _0x448434 = _0x595276.result.download_url;
        const _0x56b0a4 = {
          'image': {
            'url': _0x5ba899[0x0].thumbnail
          },
          'caption': "YOUTUBE SEARCH BY MUNGAI\n\n ©Mungai Yobih"
        };
        await _0x3a01ac.sendMessage(_0x3c5c62, _0x56b0a4, {
          'quoted': _0x2917c5
        });
        await _0x3a01ac.sendMessage(_0x3c5c62, {
          'audio': {
            'url': _0x448434
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x2917c5
        });
        _0xc63620("Downloded Successfully I'M Mungai✅");
      } else {
        _0xc63620("Failed to download audio. Mungai is working on it.");
      }
    } else {
      _0xc63620("No audio found you can go to youtube stupid niggah.");
    }
  } catch (_0x1c6102) {
    console.error("Error from API:", _0x1c6102);
    _0xc63620("An error occurred while searching or downloading the audio Mungai is working on it be cool.");
  }
});
