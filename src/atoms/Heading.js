import React from 'react';
import styled, {css} from 'styled-components';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {shevySingleton} from '../assets/shevy';
const shevy = shevySingleton.getInstance();

// const StyledHeading = ({children, className}) => {
//     return React.createElement(Text, {className: className}, children);
// };

function styles (type) {

    const {fontSize, lineHeight, marginBottom} = shevy[type];
    return css`
      font-size: ${fontSize}
      margin-bottom: ${marginBottom}
    `;
}

const StyledHeading = styled.Text`
    color: ${({color}) => color ? color : 'black'};
    font-family: 'System';
    font-weight: 200;
    ${({type}) => type ? styles(type) : null}
`;

StyledHeading.propTypes = {
    color: PropTypes.string,
    type: function (props, propName) {
        if (!props[propName].match(/(h1|h2|h3|h4|h5|h6)/)) {
            return new Error ('Invalid prop type');
        }
    }
};

StyledHeading.defaultProps = {
    color: 'black',
    type: 'h1'
};

export default StyledHeading;

// export default styled(StyledHeading)`
//     color: ${({color}) => color ? color : 'black'};
//     font-family: 'San Francisco';
//     font-weight: 100;
//     ${({type}) => type ? styles(type) : null}
// `;
