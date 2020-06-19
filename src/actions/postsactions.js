import {
  LOCATION_DATA,
  RETRIVE_DATA,
  CURRENT_WEATHER_DATA,
  FIVE_DAY_DATA,
} from './type';

import {
  requestToLocationApi,
  requestToWeatherApi,
  requestToCurrentWeatherApi,
  requestTo5DayApi,
} from '../api/apiHelper';

import {BackHandler} from 'react-native';

const exit_App = () => {
  alert(
    'Api request is over than 50 times. Please change the api key or try tommmorow!',
  );
  setTimeout(() => {
    BackHandler.exitApp();
  }, 3000);
};

export const locationData = () => dispatch => {
  requestToLocationApi().then(res => {
    if (res.Code == 'ServiceUnavailable') {
      exit_App();
    } else {
      dispatch({
        type: LOCATION_DATA,
        payload: res,
      });
    }
  });
};

export const retriveDailyData = data => dispatch => {
  requestToWeatherApi(data).then(res => {
    if (res.Code == 'ServiceUnavailable') {
      exit_App();
    } else {
      dispatch({
        type: RETRIVE_DATA,
        payload: res,
      });
    }
  });
};

export const currentData = data => dispatch => {
  requestToCurrentWeatherApi(data).then(res => {
    if (res.Code == 'ServiceUnavailable') {
      exit_App();
    } else {
      dispatch({
        type: CURRENT_WEATHER_DATA,
        payload: res,
      });
    }
  });
};

export const fiveDayData = data => dispatch => {
  requestTo5DayApi(data).then(res => {
    if (res.Code == 'ServiceUnavailable') {
      exitApp();
    } else {
      dispatch({
        type: FIVE_DAY_DATA,
        payload: res,
      });
    }
  });
};
