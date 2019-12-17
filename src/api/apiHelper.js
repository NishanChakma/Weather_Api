const key = 'no3GDRHMi1iasABKSZ5Nkewv7QHyg6xc';

export const requestToLocationApi = () => {
  let API_URL = `http://dataservice.accuweather.com/locations/v1/cities/ipaddress.json?apikey=${key}`;
  return fetch(API_URL)
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const requestToWeatherApi = location => {
  let API_URL = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${location}.json?apikey=${key}`;
  return fetch(API_URL)
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const requestToCurrentWeatherApi = location => {
  let API_URL = `http://dataservice.accuweather.com/currentconditions/v1/${location}?language=en&details=true&apikey=${key}`;
  return fetch(API_URL)
    .then(response => response.json())
    .then(res => {
      return res[0];
    })
    .catch(err => console.log(err));
};

export const requestTo5DayApi = location => {
  let API_URL = `http://dataservice.accuweather.com//forecasts/v1/daily/5day/${location}.json?language=en&details=true&metric=true&apikey=${key}`;
  return fetch(API_URL)
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
