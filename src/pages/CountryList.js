import React, {Component} from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const StyledText = styled.Text`
    color: black;
`;

class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        console.log(this.props);
    }

    handlePress = () => {
       const {navigation} = this.props;
       navigation.navigate('Home');
    };

    render() {
        return (
            <StyledText
                onPress={this.handlePress}
            >
                hey
            </StyledText>
        );
    }
}

CountryList.propTypes = {

};

CountryList.defaultProps = {

};

export default CountryList;