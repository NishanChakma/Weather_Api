import React, {Component} from 'react';
import {ScrollView, Text, View, Image, Button} from 'react-native';
import {connect} from 'react-redux';
import iconHelper from '../utilities/weatherIconHelper';
import styles from '../styles/styles';
import Modal from 'react-native-modalbox';
class Bottomdata extends Component {
  constructor(props) {
    super(props);
  }

  showData = (res, key) => {
    let date = res.Date;
    let newDate = date.slice(0, 10);
    let weatherText = res.Day.IconPhrase;
    let weatherIcon = iconHelper(weatherText);
    return (
      <View style={styles.mapBox} key={key}>
        <View style={styles.midbox3}>
          <View style={styles.bottomBox1}>
            <Image style={styles.weatherIcon} source={weatherIcon} />
          </View>
          <View style={styles.bottomBox2}>
            <Text style={styles.Cstyle}>{newDate}</Text>
            <Text style={styles.bottomtext}>
              {weatherText}, Hour of Sun: {res.HoursOfSun}, Wind Speed:{' '}
              {res.Day.Wind.Speed.Value} km/h
            </Text>
          </View>
          <View style={styles.bottomBox3}>
            <Text style={styles.bottomBox4}>
              {res.Temperature.Maximum.Value}
            </Text>
            <Image
              style={styles.rImg}
              source={require('../assets/png/cell.png')}
            />
          </View>
        </View>
        <View style={styles.bottomborder}></View>
      </View>
    );
  };
  render() {
    const data = this.props.FiveDayData.DailyForecasts;
    let allData = data.map((res, key) => {
      return this.showData(res, key);
    });
    return (
      <ScrollView style={styles.bottomContainer}>
        <View style={styles.midbox}>
          <View style={styles.midbox1}>
            <Image
              style={styles.midImg}
              source={require('../assets/png/details.png')}
            />
          </View>
          <View style={styles.midbox2}>
            <Text style={styles.Cstyle}>5 Day Forcast</Text>
          </View>
        </View>
        {allData}

        {/* -----------modal---------------- */}
        <Modal
          style={styles.modal}
          position={'center'}
          ref={'modal4'}
          swipeToClose={true}>
          <View style={styles.modal1}>
            <Text style={styles.mtext}>
              {this.props.FiveDayData.Headline.Text}
            </Text>
            <Button
              title="OK"
              color="#588FBC"
              onPress={() => this.refs.modal4.close()}
            />
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  FiveDayData: state.apiData.fiveDayData,
});

export default connect(mapStateToProps)(Bottomdata);
