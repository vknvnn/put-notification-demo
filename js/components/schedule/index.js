import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default class Schedule extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>        
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Lucy Chat</Label>
            <Input />
          </Item>          
        </Content>
      </Container>
    );
  }
}