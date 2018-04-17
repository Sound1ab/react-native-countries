import Home from '../Home.js';
import Button from '../../atoms/Button.js';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const navigation = {navigate: jest.fn()};

describe('Home', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Home navigation={navigation}/>
        );
        jest.clearAllMocks();
    });
    it('renders a start button', () => {
        expect(wrapper.find(Button).length).toBe(1);
    });
    it('navigates to country list when start button is clicked', () => {
    	const button = wrapper.find(Button);
        button.simulate('press');
        expect(navigation.navigate).toBeCalledWith('CountryList');
    });
});