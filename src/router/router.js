import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from '../pages/Home.js';
import CountryList from '../pages/CountryList.js';

const RootStack = StackNavigator({
    Home: {
        screen: Home,
    },
    CountryList: {
        screen: CountryList
    }
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'tomato',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
});

export default class Router extends React.Component {
    render() {
        return <RootStack/>;
    }
}