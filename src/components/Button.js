import React from 'react';
import { View } from 'react-native';

const customButton = ({children, style, ...rest }) => (
    <View style={style}>
        {children}
    </View>
);

export default customButton;
