import {
  LOCATION_DATA,
  RETRIVE_DATA,
  CURRENT_WEATHER_DATA,
  FIVE_DAY_DATA,
} from '../actions/type';

const initialState = {
  locationData: [],
  retriveData: [],
  currentData: [],
  fiveDayData: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOCATION_DATA:
      return {
        ...state,
        locationData: action.payload,
      };
    case RETRIVE_DATA:
      return {
        ...state,
        retriveData: action.payload,
      };
    case CURRENT_WEATHER_DATA:
      return {
        ...state,
        currentData: action.payload,
      };
    case FIVE_DAY_DATA:
      return {
        ...state,
        fiveDayData: action.payload,
      };
    default:
      return state;
  }
}
