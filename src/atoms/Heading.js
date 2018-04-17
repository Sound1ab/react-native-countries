import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import {shevySingleton} from '../../assets/shevy';
const shevy = shevySingleton.getInstance();

const StyledHeading = ({type, children, className}) => {
    return React.createElement(type, {className: className}, children);
};

function styles (type) {
    const {fontSize, lineHeight, marginBottom} = shevy[type];
    return css`
      font-size: ${fontSize}
      line-height: ${lineHeight}
      margin-bottom: ${marginBottom}
    `
}

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

export default styled(StyledHeading)`
    color: ${({color}) => color ? color : 'var(--black)'};
    font-family: var(--ff-heading);
    font-weight: 100;
    ${({type}) => type ? styles(type) : null}
`;
