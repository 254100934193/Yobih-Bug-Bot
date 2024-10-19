const {
  zokou
} = require("../framework/zokou");
const flagGame = [{
  'country': "Afghanistan",
  'flag': "🇦🇫"
}, {
  'country': "Albania",
  'flag': "🇦🇱"
}, {
  'country': "Algeria",
  'flag': "🇩🇿"
}, {
  'country': "Andorra",
  'flag': "🇦🇩"
}, {
  'country': "Angola",
  'flag': "🇦🇴"
}, {
  'country': "Antigua and Barbuda",
  'flag': "🇦🇬"
}, {
  'country': "Argentina",
  'flag': "🇦🇷"
}, {
  'country': "Armenia",
  'flag': "🇦🇲"
}, {
  'country': "Australia",
  'flag': "🇦🇺"
}, {
  'country': "Austria",
  'flag': "🇦🇹"
}, {
  'country': "Azerbaijan",
  'flag': "🇦🇿"
}, {
  'country': "Bahamas",
  'flag': "🇧🇸"
}, {
  'country': "Bahrain",
  'flag': "🇧🇭"
}, {
  'country': "Bangladesh",
  'flag': "🇧🇩"
}, {
  'country': "Barbados",
  'flag': "🇧🇧"
}, {
  'country': "Belarus",
  'flag': "🇧🇾"
}, {
  'country': "Belgium",
  'flag': "🇧🇪"
}, {
  'country': "Belize",
  'flag': "🇧🇿"
}, {
  'country': "Benin",
  'flag': "🇧🇯"
}, {
  'country': "Bhutan",
  'flag': "🇧🇹"
}, {
  'country': "Bolivia",
  'flag': "🇧🇴"
}, {
  'country': "Bosnia and Herzegovina",
  'flag': "🇧🇦"
}, {
  'country': "Botswana",
  'flag': "🇧🇼"
}, {
  'country': "Brazil",
  'flag': "🇧🇷"
}, {
  'country': "Brunei",
  'flag': "🇧🇳"
}, {
  'country': "Bulgaria",
  'flag': "🇧🇬"
}, {
  'country': "Burkina Faso",
  'flag': "🇧🇫"
}, {
  'country': "Burundi",
  'flag': "🇧🇮"
}, {
  'country': "Cabo Verde",
  'flag': "🇨🇻"
}, {
  'country': "Cambodia",
  'flag': "🇰🇭"
}, {
  'country': "Cameroon",
  'flag': "🇨🇲"
}, {
  'country': "Canada",
  'flag': "🇨🇦"
}, {
  'country': "Central African Republic",
  'flag': "🇨🇫"
}, {
  'country': "Chad",
  'flag': "🇹🇩"
}, {
  'country': "Chile",
  'flag': "🇨🇱"
}, {
  'country': "China",
  'flag': "🇨🇳"
}, {
  'country': "Colombia",
  'flag': "🇨🇴"
}, {
  'country': "Comoros",
  'flag': "🇰🇲"
}, {
  'country': "Congo, Democratic Republic of the",
  'flag': "🇨🇩"
}, {
  'country': "Congo, Republic of the",
  'flag': "🇨🇬"
}, {
  'country': "Costa Rica",
  'flag': "🇨🇷"
}, {
  'country': "Croatia",
  'flag': "🇭🇷"
}, {
  'country': "Cuba",
  'flag': "🇨🇺"
}, {
  'country': "Cyprus",
  'flag': "🇨🇾"
}, {
  'country': "Czech Republic",
  'flag': "🇨🇿"
}, {
  'country': "Denmark",
  'flag': "🇩🇰"
}, {
  'country': "Djibouti",
  'flag': "🇯🇵"
}, {
  'country': "Dominica",
  'flag': "🇩🇲"
}, {
  'country': "Dominican Republic",
  'flag': "🇩🇴"
}, {
  'country': "East Timor",
  'flag': "🇹🇱"
}, {
  'country': "Ecuador",
  'flag': "🇪🇨"
}, {
  'country': "Egypt",
  'flag': "🇪🇬"
}, {
  'country': "El Salvador",
  'flag': "🇸🇻"
}, {
  'country': "Equatorial Guinea",
  'flag': "🇨🇲"
}, {
  'country': "Eritrea",
  'flag': "🇪🇷"
}, {
  'country': "Estonia",
  'flag': "🇪🇪"
}, {
  'country': "Eswatini",
  'flag': "🇸🇿"
}, {
  'country': "Ethiopia",
  'flag': "🇪🇹"
}, {
  'country': "Fiji",
  'flag': "🇫🇯"
}, {
  'country': "Finland",
  'flag': "🇫🇮"
}, {
  'country': "France",
  'flag': "🇫🇷"
}, {
  'country': "Gabon",
  'flag': "🇬🇦"
}, {
  'country': "Gambia",
  'flag': "🇬🇲"
}, {
  'country': "Georgia",
  'flag': "🇬🇪"
}, {
  'country': "Germany",
  'flag': "🇩🇪"
}, {
  'country': "Ghana",
  'flag': "🇬🇭"
}, {
  'country': "Greece",
  'flag': "🇬🇷"
}, {
  'country': "Grenada",
  'flag': "🇬🇩"
}, {
  'country': "Guatemala",
  'flag': "🇵🇪"
}, {
  'country': "Guinea",
  'flag': "🇬🇳"
}, {
  'country': "Guinea-Bissau",
  'flag': "🇬🇼"
}, {
  'country': "Guyana",
  'flag': "🇬🇾"
}, {
  'country': "Haiti",
  'flag': "🇭🇹"
}, {
  'country': "Honduras",
  'flag': "🇭🇳"
}, {
  'country': "Hungary",
  'flag': "🇭🇺"
}, {
  'country': "Iceland",
  'flag': "🇮🇸"
}, {
  'country': "India",
  'flag': "🇮🇳"
}, {
  'country': "Indonesia",
  'flag': "🇮🇩"
}, {
  'country': "Iran",
  'flag': "🇮🇷"
}, {
  'country': "Iraq",
  'flag': "🇮🇶"
}, {
  'country': "Ireland",
  'flag': "🇮🇪"
}, {
  'country': "Israel",
  'flag': "🇮🇱"
}, {
  'country': "Italy",
  'flag': "🇮🇹"
}, {
  'country': "Jamaica",
  'flag': "🇯🇲"
}, {
  'country': "Japan",
  'flag': "🇯🇵"
}, {
  'country': "Jordan",
  'flag': "🇯🇴"
}, {
  'country': "Kazakhstan",
  'flag': "🇰🇿"
}, {
  'country': "Kenya",
  'flag': "🇰🇪"
}, {
  'country': "Kiribati",
  'flag': "🇰🇮"
}, {
  'country': "Korea, North",
  'flag': "🇰🇵"
}, {
  'country': "Korea, South",
  'flag': "🇰🇷"
}, {
  'country': "Kosovo",
  'flag': "🇽🇰"
}, {
  'country': "Kuwait",
  'flag': "🇰🇼"
}, {
  'country': "Kyrgyzstan",
  'flag': "🇰🇬"
}, {
  'country': "Laos",
  'flag': "🇱🇦"
}, {
  'country': "Latvia",
  'flag': "🇱🇻"
}, {
  'country': "Lebanon",
  'flag': "🇱🇧"
}, {
  'country': "Lesotho",
  'flag': "🇱🇸"
}, {
  'country': "Liberia",
  'flag': "🇱🇸"
}, {
  'country': "Libya",
  'flag': "🇱🇾"
}, {
  'country': "Liechtenstein",
  'flag': "🇱🇮"
}, {
  'country': "Lithuania",
  'flag': "🇱🇹"
}, {
  'country': "Luxembourg",
  'flag': "🇱🇺"
}, {
  'country': "Madagascar",
  'flag': "🇲🇬"
}, {
  'country': "Malawi",
  'flag': "🇲🇼"
}, {
  'country': "Malaysia",
  'flag': "🇲🇾"
}, {
  'country': "Maldives",
  'flag': "🇲🇻"
}, {
  'country': "Mali",
  'flag': "🇲🇱"
}, {
  'country': "Malta",
  'flag': "🇲🇹"
}, {
  'country': "Marshall Islands",
  'flag': "🇲🇭"
}, {
  'country': "Mauritania",
  'flag': "🇲🇷"
}, {
  'country': "Mauritius",
  'flag': "🇲🇺"
}, {
  'country': "Mexico",
  'flag': "🇲🇽"
}, {
  'country': "Micronesia",
  'flag': "🇲🇵"
}, {
  'country': "Moldova",
  'flag': "🇲🇩"
}, {
  'country': "Monaco",
  'flag': "🇲🇨"
}, {
  'country': "Mongolia",
  'flag': "🇲🇳"
}, {
  'country': "Montenegro",
  'flag': "🇲🇪"
}, {
  'country': "Morocco",
  'flag': "🇲🇦"
}, {
  'country': "Mozambique",
  'flag': "🇲🇿"
}, {
  'country': "Myanmar",
  'flag': "🇲🇲"
}, {
  'country': "Namibia",
  'flag': "🇳🇦"
}, {
  'country': "Nauru",
  'flag': "🇳🇷"
}, {
  'country': "Nepal",
  'flag': "🇳🇵"
}, {
  'country': "Netherlands",
  'flag': "🇳🇱"
}, {
  'country': "New Zealand",
  'flag': "🇳🇿"
}, {
  'country': "Nicaragua",
  'flag': "🇳🇮"
}, {
  'country': "Niger",
  'flag': "🇳🇪"
}, {
  'country': "Nigeria",
  'flag': "🇳🇬"
}, {
  'country': "North Macedonia",
  'flag': "🇲🇰"
}, {
  'country': "Norway",
  'flag': "🇳🇴"
}, {
  'country': "Oman",
  'flag': "🇴🇲"
}, {
  'country': "Pakistan",
  'flag': "🇵🇰"
}, {
  'country': "Palau",
  'flag': "🇵🇼"
}, {
  'country': "Panama",
  'flag': "🇵🇦"
}, {
  'country': "Papua New Guinea",
  'flag': "🇵🇬"
}, {
  'country': "Paraguay",
  'flag': "🇵🇾"
}, {
  'country': "Peru",
  'flag': "🇵🇪"
}, {
  'country': "Philippines",
  'flag': "🇵🇭"
}, {
  'country': "Poland",
  'flag': "🇵🇱"
}, {
  'country': "Portugal",
  'flag': "🇵🇹"
}, {
  'country': "Qatar",
  'flag': "🇶🇦"
}, {
  'country': "Romania",
  'flag': "🇷🇴"
}, {
  'country': "Russia",
  'flag': "🇷🇺"
}, {
  'country': "Rwanda",
  'flag': "🇷🇼"
}, {
  'country': "Saint Kitts and Nevis",
  'flag': "🇰🇳"
}, {
  'country': "Saint Lucia",
  'flag': "🇱🇨"
}, {
  'country': "Saint Vincent and the Grenadines",
  'flag': "🇻🇨"
}, {
  'country': "Samoa",
  'flag': "🇼🇸"
}, {
  'country': "San Marino",
  'flag': "🇸🇲"
}, {
  'country': "Sao Tome and Principe",
  'flag': "🇹🇱"
}, {
  'country': "Saudi Arabia",
  'flag': "🇸🇦"
}, {
  'country': "Senegal",
  'flag': "🇸🇳"
}, {
  'country': "Serbia",
  'flag': "🇷🇸"
}, {
  'country': "Seychelles",
  'flag': "🇸🇨"
}, {
  'country': "Sierra Leone",
  'flag': "🇸🇱"
}, {
  'country': "Singapore",
  'flag': "🇸🇬"
}, {
  'country': "Slovakia",
  'flag': "🇸🇰"
}, {
  'country': "Slovenia",
  'flag': "🇸🇮"
}, {
  'country': "Solomon Islands",
  'flag': "🇸🇧"
}, {
  'country': "Somalia",
  'flag': "🇸🇴"
}, {
  'country': "South Africa",
  'flag': "🇿🇦"
}, {
  'country': "South Sudan",
  'flag': "🇸🇸"
}, {
  'country': "Spain",
  'flag': "🇪🇸"
}, {
  'country': "Sri Lanka",
  'flag': "🇱🇰"
}, {
  'country': "Sudan",
  'flag': "🇸🇩"
}, {
  'country': "Suriname",
  'flag': "🇸🇷"
}, {
  'country': "Sweden",
  'flag': "🇸🇪"
}, {
  'country': "Switzerland",
  'flag': "🇨🇭"
}, {
  'country': "Syria",
  'flag': "🇸🇾"
}, {
  'country': "Taiwan",
  'flag': "🇹🇼"
}, {
  'country': "Tajikistan",
  'flag': "🇹🇯"
}, {
  'country': "Tanzania",
  'flag': "🇹🇿"
}, {
  'country': "Thailand",
  'flag': "🇹🇭"
}, {
  'country': "Togo",
  'flag': "🇹🇬"
}, {
  'country': "Tonga",
  'flag': "🇹🇴"
}, {
  'country': "Trinidad and Tobago",
  'flag': "🇹🇹"
}, {
  'country': "Tunisia",
  'flag': "🇹🇳"
}, {
  'country': "Turkey",
  'flag': "🇹🇷"
}, {
  'country': "Turkmenistan",
  'flag': "🇹🇲"
}, {
  'country': "Tuvalu",
  'flag': "🇹🇻"
}, {
  'country': "Uganda",
  'flag': "🇺🇬"
}, {
  'country': "Ukraine",
  'flag': "🇺🇦"
}, {
  'country': "United Arab Emirates",
  'flag': "🇦🇪"
}, {
  'country': "United Kingdom",
  'flag': "🇬🇧"
}, {
  'country': "United States",
  'flag': "🇺🇸"
}, {
  'country': "Uruguay",
  'flag': "🇺🇾"
}, {
  'country': "Uzbekistan",
  'flag': "🇺🇿"
}, {
  'country': "Vanuatu",
  'flag': "🇻🇺"
}, {
  'country': "Vatican City",
  'flag': "🇻🇦"
}, {
  'country': "Venezuela",
  'flag': "🇻🇪"
}, {
  'country': "Vietnam",
  'flag': "🇻🇳"
}, {
  'country': "Yemen",
  'flag': "🇾🇪"
}, {
  'country': "Zambia",
  'flag': "🇿🇲"
}, {
  'country': "Zimbabwe",
  'flag': "🇿🇼"
}];
zokou({
  'nomCom': "guessflag",
  'categorie': "Games"
}, async (_0x34b26a, _0x1e9b51, _0x3f0ebf) => {
  const {
    ms: _0x28b899,
    repondre: _0x2bc4fd,
    prefixe: _0x1adb2f
  } = _0x3f0ebf;
  const _0x2b1b51 = flagGame[Math.floor(Math.random() * flagGame.length)];
  await _0x1e9b51.sendMessage(_0x34b26a, {
    'text': "🌍 Guess the country for this flag: " + _0x2b1b51.flag + "\n\nYou have 30 seconds to guess! Mungai loves you💘"
  }, {
    'quoted': _0x28b899
  });
  const _0x2ae123 = async (_0x43bef4, _0x5ed4f6) => {
    return _0x43bef4.toLowerCase() === _0x2b1b51.country.toLowerCase() ? (await _0x1e9b51.sendMessage(_0x34b26a, {
      'text': "✅ Correct! The country is " + _0x2b1b51.country + '.'
    }, {
      'quoted': _0x28b899
    }), true) : _0x5ed4f6 === 1 ? (await _0x1e9b51.sendMessage(_0x34b26a, {
      'text': "❌ Wrong answer! You have one more try."
    }, {
      'quoted': _0x28b899
    }), false) : (await _0x1e9b51.sendMessage(_0x34b26a, {
      'text': "⏳ Time's up! The correct answer was: " + _0x2b1b51.country
    }, {
      'quoted': _0x28b899
    }), true);
  };
  const _0x2fec9b = _0x5315f3 => new Promise(_0x412977 => setTimeout(_0x412977, _0x5315f3));
  await _0x2fec9b(10000);
  if (!(await _0x2ae123("exampleUserResponse", 1))) {
    await _0x2fec9b(1000);
    await _0x1e9b51.sendMessage(_0x34b26a, {
      'text': "You now have 10 seconds to make another guess!Mungai Loves You💚"
    }, {
      'quoted': _0x28b899
    });
    await _0x2fec9b(10000);
    await _0x2ae123("exampleUserResponse", 2);
  } else {
    await _0x1e9b51.sendMessage(_0x34b26a, {
      'text': "Try, you might get this!"
    }, {
      'quoted': _0x28b899
    });
  }
});
