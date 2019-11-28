import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import Main from "./Main";

export default class routes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  CustomDrawerContentComponent = props => (
    <ScrollView style={{ flex: 1, backgroundColor: "#121B2A" }}>
      <View>
        <DrawerItems
          {...props}
          onItemPress={({ route, focused }) => {
            props.onItemPress({ route, focused });
            props.navigation.closeDrawer("DrawerClose");
          }}
          inactiveBackgroundColor="#121B2A"
          activeBackgroundColor="#1D2B43"
          labelStyle={{
            flex: 1,
            width: "70%",
            color: "#ffffff",
            fontSize: 14
          }}
        />
      </View>
    </ScrollView>
  );

  render() {
    const MyRoutes = createDrawerNavigator(
      {
        Home: {
          screen: Main,
          navigationOptions: {
            title: "Home",
            drawerIcon: (
              <Image
                source={require("./images/details.png")}
                style={{ height: 24, width: 24 }}
              />
            )
          }
        }
        // Webview: {
        //   screen: ,
        //   navigationOptions: {
        //     header: () => null,
        //     drawerLabel: <Hidden />
        //   }
        // }
      },
      {
        initialRouteName: "Home",
        contentComponent: this.CustomDrawerContentComponent,
        drawerOpenRoute: "DrawerOpen",
        drawerCloseRoute: "DrawerClose",
        drawerToggleRoute: "DrawerToggle",
        drawerBackgroundColor: "transparent"
      }
    );
    return <MyRoutes />;
  }
}
