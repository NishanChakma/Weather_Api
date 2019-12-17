const array = {
  Headline: {
    EffectiveDate: '2019-12-21T07:00:00+06:00',
    EffectiveEpochDate: 1576890000,
    Severity: 7,
    Text: 'Partly sunny this weekend',
    Category: '',
    EndDate: null,
    EndEpochDate: null,
    MobileLink:
      'http://m.accuweather.com/en/bd/dhaka/28143/extended-weather-forecast/28143?lang=en-us',
    Link:
      'http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?lang=en-us',
  },
  DailyForecasts: [
    {
      Date: '2019-12-16T07:00:00+06:00',
      EpochDate: 1576458000,
      Temperature: {
        Minimum: {Value: 61.0, Unit: 'F', UnitType: 18},
        Maximum: {Value: 79.0, Unit: 'F', UnitType: 18},
      },
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Night: {Icon: 33, IconPhrase: 'Clear', HasPrecipitation: false},
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=1&lang=en-us',
      Link:
        'http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=1&lang=en-us',
    },
  ],
};

export default array;
