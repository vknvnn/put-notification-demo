/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

/*import Drawer from "./Drawer";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);*/
import Stacks from "./Stacks";

export default () =>
    <Root>
        <Stacks />
    </Root>;
