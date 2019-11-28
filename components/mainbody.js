import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

class AllData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      Humadity: "",
      UVIndex: "",
      windSpeed: "",
      pressure: "",
      Temperature: "",
      RealFeelTemperature: "",
      WeatherText: ""
    };
  }
  componentDidMount() {
    this.setState({
      text: this.props.RetriveData.Headline.Text,
      Humadity: this.props.CurrentData.RelativeHumidity,
      UVIndex: this.props.CurrentData.UVIndex,
      windSpeed: this.props.CurrentData.Wind.Speed.Metric.Value,
      pressure: this.props.CurrentData.Pressure.Metric.Value,
      Temperature: this.props.CurrentData.Temperature.Metric.Value,
      RealFeelTemperature: this.props.CurrentData.RealFeelTemperature.Metric
        .Value,
      WeatherText: this.props.CurrentData.WeatherText
    });
  }
  render() {
    return (
      <View>
        <View style={styles.midbox}>
          <View style={styles.midbox1}>
            <Image
              style={styles.midImg}
              source={require("./images/daily.png")}
            />
          </View>
          <View style={styles.midbox2}>
            <Text style={styles.Cstyle}>Current Weather</Text>
          </View>
        </View>
        <View style={styles.midbox3}>
          <View style={styles.midbox4}>
            <Text style={styles.humid}>Humidity</Text>
            <Text style={styles.Cstyle}>{this.state.Humadity}%</Text>
          </View>
          <View style={styles.midbox5}>
            <Text style={styles.humid}>UV Index</Text>
            <Text style={styles.humid}>{this.state.UVIndex}</Text>
          </View>
          <View style={styles.midbox6}>
            <Text style={styles.humid}>Pressure</Text>
            <Text style={styles.humid}>{this.state.pressure} mb</Text>
          </View>
          <View style={styles.midbox7}>
            <Text style={styles.humid}>Wind Speed</Text>
            <Text style={styles.humid}>{this.state.windSpeed} km/h</Text>
          </View>
        </View>
        <View style={styles.midbox8}>
          <Text style={styles.temp}>{this.state.Temperature}</Text>
          <Image style={styles.tempimg} source={require("./images/cell.png")} />
        </View>
        <View style={styles.midbox9}>
          <Text style={styles.Cstyle}>
            Realfeel: {this.state.RealFeelTemperature}
          </Text>
          <Image style={styles.rImg} source={require("./images/cell.png")} />
        </View>
        <View style={styles.midbox11}>
          <Text style={styles.lastmid}>
            Current Weather: {this.state.WeatherText}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  RetriveData: state.apiData.retriveData,
  CurrentData: state.apiData.currentData
});

export default connect(mapStateToProps)(AllData);
