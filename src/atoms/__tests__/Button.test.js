import React from 'react';
import Button from '../Button.js';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Button', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Button>Button text</Button>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
