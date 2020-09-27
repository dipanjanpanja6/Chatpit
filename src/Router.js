import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Layout } from '@ui-kitten/components';
import Chat from './page/Chat';
import About from './page/About';
import Profile from './page/Profile';
import Home from './page/Home';
import ChatScreen from './page/ChatScreen';
import Setting from './page/Setting';

const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs() {
    const theme=useTheme()
    console.log(theme); 
    return (<Layout style={{ flex: 1 }}>

        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Chat') {
                    iconName = focused ? 'message-circle' : 'message-circle-outline';
                } else if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                } else if (route.name === 'Setting') {
                    iconName = focused ? 'settings' : 'settings-outline';
                }
                return <Icon name={iconName} fill={color} style={styles.icon} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: theme.dark?'#fff':'#000',
                inactiveTintColor: '#8F9BB0',
                activeBackgroundColor:theme.dark?'#f00':"#fff",
                // inactiveBackgroundColor:"#f00",
            }}>
            <Tab.Screen component={Chat} name="Chat" />
            {/* <Tab.Screen component={Properties} name="Properties" /> */}
            <Tab.Screen component={Home} name="Home" />
            <Tab.Screen component={Profile} name="Profile" />
        </Tab.Navigator>
    </Layout>);
}

export const Router = () => {
    return (
        <NavigationContainer >
            <Navigator headerMode='none'>
                <Screen component={HomeTabs} name="MainScreen" />
                <Screen component={About} name="About" />
                <Screen component={ChatScreen} name="ChatScreen" />
                <Screen component={Setting} name="Setting" />
                {/*
                <Screen component={Refer} name="Refer" />
                <Screen component={Payments} name="Payments" />
                <Screen component={Room} name="Room" /> 
                */}
            </Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    icon: {
        height: 32,
        width: 32
    }
})
Router.propTypes = {
    // prop: PropTypes
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Router)
