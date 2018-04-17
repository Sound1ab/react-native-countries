import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text.js';
import Image from '../atoms/Image.js';
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ImageContainer = styled.View`
    flex: 1 1;
`;

const ContentContainer = styled.View`
    flex: 2 1;
    background-color: antiquewhite;
`;

const ListItem = ({name, flag}) => {
    return (
        <Container>
            <ImageContainer>
                <Image source={flag}/>
            </ImageContainer>
            <ContentContainer>
                <Text color={'black'}>{name}</Text>
            </ContentContainer>
        </Container>
    )
};

ListItem.propTypes = {
    name: PropTypes.string,
    region: PropTypes.string,
    population: PropTypes.number,
    capital: PropTypes.string,
    flag: PropTypes.string
};

ListItem.defaultProps = {
    name: '',
    region: '',
    population: 0,
    capital: '',
    flag: ''
};

export default ListItem;