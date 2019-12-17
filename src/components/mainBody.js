import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/styles';

class AllData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const currentData = this.props.CurrentData;
    return (
      <View>
        <View style={styles.midbox}>
          <View style={styles.midbox1}>
            <Image
              style={styles.midImg}
              source={require('../assets/png/daily.png')}
            />
          </View>
          <View style={styles.midbox2}>
            <Text style={styles.Cstyle}>Current Weather</Text>
          </View>
        </View>
        <View style={styles.midbox3}>
          <View style={styles.midbox4}>
            <Text style={styles.humid}>Humidity</Text>
            <Text style={styles.Cstyle}>{currentData.RelativeHumidity}%</Text>
          </View>
          <View style={styles.midbox5}>
            <Text style={styles.humid}>UV Index</Text>
            <Text style={styles.humid}>{currentData.UVIndex}</Text>
          </View>
          <View style={styles.midbox6}>
            <Text style={styles.humid}>Pressure</Text>
            <Text style={styles.humid}>
              {currentData.Pressure.Metric.Value} mb
            </Text>
          </View>
          <View style={styles.midbox7}>
            <Text style={styles.humid}>Wind Speed</Text>
            <Text style={styles.humid}>
              {currentData.Wind.Speed.Metric.Value} km/h
            </Text>
          </View>
        </View>
        <View style={styles.midbox8}>
          <Text style={styles.temp}>
            {currentData.Temperature.Metric.Value}
          </Text>
          <Image
            style={styles.tempimg}
            source={require('../assets/png/cell.png')}
          />
        </View>
        <View style={styles.midbox9}>
          <Text style={styles.Cstyle}>
            Realfeel: {currentData.RealFeelTemperature.Metric.Value}
          </Text>
          <Image
            style={styles.rImg}
            source={require('../assets/png/cell.png')}
          />
        </View>
        <View style={styles.midbox11}>
          <Text style={styles.lastmid}>
            Current Weather: {currentData.WeatherText}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  CurrentData: state.apiData.currentData,
});

export default connect(mapStateToProps)(AllData);
