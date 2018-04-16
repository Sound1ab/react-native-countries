import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const InnerView = styled.View`
    width: 50;
    height: 50;
    background-color: aquamarine;
`;

export default class App extends React.Component {
    render() {
        return (
            <StyledView>
                <InnerView></InnerView>
            </StyledView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
