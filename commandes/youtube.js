const {
  zokou
} = require('../framework/zokou');
const yts = require("yt-search");
zokou({
  'nomCom': 'video',
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x5c7f97, _0x37be21, _0x1cc9a8) => {
  const {
    ms: _0x367eaa,
    repondre: _0x27061c,
    arg: _0x630689
  } = _0x1cc9a8;
  if (!_0x630689[0x0]) {
    _0x27061c("Please insert a song/video name.");
    return;
  }
  try {
    let _0x438071 = _0x630689.join(" ");
    let _0x1b41dd = [];
    const _0x5410a4 = await yts(_0x438071);
    _0x1b41dd = _0x5410a4.videos;
    if (_0x1b41dd && _0x1b41dd.length > 0x0) {
      const _0x194b74 = _0x1b41dd[0x0].url;
      const _0x2bc96f = await fetch("https://api-gifted-tech.onrender.com/api/download/ytmp4?url=" + encodeURIComponent(_0x194b74) + "&apikey=" + "ibrahimtech_ai");
      const _0x22db9b = await _0x2bc96f.json();
      if (_0x22db9b.status === 0xc8 && _0x22db9b.success) {
        const _0x24dd16 = _0x22db9b.result.download_url;
        const _0x581018 = {
          'image': {
            'url': _0x1b41dd[0x0].thumbnail
          },
          'caption': "YOUTUBE SEARCH BY MUNGAI\n\n ©Mungai Yobih"
        };
        await _0x37be21.sendMessage(_0x5c7f97, _0x581018, {
          'quoted': _0x367eaa
        });
        await _0x37be21.sendMessage(_0x5c7f97, {
          'video': {
            'url': _0x24dd16
          },
          'mimetype': 'video/mp4'
        }, {
          'quoted': _0x367eaa
        });
        _0x27061c("Downloded Successfully I'M Mungai ✅");
      } else {
        _0x27061c("Searching...⏳");
      }
    } else {
      _0x27061c("No videos found.");
    }
  } catch (_0xbb0371) {
    console.error("Error from API:", _0xbb0371);
    _0x27061c('Searching...⏳');
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x58fc78, _0x5be9bf, _0x1fae42) => {
  const {
    ms: _0x32cbc7,
    repondre: _0x548948,
    arg: _0x1cecfc
  } = _0x1fae42;
  if (!_0x1cecfc[0x0]) {
    _0x548948("Please insert a song name.");
    return;
  }
  try {
    let _0x264011 = _0x1cecfc.join(" ");
    let _0x50dd2d = [];
    const _0x187da5 = await yts(_0x264011);
    _0x50dd2d = _0x187da5.videos;
    if (_0x50dd2d && _0x50dd2d.length > 0x0) {
      const _0x571980 = _0x50dd2d[0x0].url;
      const _0x4983e8 = await fetch("https://api-gifted-tech.onrender.com/api/download/ytmp3?url=" + encodeURIComponent(_0x571980) + "&apikey=" + "ibrahimtech_ai");
      const _0x57ae8e = await _0x4983e8.json();
      if (_0x57ae8e.status === 0xc8 && _0x57ae8e.success) {
        const _0x2635bb = _0x57ae8e.result.download_url;
        const _0x52836b = {
          'image': {
            'url': _0x50dd2d[0x0].thumbnail
          },
          'caption': "YOUTUBE SEARCH BY MUNGAI\n\n ©Mungai Yobih"
        };
        await _0x5be9bf.sendMessage(_0x58fc78, _0x52836b, {
          'quoted': _0x32cbc7
        });
        await _0x5be9bf.sendMessage(_0x58fc78, {
          'audio': {
            'url': _0x2635bb
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x32cbc7
        });
        _0x548948("Downloded Successfully I'm Mungai ✅");
      } else {
        _0x548948("Failed to download audio. Please try again later.");
      }
    } else {
      _0x548948("No audio found.");
    }
  } catch (_0xb67b29) {
    console.error("Error from API:", _0xb67b29);
    _0x548948("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x4676e4, _0x410bd7, _0x48506b) => {
  const {
    ms: _0x2dcbc3,
    repondre: _0x2c8af9,
    arg: _0x1acaf2
  } = _0x48506b;
  if (!_0x1acaf2[0x0]) {
    _0x2c8af9("Please insert a song name.");
    return;
  }
  try {
    let _0x2fcb3a = _0x1acaf2.join(" ");
    let _0x37afcd = [];
    const _0x372c1f = await yts(_0x2fcb3a);
    _0x37afcd = _0x372c1f.videos;
    if (_0x37afcd && _0x37afcd.length > 0x0) {
      const _0xf0756b = _0x37afcd[0x0].url;
      const _0x53113e = await fetch("https://api-gifted-tech.onrender.com/api/download/ytmp3?url=" + encodeURIComponent(_0xf0756b) + '&apikey=' + "ibrahimtech_ai");
      const _0x31e9e7 = await _0x53113e.json();
      if (_0x31e9e7.status === 0xc8 && _0x31e9e7.success) {
        const _0x57eb5d = _0x31e9e7.result.download_url;
        const _0x5bada4 = {
          'image': {
            'url': _0x37afcd[0x0].thumbnail
          },
          'caption': "YOUTUBE SEARCH BY MUNGAI\n\n ©Mungai Yobih"
        };
        await _0x410bd7.sendMessage(_0x4676e4, _0x5bada4, {
          'quoted': _0x2dcbc3
        });
        await _0x410bd7.sendMessage(_0x4676e4, {
          'audio': {
            'url': _0x57eb5d
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x2dcbc3
        });
        _0x2c8af9("Downloded Successfully I'M Mungai✅");
      } else {
        _0x2c8af9("Failed to download audio. Please try again later.");
      }
    } else {
      _0x2c8af9("No audio found.");
    }
  } catch (_0xf48fd3) {
    console.error("Error from API:", _0xf48fd3);
    _0x2c8af9("An error occurred while searching or downloading the audio.");
  }
});
