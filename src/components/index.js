import React, {Component} from 'react';
import {
  ScrollView,
  View,
  StatusBar,
  RefreshControl,
  ToastAndroid,
  Image,
} from 'react-native';
import Header from './Header';
import MainBody from './mainBody';
import BottomData from './bottomData';
import {connect} from 'react-redux';
import {
  locationData,
  retriveDailyData,
  currentData,
  fiveDayData,
} from '../actions/postsactions';
import styles from '../styles/styles';
class mainIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      refreshing: false,
    };
  }
  componentDidMount() {
    this.getLocationData();
  }
  getLocationData = () => {
    this.props.locationData();
  };
  // ------if getLocation Data is update this function also will be auto update!-------
  static getDerivedStateFromProps(props, state) {
    const locationKey = props.LocationData.Key;
    if (locationKey) {
      props.retriveDailyData(locationKey);
      props.currentData(locationKey);
      props.fiveDayData(locationKey);
      state.loading = false;
      state.refreshing = false;
    } else {
      state.loading = true;
    }
    return null;
  }
  // ----refresh data----
  _onRefresh() {
    this.setState({refreshing: true});
    this.getLocationData();
    ToastAndroid.show('Data is updated !', ToastAndroid.LONG);
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
        }>
        <Header navigation={this.props} />
        <MainBody />
        <BottomData />
      </ScrollView>
    );
    const View1 = (
      <View style={styles.mainbox1}>
        <StatusBar backgroundColor="#4B556E" barStyle="light-content" />
        <Image
          source={require('../assets/loader.gif')}
          style={{width: 150, height: 150}}
        />
      </View>
    );
    return this.state.loading ? View1 : View2;
  }
}

const mapStateToProps = state => ({
  LocationData: state.apiData.locationData,
});

export default connect(mapStateToProps, {
  locationData,
  retriveDailyData,
  currentData,
  fiveDayData,
})(mainIndex);
