import React, { Component } from "react";
import Dashboard from "./components/dashboard";
import Account from "./components/account";
import Schedule from "./components/schedule";
import { TabNavigator } from "react-navigation";
import {Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right,Icon, Badge
} from "native-base";
export default (Stacks = TabNavigator(
  {
    Dashboard: { screen: Dashboard },
    Schedule: { screen: Schedule },  
    Account: { screen: Account },  

  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
            <FooterTab>
              <Button
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Dashboard")}
              vertical
              badge>
              <Badge><Text>2</Text></Badge>
              <Icon active={props.navigationState.index === 0} name="apps" />
              <Text>Dashboard</Text>
            </Button>
            <Button
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Schedule")}
              vertical
              badge>
              <Badge><Text>4</Text></Badge>
              <Icon active={props.navigationState.index === 1} name="calendar" />
              <Text>Schedule</Text>
            </Button>   
            <Button
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Account")}
              vertical
              badge>
              <Badge><Text>1</Text></Badge>
              <Icon active={props.navigationState.index === 2} name="contact" />
              <Text>Account</Text>
            </Button>     
          </FooterTab>
        </Footer>
      );
    }
  }
));