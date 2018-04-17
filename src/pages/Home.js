import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Wrapper from '../atoms/Wrapper.js';

const StyledView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export default class TestScreen extends React.Component {
    handlePress = () => {
        console.log('fire');
        const {navigation} = this.props;
        navigation.navigate('Home');
    };

    render() {
        return (
            <Wrapper>
                hey
            </Wrapper>
        );
    }
}