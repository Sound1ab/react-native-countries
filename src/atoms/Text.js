import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.Text`
    color: ${({color}) => color};
    font-family: 'System';
    font-weight: 200;
`;

Text.propTypes = {
    color: PropTypes.string
};

Text.defaultProps = {
    color: 'white'
};

export default Text;