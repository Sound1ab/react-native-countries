import React from 'react';
import SVGImage from 'react-native-svg-image';

const Image = ({source}) => {
    return <SVGImage source={{uri: source}}/>
};

export default Image;