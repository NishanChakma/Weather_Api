let array = [
  {
    LocalObservationDateTime: '2019-12-16T17:00:00+06:00',
    EpochTime: 1576494000,
    WeatherText: 'Partly sunny',
    WeatherIcon: 3,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {Value: 25.0, Unit: 'C', UnitType: 17},
      Imperial: {Value: 77.0, Unit: 'F', UnitType: 18},
    },
    RealFeelTemperature: {
      Metric: {Value: 23.8, Unit: 'C', UnitType: 17},
      Imperial: {Value: 75.0, Unit: 'F', UnitType: 18},
    },
    RealFeelTemperatureShade: {
      Metric: {Value: 23.8, Unit: 'C', UnitType: 17},
      Imperial: {Value: 75.0, Unit: 'F', UnitType: 18},
    },
    RelativeHumidity: 53,
    DewPoint: {
      Metric: {Value: 15.0, Unit: 'C', UnitType: 17},
      Imperial: {Value: 59.0, Unit: 'F', UnitType: 18},
    },
    Wind: {
      Direction: {Degrees: 315, Localized: 'NW', English: 'NW'},
      Speed: {
        Metric: {Value: 11.1, Unit: 'km/h', UnitType: 7},
        Imperial: {Value: 6.9, Unit: 'mi/h', UnitType: 9},
      },
    },
    WindGust: {
      Speed: {
        Metric: {Value: 11.1, Unit: 'km/h', UnitType: 7},
        Imperial: {Value: 6.9, Unit: 'mi/h', UnitType: 9},
      },
    },
    UVIndex: 0,
    UVIndexText: 'Low',
    Visibility: {
      Metric: {Value: 3.2, Unit: 'km', UnitType: 6},
      Imperial: {Value: 2.0, Unit: 'mi', UnitType: 2},
    },
    ObstructionsToVisibility: 'H',
    CloudCover: 35,
    Ceiling: {
      Metric: {Value: 11308.0, Unit: 'm', UnitType: 5},
      Imperial: {Value: 37100.0, Unit: 'ft', UnitType: 0},
    },
    Pressure: {
      Metric: {Value: 1015.0, Unit: 'mb', UnitType: 14},
      Imperial: {Value: 29.97, Unit: 'inHg', UnitType: 12},
    },
    PressureTendency: {LocalizedText: 'Steady', Code: 'S'},
    Past24HourTemperatureDeparture: {
      Metric: {Value: 1.1, Unit: 'C', UnitType: 17},
      Imperial: {Value: 2.0, Unit: 'F', UnitType: 18},
    },
    ApparentTemperature: {
      Metric: {Value: 25.6, Unit: 'C', UnitType: 17},
      Imperial: {Value: 78.0, Unit: 'F', UnitType: 18},
    },
    WindChillTemperature: {
      Metric: {Value: 25.0, Unit: 'C', UnitType: 17},
      Imperial: {Value: 77.0, Unit: 'F', UnitType: 18},
    },
    WetBulbTemperature: {
      Metric: {Value: 18.5, Unit: 'C', UnitType: 17},
      Imperial: {Value: 65.0, Unit: 'F', UnitType: 18},
    },
    Precip1hr: {
      Metric: {Value: 0.0, Unit: 'mm', UnitType: 3},
      Imperial: {Value: 0.0, Unit: 'in', UnitType: 1},
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: {Value: 0.0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0.0, Unit: 'in', UnitType: 1},
      },
      PastHour: {
        Metric: {Value: 0.0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0.0, Unit: 'in', UnitType: 1},
      },
      Past3Hours: {
        Metric: {Value: 0.0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0.0, Unit: 'in', UnitType: 1},
      },
      Past6Hours: {
        Metric: {Value: 0.0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0.0, Unit: 'in', UnitType: 1},
      },
      Past9Hours: {
        Metric: {Value: 0.0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0.0, Unit: 'in', UnitType: 1},
      },
      Past12Hours: {
        Metric: {Value: 0.0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0.0, Unit: 'in', UnitType: 1},
      },
      Past18Hours: {
        Metric: {Value: 0.0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0.0, Unit: 'in', UnitType: 1},
      },
      Past24Hours: {
        Metric: {Value: 0.0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0.0, Unit: 'in', UnitType: 1},
      },
    },
    TemperatureSummary: {
      Past6HourRange: {
        Minimum: {
          Metric: {Value: 23.1, Unit: 'C', UnitType: 17},
          Imperial: {Value: 74.0, Unit: 'F', UnitType: 18},
        },
        Maximum: {
          Metric: {Value: 26.3, Unit: 'C', UnitType: 17},
          Imperial: {Value: 79.0, Unit: 'F', UnitType: 18},
        },
      },
      Past12HourRange: {
        Minimum: {
          Metric: {Value: 17.8, Unit: 'C', UnitType: 17},
          Imperial: {Value: 64.0, Unit: 'F', UnitType: 18},
        },
        Maximum: {
          Metric: {Value: 26.3, Unit: 'C', UnitType: 17},
          Imperial: {Value: 79.0, Unit: 'F', UnitType: 18},
        },
      },
      Past24HourRange: {
        Minimum: {
          Metric: {Value: 17.8, Unit: 'C', UnitType: 17},
          Imperial: {Value: 64.0, Unit: 'F', UnitType: 18},
        },
        Maximum: {
          Metric: {Value: 26.3, Unit: 'C', UnitType: 17},
          Imperial: {Value: 79.0, Unit: 'F', UnitType: 18},
        },
      },
    },
    MobileLink:
      'http://m.accuweather.com/en/bd/dhaka/28143/current-weather/28143?lang=en-us',
    Link:
      'http://www.accuweather.com/en/bd/dhaka/28143/current-weather/28143?lang=en-us',
  },
];

export default array;
