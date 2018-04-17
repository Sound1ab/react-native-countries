import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text.js';
import Heading from '../atoms/Heading.js';
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
    height: 70;
`;

const ContentContainer = styled.View`
    flex: 2 1;
    padding: 0 16px;
`;

const ListItem = ({name, flag, region, population, capital}) => {
    return (
        <Container>
            <ImageContainer>
                <Image source={flag}/>
            </ImageContainer>
            <ContentContainer>
                <Heading type={'h4'}>{name}</Heading>
                <Text color={'black'}>Region: {region}</Text>
                <Text color={'black'}>Population: {population}</Text>
                <Text color={'black'}>Capital: {capital}</Text>
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