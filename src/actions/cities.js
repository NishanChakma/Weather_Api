const cities = {
  Version: 1,
  Key: '28143',
  Type: 'City',
  Rank: 10,
  LocalizedName: 'Dhaka',
  EnglishName: 'Dhaka',
  PrimaryPostalCode: '',
  Region: {ID: 'ASI', LocalizedName: 'Asia', EnglishName: 'Asia'},
  Country: {
    ID: 'BD',
    LocalizedName: 'Bangladesh',
    EnglishName: 'Bangladesh',
  },
  AdministrativeArea: {
    ID: 'C',
    LocalizedName: 'Dhaka',
    EnglishName: 'Dhaka',
    Level: 1,
    LocalizedType: 'Division',
    EnglishType: 'Division',
    CountryID: 'BD',
  },
  TimeZone: {
    Code: 'BDT',
    Name: 'Asia/Dhaka',
    GmtOffset: 6.0,
    IsDaylightSaving: false,
    NextOffsetChange: null,
  },
  GeoPosition: {
    Latitude: 23.71,
    Longitude: 90.407,
    Elevation: {
      Metric: {Value: 5.0, Unit: 'm', UnitType: 5},
      Imperial: {Value: 16.0, Unit: 'ft', UnitType: 0},
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [],
  DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts'],
};

export default cities;
