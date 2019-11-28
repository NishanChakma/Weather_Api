import {
  LOCATION_DATA,
  RETRIVE_DATA,
  CURRENT_WEATHER_DATA,
  FIVE_DAY_DATA
} from "./type";

export const locationData = data => dispatch => {
  dispatch({
    type: LOCATION_DATA,
    payload: data
  });
};

export const retriveData = data => dispatch => {
  dispatch({
    type: RETRIVE_DATA,
    payload: data
  });
};

export const currentData = data => dispatch => {
  dispatch({
    type: CURRENT_WEATHER_DATA,
    payload: data
  });
};

export const fiveDayData = data => dispatch => {
  dispatch({
    type: FIVE_DAY_DATA,
    payload: data
  });
};
