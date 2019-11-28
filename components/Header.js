import React, { Component } from "react";
import { Text, View, Image, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "",
      country: "",
      today: ""
    };
  }
  componentDidMount() {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[new Date().getDay()];
    const Today = day + ", " + date + "/" + month + "/" + year;
    this.setState({
      state: this.props.LocationData.LocalizedName,
      country: this.props.LocationData.Country.LocalizedName,
      today: Today
    });
  }
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#666666" barStyle="light-content" />

        <View style={styles.head1}>
          <View style={styles.head2}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigation.openDrawer()}
            >
              <Image
                source={require("./images/menu.png")}
                style={styles.drawerImg}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.topComponent}>
            <View style={styles.topbox}>
              <View style={styles.topbox1}>
                <Image
                  style={styles.topimg}
                  source={require("./images/location.png")}
                />
              </View>
              <View style={styles.topbox2}>
                <Text style={styles.toptext}>
                  {this.state.state}, {this.state.country}
                </Text>
              </View>
            </View>
            <View style={styles.topbox3}>
              <Text style={styles.today}>{this.state.today}</Text>
            </View>
          </View>
        </View>
        <View style={styles.topbox4}></View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  LocationData: state.apiData.locationData
});

export default connect(mapStateToProps)(Header);
