import React, {Component} from 'react';
import ListItem from '../molecules/ListItem.js';
import FlatList from '../atoms/FlatList.js';

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
            console.log(formattedData);
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

    renderItem = ({item: {name, region, population, capital, flag}, index}) => {
        return <ListItem
            key={index}
            name={name}
            region={region}
            population={population}
            capital={capital}
            flag={flag}
        />;
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