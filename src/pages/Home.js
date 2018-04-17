import React from 'react';
import Text from '../atoms/Text.js';
import Button from '../atoms/Button.js';
import Wrapper from '../atoms/Wrapper.js';
import Heading from '../atoms/Heading.js';

const Container = Wrapper.extend`
    justify-content: space-around;
`;

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    handlePress = () => {
        const {navigation} = this.props;
        navigation.navigate('CountryList');
    };

    render() {
        return (
            <Container>
                <Heading
                    type={'h1'}
                >
                    EU Countries
                </Heading>
                <Button
                    onPress={this.handlePress}
                >
                    <Text>Start</Text>
                </Button>
            </Container>
        );
    }
}