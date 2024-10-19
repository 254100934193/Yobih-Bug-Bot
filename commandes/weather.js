const axios = require("axios");
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "weather",
  'reaction': "🌡️",
  'categorie': "Search"
}, async (_0x50a87c, _0x307848, _0xba2376) => {
  const {
    repondre: _0x1330dc,
    arg: _0x29d915,
    ms: _0x2ebb50
  } = _0xba2376;
  const _0x314b39 = _0x29d915.join(" ");
  if (!_0x314b39) {
    return _0x1330dc("Give me location...");
  }
  try {
    const _0xdf4c94 = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      'params': {
        'q': _0x314b39,
        'units': "metric",
        'appid': "060a6bcfa19809c2cd4d97a212b19273",
        'language': 'en'
      }
    });
    const _0x117dd8 = _0xdf4c94.data;
    const _0x27e01f = _0x117dd8.name;
    const _0x30fbdf = _0x117dd8.main.temp;
    const _0x300a6b = _0x117dd8.main.feels_like;
    const _0x148686 = _0x117dd8.main.temp_min;
    const _0x5b64cf = _0x117dd8.main.temp_max;
    const _0x3949ce = _0x117dd8.weather[0].description;
    const _0x5f7b48 = _0x117dd8.main.humidity;
    const _0x597e97 = _0x117dd8.wind.speed;
    const _0x31b3fa = _0x117dd8.rain ? _0x117dd8.rain['1h'] : 0;
    const _0x1c1c03 = _0x117dd8.clouds.all;
    const _0x3e5533 = new Date(_0x117dd8.sys.sunrise * 1000);
    const _0x1c8510 = new Date(_0x117dd8.sys.sunset * 1000);
    await _0x1330dc("❄️ Weather in " + _0x27e01f + "\n\n🌡️ Temperature: " + _0x30fbdf + "°C\n🌡️ Feels Like: " + _0x300a6b + "°C\n🌡️ Min Temperature: " + _0x148686 + "°C\n🌡️ Max Temperature: " + _0x5b64cf + "°C\n📝 Description: " + _0x3949ce + "\n❄️ Humidity: " + _0x5f7b48 + "%\n🌀 Wind Speed: " + _0x597e97 + " m/s\n🌧️ Rain Volume (last hour): " + _0x31b3fa + " mm\n☁️ Cloudiness: " + _0x1c1c03 + "%\n🌄 Sunrise: " + _0x3e5533.toLocaleTimeString() + "\n🌅 Sunset: " + _0x1c8510.toLocaleTimeString() + "\n🌫️ Latitude: " + _0x117dd8.coord.lat + "\n🌪️ Longitude: " + _0x117dd8.coord.lon + "\n\n🗺 Country: " + _0x117dd8.sys.country + "\n\n*°Powered by Mungai Yobih*");
  } catch (_0xa326ac) {
    console.error("Error fetching weather data:", _0xa326ac);
    await _0x1330dc("An error occurred while fetching the weather data. Please try again.");
  }
});
