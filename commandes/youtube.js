const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
const ytdl = require("ytdl-core");
const fs = require('fs');
zokou({
  'nomCom': "song",
  'categorie': "Search",
  'reaction': '💿'
}, async (_0x256ad2, _0x49d33f, _0x37ea75) => {
  const {
    ms: _0x444b3f,
    repondre: _0x4faa16,
    arg: _0xb0f448
  } = _0x37ea75;
  if (!_0xb0f448[0x0]) {
    _0x4faa16("wich song do you want Stupid niggah since you can't go to YouTube.");
    return;
  }
  try {
    let _0x5bd8f7 = _0xb0f448.join(" ");
    const _0x3c11a0 = await yts(_0x5bd8f7);
    const _0x259e5d = _0x3c11a0.videos;
    if (_0x259e5d && _0x259e5d.length > 0x0 && _0x259e5d[0x0]) {
      const _0x2bda68 = _0x259e5d[0x0].url;
      let _0xbbd656 = {
        'image': {
          'url': _0x259e5d[0x0].thumbnail
        },
        'caption': "\n*song name :* _" + _0x259e5d[0x0].title + "_\n\n*Time :* _" + _0x259e5d[0x0].timestamp + "_\n\n*Url :* _" + _0x259e5d[0x0].url + "_\n\n\n_*on downloading...*_\n\n"
      };
      _0x49d33f.sendMessage(_0x256ad2, _0xbbd656, {
        'quoted': _0x444b3f
      });
      const _0x3a89b8 = ytdl(_0x2bda68, {
        'filter': "audioonly",
        'quality': "highestaudio"
      });
      const _0x39a32b = fs.createWriteStream("audio.mp3");
      _0x3a89b8.pipe(_0x39a32b);
      _0x39a32b.on("finish", () => {
        _0x49d33f.sendMessage(_0x256ad2, {
          'audio': {
            'url': "audio.mp3"
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x444b3f,
          'ptt': false
        });
        console.log("Envoi du fichier audio terminé !");
      });
      _0x39a32b.on('error', _0x3c4fc3 => {
        console.error("Erreur lors de l'écriture du fichier audio :", _0x3c4fc3);
        _0x4faa16("Une erreur est survenue lors de l'écriture du fichier audio.");
      });
    } else {
      _0x4faa16("Aucune vidéo trouvée.");
    }
  } catch (_0x40ca6c) {
    console.error("Erreur lors de la recherche ou du téléchargement de la vidéo :", _0x40ca6c);
    _0x4faa16("Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.");
  }
});
zokou({
  'nomCom': "video",
  'categorie': 'Search',
  'reaction': '🎥'
}, async (_0x5e6c6d, _0x53021f, _0x1a7c98) => {
  const {
    arg: _0x55daa9,
    ms: _0x9969f9,
    repondre: _0x4c90ff
  } = _0x1a7c98;
  if (!_0x55daa9[0x0]) {
    _0x4c90ff("insert video name");
    return;
  }
  const _0x497390 = _0x55daa9.join(" ");
  try {
    const _0x58de07 = await yts(_0x497390);
    const _0x5d8cc4 = _0x58de07.videos;
    if (_0x5d8cc4 && _0x5d8cc4.length > 0x0 && _0x5d8cc4[0x0]) {
      const _0x2acec1 = _0x5d8cc4[0x0];
      let _0x54a83c = {
        'image': {
          'url': _0x5d8cc4[0x0].thumbnail
        },
        'caption': "*Video name :* _" + _0x2acec1.title + "_\n*Time :* _" + _0x2acec1.timestamp + "_\n*Url :* _" + _0x2acec1.url + "_\n_*On downloading...*_\n\n"
      };
      _0x53021f.sendMessage(_0x5e6c6d, _0x54a83c, {
        'quoted': _0x9969f9
      });
      const _0x3c14fd = await ytdl.getInfo(_0x2acec1.url);
      const _0x419583 = ytdl.chooseFormat(_0x3c14fd.formats, {
        'quality': '18'
      });
      const _0x1b4883 = ytdl.downloadFromInfo(_0x3c14fd, {
        'format': _0x419583
      });
      const _0x30adf5 = fs.createWriteStream("video.mp4");
      _0x1b4883.pipe(_0x30adf5);
      _0x30adf5.on("finish", () => {
        _0x53021f.sendMessage(_0x5e6c6d, {
          'video': {
            'url': './video.mp4'
          },
          'caption': "*Zokou-Md",
          'gifPlayback': false
        }, {
          'quoted': _0x9969f9
        });
      });
      _0x30adf5.on('error', _0x423803 => {
        console.error("Erreur lors de l'écriture du fichier vidéo :", _0x423803);
        _0x4c90ff("Une erreur est survenue lors de l'écriture du fichier vidéo.");
      });
    } else {
      _0x4c90ff("No video found");
    }
  } catch (_0x36d625) {
    console.error("Erreur lors de la recherche ou du téléchargement de la vidéo :", _0x36d625);
    _0x4c90ff("Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.");
  }
});
