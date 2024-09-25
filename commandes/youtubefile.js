const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "mp3",
  'categorie': "Download",
  'reaction': '🎵'
}, async (_0x493acb, _0x1ef6f9, _0x3d8a6d) => {
  const {
    ms: _0x120594,
    repondre: _0xbe327d,
    arg: _0x1727d2
  } = _0x3d8a6d;
  if (!_0x1727d2[0]) {
    _0xbe327d("Please insert a song name.");
    return;
  }
  try {
    let _0x3affe9 = _0x1727d2.join(" ");
    let _0x12db33 = [];
    const _0x115d2c = await yts(_0x3affe9);
    _0x12db33 = _0x115d2c.videos;
    if (_0x12db33 && _0x12db33.length > 0) {
      const _0x330f0e = _0x12db33[0].url;
      const _0xd7e532 = await fetch("https://api.cafirexos.com/api/v1/ytmp3?url=" + _0x1e5673.url, _0x271835");
      const _0x13c67d = await _0xd7e532.json();
      if (_0x13c67d.status === 200 && _0x13c67d.success) {
        const _0x1271d8 = _0x13c67d.result.download_url;
        const _0x20f9f7 = {
          'image': {
            'url': _0x12db33[0].thumbnail
          },
          'caption': "*YOBIH BUG BOT MEDIA*\n\n┏───────────────────⊷\n│☆ *Title:* " + _0x13c67d.result.title + "\n│☆ *Quality:* " + _0x13c67d.result.type + "\n│☆ *Duration:* " + _0x12db33[0].timestamp + "\n│☆ *Viewers:* " + _0x12db33[0].views + "\n│☆ *Uploaded:* " + _0x12db33[0].ago + "\n│ *Artist:* " + _0x12db33[0].author.name + "\n╰───────────────⊷\n¤ *Direct YtLink:* " + _0x330f0e
        };
        await _0x1ef6f9.sendMessage(_0x493acb, _0x20f9f7, {
          'quoted': _0x120594
        });
        await _0x1ef6f9.sendMessage(_0x493acb, {
          'audio': {
            'url': _0x1271d8
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x120594
        });
      } else {
        _0xbe327d("Failed to download audio. Please try again later.");
      }
    } else {
      _0xbe327d("No audio found.");
    }
  } catch (_0x1d024f) {
    console.error("Error from API:", _0x1d024f);
    _0xbe327d("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "audio",
  'categorie': "Download",
  'reaction': '🔊'
}, async (_0x2574b9, _0xbe8c52, _0x441fea) => {
  const {
    ms: _0x3f3a16,
    repondre: _0x443ebf,
    arg: _0x30c687
  } = _0x441fea;
  if (!_0x30c687[0]) {
    _0x443ebf("Please insert a song name.");
    return;
  }
  try {
    let _0x55da12 = _0x30c687.join(" ");
    let _0x4fca54 = [];
    const _0x22bd3d = await yts(_0x55da12);
    _0x4fca54 = _0x22bd3d.videos;
    if (_0x4fca54 && _0x4fca54.length > 0) {
      const _0x36a56e = _0x4fca54[0].url;
      const _0x2f521e = await fetch("https://api.cafirexos.com/api/v1/ytmp3?url=" + _0x1e5673.url, _0x271835");
      const _0x402ba9 = await _0x2f521e.json();
      if (_0x402ba9.status === 200 && _0x402ba9.success) {
        const _0x5ea207 = _0x402ba9.result.download_url;
        const _0x4ee59c = {
          'image': {
            'url': _0x4fca54[0].thumbnail
          },
          'caption': "*YOBIH BUG BOT MEDIA*\n\n┏───────────────────⊷\n│◇ *Title:* " + _0x402ba9.result.title + "\n│◇ *Quality:* " + _0x402ba9.result.type + "\n│◇ *Duration:* " + _0x4fca54[0].timestamp + "\n│◇ *Viewers:* " + _0x4fca54[0].views + "\n│◇ *Uploaded:* " + _0x4fca54[0].ago + "\n│◇ *Artist:* " + _0x4fca54[0].author.name + "\n╰────────────────⊷\n⦿ *Direct YtLink:* " + _0x36a56e
        };
        await _0xbe8c52.sendMessage(_0x2574b9, _0x4ee59c, {
          'quoted': _0x3f3a16
        });
        await _0xbe8c52.sendMessage(_0x2574b9, {
          'document': {
            'url': _0x5ea207
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x3f3a16
        });
      } else {
        _0x443ebf("Failed to download audio. Please try again later.");
      }
    } else {
      _0x443ebf("No audio found.");
    }
  } catch (_0x1b1bd4) {
    console.error("Error from API:", _0x1b1bd4);
    _0x443ebf("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "mp4",
  'categorie': "Download",
  'reaction': '🎥'
}, async (_0x46f84e, _0x18a401, _0x2c3213) => {
  const {
    ms: _0x287612,
    repondre: _0x4bbeff,
    arg: _0x34ba17
  } = _0x2c3213;
  if (!_0x34ba17[0]) {
    _0x4bbeff("Please insert a song/video name.");
    return;
  }
  try {
    let _0x5a9c28 = _0x34ba17.join(" ");
    let _0x543d5b = [];
    const _0x2d69e9 = await yts(_0x5a9c28);
    _0x543d5b = _0x2d69e9.videos;
    if (_0x543d5b && _0x543d5b.length > 0) {
      const _0x3f96dc = _0x543d5b[0].url;
      const _0x4dc9ed = await fetch("https://api.cafirexos.com/api/v1/ytmp3?url=" + _0x1e5673.url, _0x271835");
      const _0x534b38 = await _0x4dc9ed.json();
      if (_0x534b38.status === 200 && _0x534b38.success) {
        const _0x3098bb = _0x534b38.result.download_url;
        const _0x192082 = {
          'image': {
            'url': _0x543d5b[0].thumbnail
          },
          'caption': "*YOBIH BUG BOT MEDIA*\n\n┏───────────────────⊷\n│★ *Title:* " + _0x534b38.result.title + "\n│★ *Quality:* " + _0x534b38.result.type + "\n│★ *Duration:* " + _0x543d5b[0].timestamp + "\n│★ *Viewers:* " + _0x543d5b[0].views + "\n│★ *Uploaded:* " + _0x543d5b[0].ago + "\n│★ *Artist:* " + _0x543d5b[0].author.name + "\n╰───────────────⊷\n⦿ *Direct YtLink:* " + _0x3f96dc
        };
        await _0x18a401.sendMessage(_0x46f84e, _0x192082, {
          'quoted': _0x287612
        });
        await _0x18a401.sendMessage(_0x46f84e, {
          'video': {
            'url': _0x3098bb
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x287612
        });
      } else {
        _0x4bbeff("Failed to download the video. Please try again later.");
      }
    } else {
      _0x4bbeff("No videos found.");
    }
  } catch (_0x3956a4) {
    console.error("Error from API:", _0x3956a4);
    _0x4bbeff("An error occurred while searching or downloading the video.");
  }
});
zokou({
  'nomCom': "videodoc",
  'categorie': "Download",
  'reaction': '🎥'
}, async (_0x6dbda6, _0xa1ef59, _0x23d91e) => {
  const {
    ms: _0x1936ce,
    repondre: _0x41d01d,
    arg: _0x20b50b
  } = _0x23d91e;
  if (!_0x20b50b[0]) {
    _0x41d01d("Please insert a song/video name.");
    return;
  }
  try {
    let _0x108fd4 = _0x20b50b.join(" ");
    let _0x591ca1 = [];
    const _0xbfa4f3 = await yts(_0x108fd4);
    _0x591ca1 = _0xbfa4f3.videos;
    if (_0x591ca1 && _0x591ca1.length > 0) {
      const _0x27d7ee = _0x591ca1[0].url;
      const _0x16a65d = await fetch("https://api.cafirexos.com/api/v1/ytmp3?url=" + _0x1e5673.url, _0x271835");
      const _0x59fc00 = await _0x16a65d.json();
      if (_0x59fc00.status === 200 && _0x59fc00.success) {
        const _0x369df7 = _0x59fc00.result.download_url;
        const _0x2a03c0 = {
          'image': {
            'url': _0x591ca1[0].thumbnail
          },
          'caption': "*YOBIH BUG BOT MEDIA*\n\n┏───────────────────⊷\n│☆ *Title:* " + _0x59fc00.result.title + "\n│☆ *Quality:* " + _0x59fc00.result.type + "\n│☆ *Duration:* " + _0x591ca1[0].timestamp + "\n│☆ *Viewers:* " + _0x591ca1[0].views + "\n│☆ *Uploaded:* " + _0x591ca1[0].ago + "\n│☆ *Artist:* " + _0x591ca1[0].author.name + "\n╰──────────────⊷\n● *Direct YtLink:* " + _0x27d7ee
        };
        await _0xa1ef59.sendMessage(_0x6dbda6, _0x2a03c0, {
          'quoted': _0x1936ce
        });
        await _0xa1ef59.sendMessage(_0x6dbda6, {
          'document': {
            'url': _0x369df7
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x1936ce
        });
      } else {
        _0x41d01d("Failed to download the video. Please try again later.");
      }
    } else {
      _0x41d01d("No videos found.");
    }
  } catch (_0x5b305e) {
    console.error("Error from API:", _0x5b305e);
    _0x41d01d("An error occurred while searching or downloading the video.");
  }
});
