let apiIcon = params => {
  let weather_icon = '';
  if (params.includes('sunny') || params.includes('Sunny')) {
    weather_icon = require('../assets/weatherPng/3.png');
  } else if (params.includes('Hazy')) {
    weather_icon = require('../assets/weatherPng/5.png');
  } else if (params.includes('rain') || params.includes('Rain')) {
    weather_icon = require('../assets/weatherPng/18.png');
  } else if (params.includes('thunderstroms') || params.includes('stroms')) {
    weather_icon = require('../assets/weatherPng/17.png');
  } else if (params.includes('showers')) {
    weather_icon = require('../assets/weatherPng/13.png');
  } else if (params.includes('clouds and sun')) {
    weather_icon = require('../assets/weatherPng/4.png');
  } else if (params.includes('snow') || params.includes('Snow')) {
    weather_icon = require('../assets/weatherPng/22.png');
  } else if (params.includes('cloudy') || params.includes('cloud')) {
    weather_icon = require('../assets/weatherPng/8.png');
  } else if (params.includes('ice') || params.includes('icy')) {
    weather_icon = require('../assets/weatherPng/24.png');
  } else {
    weather_icon = require('../assets/weatherPng/1.png');
  }
  return weather_icon;
};
export default apiIcon;
