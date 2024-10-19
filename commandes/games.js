const {
  zokou
} = require("../framework/zokou");
const capitalGame = [{
  'country': "Afghanistan",
  'capital': "Kabul"
}, {
  'country': "Albania",
  'capital': "Tirana"
}, {
  'country': "Algeria",
  'capital': "Algiers"
}, {
  'country': "Andorra",
  'capital': "Andorra la Vella"
}, {
  'country': "Angola",
  'capital': "Luanda"
}, {
  'country': "Antigua and Barbuda",
  'capital': "Saint John's"
}, {
  'country': "Argentina",
  'capital': "Buenos Aires"
}, {
  'country': "Armenia",
  'capital': "Yerevan"
}, {
  'country': "Australia",
  'capital': "Canberra"
}, {
  'country': "Austria",
  'capital': "Vienna"
}, {
  'country': "Azerbaijan",
  'capital': "Baku"
}, {
  'country': "Bahamas",
  'capital': "Nassau"
}, {
  'country': "Bahrain",
  'capital': "Manama"
}, {
  'country': "Bangladesh",
  'capital': "Dhaka"
}, {
  'country': "Barbados",
  'capital': "Bridgetown"
}, {
  'country': "Belarus",
  'capital': "Minsk"
}, {
  'country': "Belgium",
  'capital': "Brussels"
}, {
  'country': "Belize",
  'capital': "Belmopan"
}, {
  'country': "Benin",
  'capital': "Porto-Novo"
}, {
  'country': "Bhutan",
  'capital': "Thimphu"
}, {
  'country': "Bolivia",
  'capital': "Sucre"
}, {
  'country': "Bosnia and Herzegovina",
  'capital': "Sarajevo"
}, {
  'country': "Botswana",
  'capital': "Gaborone"
}, {
  'country': "Brazil",
  'capital': "Brasília"
}, {
  'country': "Brunei",
  'capital': "Bandar Seri Begawan"
}, {
  'country': "Bulgaria",
  'capital': "Sofia"
}, {
  'country': "Burkina Faso",
  'capital': "Ouagadougou"
}, {
  'country': "Burundi",
  'capital': "Gitega"
}, {
  'country': "Cabo Verde",
  'capital': "Praia"
}, {
  'country': "Cambodia",
  'capital': "Phnom Penh"
}, {
  'country': "Cameroon",
  'capital': "Yaoundé"
}, {
  'country': "Canada",
  'capital': "Ottawa"
}, {
  'country': "Central African Republic",
  'capital': "Bangui"
}, {
  'country': "Chad",
  'capital': "N'Djamena"
}, {
  'country': "Chile",
  'capital': "Santiago"
}, {
  'country': "China",
  'capital': "Beijing"
}, {
  'country': "Colombia",
  'capital': "Bogotá"
}, {
  'country': "Comoros",
  'capital': "Moroni"
}, {
  'country': "Congo, Democratic Republic of the",
  'capital': "Kinshasa"
}, {
  'country': "Congo, Republic of the",
  'capital': "Brazzaville"
}, {
  'country': "Costa Rica",
  'capital': "San José"
}, {
  'country': "Croatia",
  'capital': "Zagreb"
}, {
  'country': "Cuba",
  'capital': "Havana"
}, {
  'country': "Cyprus",
  'capital': "Nicosia"
}, {
  'country': "Czech Republic",
  'capital': "Prague"
}, {
  'country': "Denmark",
  'capital': "Copenhagen"
}, {
  'country': "Djibouti",
  'capital': "Djibouti"
}, {
  'country': "Dominica",
  'capital': "Roseau"
}, {
  'country': "Dominican Republic",
  'capital': "Santo Domingo"
}, {
  'country': "East Timor",
  'capital': "Dili"
}, {
  'country': "Ecuador",
  'capital': "Quito"
}, {
  'country': "Egypt",
  'capital': "Cairo"
}, {
  'country': "El Salvador",
  'capital': "San Salvador"
}, {
  'country': "Equatorial Guinea",
  'capital': "Malabo"
}, {
  'country': "Eritrea",
  'capital': "Asmara"
}, {
  'country': "Estonia",
  'capital': "Tallinn"
}, {
  'country': "Eswatini",
  'capital': "Mbabane"
}, {
  'country': "Ethiopia",
  'capital': "Addis Ababa"
}, {
  'country': "Fiji",
  'capital': "Suva"
}, {
  'country': "Finland",
  'capital': "Helsinki"
}, {
  'country': "France",
  'capital': "Paris"
}, {
  'country': "Gabon",
  'capital': "Libreville"
}, {
  'country': "Gambia",
  'capital': "Banjul"
}, {
  'country': "Georgia",
  'capital': "Tbilisi"
}, {
  'country': "Germany",
  'capital': "Berlin"
}, {
  'country': "Ghana",
  'capital': "Accra"
}, {
  'country': "Greece",
  'capital': "Athens"
}, {
  'country': "Grenada",
  'capital': "St. George's"
}, {
  'country': "Guatemala",
  'capital': "Guatemala City"
}, {
  'country': "Guinea",
  'capital': "Conakry"
}, {
  'country': "Guinea-Bissau",
  'capital': "Bissau"
}, {
  'country': "Guyana",
  'capital': "Georgetown"
}, {
  'country': "Haiti",
  'capital': "Port-au-Prince"
}, {
  'country': "Honduras",
  'capital': "Tegucigalpa"
}, {
  'country': "Hungary",
  'capital': "Budapest"
}, {
  'country': "Iceland",
  'capital': "Reykjavík"
}, {
  'country': "India",
  'capital': "New Delhi"
}, {
  'country': "Indonesia",
  'capital': "Jakarta"
}, {
  'country': "Iran",
  'capital': "Tehran"
}, {
  'country': "Iraq",
  'capital': "Baghdad"
}, {
  'country': "Ireland",
  'capital': "Dublin"
}, {
  'country': "Israel",
  'capital': "Jerusalem"
}, {
  'country': "Italy",
  'capital': "Rome"
}, {
  'country': "Jamaica",
  'capital': "Kingston"
}, {
  'country': "Japan",
  'capital': "Tokyo"
}, {
  'country': "Jordan",
  'capital': "Amman"
}, {
  'country': "Kazakhstan",
  'capital': "Astana"
}, {
  'country': "Kenya",
  'capital': "Nairobi"
}, {
  'country': "Kiribati",
  'capital': "Tarawa"
}, {
  'country': "Korea, North",
  'capital': "Pyongyang"
}, {
  'country': "Korea, South",
  'capital': "Seoul"
}, {
  'country': "Kosovo",
  'capital': "Pristina"
}, {
  'country': "Kuwait",
  'capital': "Kuwait City"
}, {
  'country': "Kyrgyzstan",
  'capital': "Bishkek"
}, {
  'country': "Laos",
  'capital': "Vientiane"
}, {
  'country': "Latvia",
  'capital': "Riga"
}, {
  'country': "Lebanon",
  'capital': "Beirut"
}, {
  'country': "Lesotho",
  'capital': "Maseru"
}, {
  'country': "Liberia",
  'capital': "Monrovia"
}, {
  'country': "Libya",
  'capital': "Tripoli"
}, {
  'country': "Liechtenstein",
  'capital': "Vaduz"
}, {
  'country': "Lithuania",
  'capital': "Vilnius"
}, {
  'country': "Luxembourg",
  'capital': "Luxembourg City"
}, {
  'country': "Madagascar",
  'capital': "Antananarivo"
}, {
  'country': "Malawi",
  'capital': "Lilongwe"
}, {
  'country': "Malaysia",
  'capital': "Kuala Lumpur"
}, {
  'country': "Maldives",
  'capital': "Malé"
}, {
  'country': "Mali",
  'capital': "Bamako"
}, {
  'country': "Malta",
  'capital': "Valletta"
}, {
  'country': "Marshall Islands",
  'capital': "Majuro"
}, {
  'country': "Mauritania",
  'capital': "Nouakchott"
}, {
  'country': "Mauritius",
  'capital': "Port Louis"
}, {
  'country': "Mexico",
  'capital': "Mexico City"
}, {
  'country': "Micronesia",
  'capital': "Palikir"
}, {
  'country': "Moldova",
  'capital': "Chișinău"
}, {
  'country': "Monaco",
  'capital': "Monaco"
}, {
  'country': "Mongolia",
  'capital': "Ulaanbaatar"
}, {
  'country': "Montenegro",
  'capital': "Podgorica"
}, {
  'country': "Morocco",
  'capital': "Rabat"
}, {
  'country': "Mozambique",
  'capital': "Maputo"
}, {
  'country': "Myanmar",
  'capital': "Naypyidaw"
}, {
  'country': "Namibia",
  'capital': "Windhoek"
}, {
  'country': "Nauru",
  'capital': "Yaren District"
}, {
  'country': "Nepal",
  'capital': "Kathmandu"
}, {
  'country': "Netherlands",
  'capital': "Amsterdam"
}, {
  'country': "New Zealand",
  'capital': "Wellington"
}, {
  'country': "Nicaragua",
  'capital': "Managua"
}, {
  'country': "Niger",
  'capital': "Niamey"
}, {
  'country': "Nigeria",
  'capital': "Abuja"
}, {
  'country': "North Macedonia",
  'capital': "Skopje"
}, {
  'country': "Norway",
  'capital': "Oslo"
}, {
  'country': "Oman",
  'capital': "Muscat"
}, {
  'country': "Pakistan",
  'capital': "Islamabad"
}, {
  'country': "Palau",
  'capital': "Ngerulmud"
}, {
  'country': "Panama",
  'capital': "Panama City"
}, {
  'country': "Papua New Guinea",
  'capital': "Port Moresby"
}, {
  'country': "Paraguay",
  'capital': "Asunción"
}, {
  'country': "Peru",
  'capital': "Lima"
}, {
  'country': "Philippines",
  'capital': "Manila"
}, {
  'country': "Poland",
  'capital': "Warsaw"
}, {
  'country': "Portugal",
  'capital': "Lisbon"
}, {
  'country': "Qatar",
  'capital': "Doha"
}, {
  'country': "Romania",
  'capital': "Bucharest"
}, {
  'country': "Russia",
  'capital': "Moscow"
}, {
  'country': "Rwanda",
  'capital': "Kigali"
}, {
  'country': "Saint Kitts and Nevis",
  'capital': "Basseterre"
}, {
  'country': "Saint Lucia",
  'capital': "Castries"
}, {
  'country': "Saint Vincent and the Grenadines",
  'capital': "Kingstown"
}, {
  'country': "Samoa",
  'capital': "Apia"
}, {
  'country': "San Marino",
  'capital': "San Marino"
}, {
  'country': "Sao Tome and Principe",
  'capital': "São Tomé"
}, {
  'country': "Saudi Arabia",
  'capital': "Riyadh"
}, {
  'country': "Senegal",
  'capital': "Dakar"
}, {
  'country': "Serbia",
  'capital': "Belgrade"
}, {
  'country': "Seychelles",
  'capital': "Victoria"
}, {
  'country': "Sierra Leone",
  'capital': "Freetown"
}, {
  'country': "Singapore",
  'capital': "Singapore"
}, {
  'country': "Slovakia",
  'capital': "Bratislava"
}, {
  'country': "Slovenia",
  'capital': "Ljubljana"
}, {
  'country': "Solomon Islands",
  'capital': "Honiara"
}, {
  'country': "Somalia",
  'capital': "Mogadishu"
}, {
  'country': "South Africa",
  'capital': "Pretoria"
}, {
  'country': "South Sudan",
  'capital': "Juba"
}, {
  'country': "Spain",
  'capital': "Madrid"
}, {
  'country': "Sri Lanka",
  'capital': "Sri Jayawardenepura Kotte"
}, {
  'country': "Sudan",
  'capital': "Khartoum"
}, {
  'country': "Suriname",
  'capital': "Paramaribo"
}, {
  'country': "Sweden",
  'capital': "Stockholm"
}, {
  'country': "Switzerland",
  'capital': "Bern"
}, {
  'country': "Syria",
  'capital': "Damascus"
}, {
  'country': "Taiwan",
  'capital': "Taipei"
}, {
  'country': "Tajikistan",
  'capital': "Dushanbe"
}, {
  'country': "Tanzania",
  'capital': "Dodoma"
}, {
  'country': "Thailand",
  'capital': "Bangkok"
}, {
  'country': "Togo",
  'capital': "Lomé"
}, {
  'country': "Tonga",
  'capital': "Nukuʻalofa"
}, {
  'country': "Trinidad and Tobago",
  'capital': "Port of Spain"
}, {
  'country': "Tunisia",
  'capital': "Tunis"
}, {
  'country': "Turkey",
  'capital': "Ankara"
}, {
  'country': "Turkmenistan",
  'capital': "Ashgabat"
}, {
  'country': "Tuvalu",
  'capital': "Funafuti"
}, {
  'country': "Uganda",
  'capital': "Kampala"
}, {
  'country': "Ukraine",
  'capital': "Kyiv"
}, {
  'country': "United Arab Emirates",
  'capital': "Abu Dhabi"
}, {
  'country': "United Kingdom",
  'capital': "London"
}, {
  'country': "United States",
  'capital': "Washington, D.C."
}, {
  'country': "Uruguay",
  'capital': "Montevideo"
}, {
  'country': "Uzbekistan",
  'capital': "Tashkent"
}, {
  'country': "Vanuatu",
  'capital': "Port Vila"
}, {
  'country': "Vatican City",
  'capital': "Vatican City"
}, {
  'country': "Venezuela",
  'capital': "Caracas"
}, {
  'country': "Vietnam",
  'capital': "Hanoi"
}, {
  'country': "Yemen",
  'capital': "Sana'a"
}, {
  'country': "Zambia",
  'capital': "Lusaka"
}, {
  'country': "Zimbabwe",
  'capital': "Harare"
}];
zokou({
  'nomCom': "guesscapital",
  'categorie': "Games"
}, async (_0x1591a6, _0x2b4c57, _0x29da7f) => {
  const {
    ms: _0x37309e,
    repondre: _0x5d1994,
    prefixe: _0x3701ee
  } = _0x29da7f;
  const _0x5a3fa1 = capitalGame[Math.floor(Math.random() * capitalGame.length)];
  await _0x2b4c57.sendMessage(_0x1591a6, {
    'text': "🌍 Guess the capital city of this country: " + _0x5a3fa1.country + "\n\nYou have 30 seconds to guess!Mungai loves you🤍"
  }, {
    'quoted': _0x37309e
  });
  const _0x43a8fb = async (_0x47cf34, _0x2ef860, _0x195dd8) => {
    return _0x47cf34.toLowerCase() === _0x5a3fa1.capital.toLowerCase() ? (await _0x2b4c57.sendMessage(_0x1591a6, {
      'text': "✅ Correct! The capital city is " + _0x5a3fa1.capital + '.'
    }, {
      'quoted': _0x2ef860
    }), true) : _0x195dd8 === 1 ? (await _0x2b4c57.sendMessage(_0x1591a6, {
      'text': "❌ Wrong answer! You have one more try."
    }, {
      'quoted': _0x2ef860
    }), false) : (await _0x2b4c57.sendMessage(_0x1591a6, {
      'text': "⏳ Time's up! The correct answer was ,,POWERED by Mungai: " + _0x5a3fa1.capital
    }, {
      'quoted': _0x2ef860
    }), true);
  };
  const _0x182e0a = _0x33fc65 => new Promise(_0xd347cc => setTimeout(_0xd347cc, _0x33fc65));
  await _0x182e0a(10000);
  const _0x5483a7 = {
    'text': "exampleUserResponse",
    'message': _0x37309e
  };
  if (!(await _0x43a8fb("exampleUserResponse", _0x5483a7.message, 1))) {
    await _0x182e0a(1000);
    await _0x2b4c57.sendMessage(_0x1591a6, {
      'text': "You now have 10 seconds to make another guess!"
    }, {
      'quoted': _0x37309e
    });
    await _0x182e0a(10000);
    const _0x3c2173 = {
      'text': "exampleUserResponse",
      'message': _0x37309e
    };
    await _0x43a8fb("exampleUserResponse", _0x3c2173.message, 2);
  } else {
    await _0x2b4c57.sendMessage(_0x1591a6, {
      'text': "Try, you might get this!"
    }, {
      'quoted': _0x37309e
    });
  }
});
