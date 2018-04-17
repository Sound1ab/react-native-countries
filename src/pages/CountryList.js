import React, {Component} from 'react';
import styled from 'styled-components';
import {Text, SectionList, FlatList} from 'react-native';
import PropTypes from 'prop-types';

const StyledText = styled.Text`
    color: black;
`;

class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            countries: []
        };
    }

    static navigationOptions = {
        title: 'Countries'
    };

    componentWillMount = async () => {
        try {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const countries = await response.json();
            const formattedData = this.createKeys(countries);
            this.setState({
                loading: false,
                countries: formattedData
            });
        } catch (e) {
            console.log(e);
            this.setState({loading: false, error: true});
        }
    };

    createKeys = (data) => {
        return data.map(el => {
            return {
                ...el,
                key: el.name
            }
        })
    };

    renderItem = ({item, index}) => {
        console.log(item, index);
        return <Text key={index}>{item.key}</Text>;
    };

    render() {
        const {countries} = this.state;
        return (
            <FlatList
                data={countries}
                renderItem={this.renderItem}
            />
        );
    }
}

export default CountryList;