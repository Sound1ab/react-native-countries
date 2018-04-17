import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text.js';
import PropTypes from "prop-types";

const Container = styled.View`
  width: 100%;
  padding: 16px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 8px;
  shadow-opacity: 0.25;
  shadow-radius: 1px;
  shadow-color: black;
  shadow-offset: 0px 0px;
`;

const ListItem = ({name}) => {
    return (
        <Container>
            <Text color={'black'}>{name}</Text>
        </Container>
    )
};

ListItem.propTypes = {
    name: PropTypes.string
};

ListItem.defaultProps = {
    name: ''
};

export default ListItem;