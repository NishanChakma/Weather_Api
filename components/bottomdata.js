import React, { Component } from "react";
import { ScrollView, Text, View, Image, Button } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import Modal from "react-native-modalbox";
class Bottomdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: ""
    };
  }
  componentDidMount() {
    this.refs.modal4.open();
    this.setState({
      text: this.props.FiveDayData.Headline.Text,
      data: this.props.FiveDayData.DailyForecasts
    });
  }

  showdata = (res, key) => {
    let date = res.Date;
    var newDate = date.slice(0, 10);
    let weathertext = res.Day.IconPhrase;
    var weather_icon = "";
    if (weathertext.includes("sunshine")) {
      weather_icon = "sunshine";
    } else if (weathertext.includes("cloudy")) {
      weather_icon = "cloudy";
    } else if (weathertext.includes("rain")) {
      weather_icon = "rain";
    } else {
      weather_icon = "sunny";
    }
    return (
      <View style={styles.mapBox} key={key}>
        <View style={styles.midbox3}>
          <View style={styles.bottomBox1}>
            <Image
              style={styles.midImg}
              source={
                weather_icon == "sunshine"
                  ? require("./images/sunshine.png")
                  : this.state.status == "cloudy"
                  ? require("./images/cloudy.png")
                  : this.state.status == "rain"
                  ? require("./images/rain.png")
                  : require("./images/sunny.png")
              }
            />
          </View>
          <View style={styles.bottomBox2}>
            <Text style={styles.Cstyle}>{newDate}</Text>
            <Text style={styles.bottomtext}>
              {weathertext}, Hour of Sun: {res.HoursOfSun}, Wind Speed:{" "}
              {res.Day.Wind.Speed.Value} km/h
            </Text>
          </View>
          <View style={styles.bottomBox3}>
            <Text style={styles.bottomBox4}>
              {res.Temperature.Maximum.Value}
            </Text>
            <Image style={styles.rImg} source={require("./images/cell.png")} />
          </View>
        </View>
        <View style={styles.bottomborder}></View>
      </View>
    );
  };
  render() {
    const { data } = this.state;
    let newArr = data.map((res, key) => {
      return this.showdata(res, key);
    });
    return (
      <ScrollView style={styles.bottomContainer}>
        <View style={styles.midbox}>
          <View style={styles.midbox1}>
            <Image
              style={styles.midImg}
              source={require("./images/details.png")}
            />
          </View>
          <View style={styles.midbox2}>
            <Text style={styles.Cstyle}>5 Day Forcast</Text>
          </View>
        </View>
        {newArr}

        {/* -----------modal---------------- */}
        <Modal
          style={styles.modal}
          position={"center"}
          ref={"modal4"}
          swipeToClose={true}
        >
          <View style={styles.modal1}>
            <Text style={styles.mtext}>{this.state.text}</Text>
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
  FiveDayData: state.apiData.fiveDayData
});

export default connect(mapStateToProps)(Bottomdata);
