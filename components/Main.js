import React, { Component } from "react";
import {
  ScrollView,
  View,
  ActivityIndicator,
  RefreshControl,
  ToastAndroid
} from "react-native";
import Header from "./Header";
import Alldata from "./mainbody";
import Bottomdata from "./bottomdata";
import { connect } from "react-redux";
import {
  locationData,
  retriveData,
  currentData,
  fiveDayData
} from "../actions/postsactions";
import {
  requestToLocationApi,
  requestToWeatherApi,
  requestToCurrentWeatherApi,
  requestTo5DayApi
} from "./apiMethods";
import styles from "./styles";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      refreshing: false
    };
  }
  apiCall = async () => {
    let locationApiCall = await requestToLocationApi();
    if (locationApiCall.Code == "ServiceUnavailable") {
      alert(
        "Api request is over than 50 times. Please change the api key or try tommmorow!"
      );
      this.setState({ loading: true });
      return;
    }
    let weatherApiCall = await requestToWeatherApi(locationApiCall.Key);
    let currentWeatherCall = await requestToCurrentWeatherApi(
      locationApiCall.Key
    );
    let fiveDayApiCall = await requestTo5DayApi(locationApiCall.Key);
    this.props.locationData(locationApiCall);
    this.props.retriveData(weatherApiCall);
    this.props.currentData(currentWeatherCall);
    this.props.fiveDayData(fiveDayApiCall);
    this.setState({ loading: false, refreshing: false });
  };
  componentDidMount() {
    this.apiCall();
  }
  _onRefresh() {
    this.setState({ refreshing: true });
    this.apiCall();
    ToastAndroid.show("Data is updated !", ToastAndroid.LONG);
  }
  render() {
    const View2 = (
      <ScrollView
        style={styles.mainbox}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
        <Header navigation={this.props} />
        <Alldata />
        <Bottomdata />
      </ScrollView>
    );
    const View1 = (
      <View style={styles.mainbox1}>
        <ActivityIndicator size="small" color="#4A556E" />
      </View>
    );
    return this.state.loading ? View1 : View2;
  }
}

const mapStateToProps = state => ({
  AllLocationData: state.apiData.locationData,
  RetriveData: state.apiData.retriveData
});

export default connect(mapStateToProps, {
  locationData,
  retriveData,
  currentData,
  fiveDayData
})(Main);
