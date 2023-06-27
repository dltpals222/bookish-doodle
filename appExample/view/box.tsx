import React from 'react';
import {StyleSheet, View} from 'react-native';

interface stylePropsType {
  rounded?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Box = (props: stylePropsType) => {
  const sizes = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };
  return (
    <View
      style={[
        styles.box,
        props.rounded && styles.rounded,
        sizes[props.size || 'medium'],
      ]}
    />
  );
};

Box.defaultProps = {
  size: 'medium',
};

interface stylesTypes {
  [key: string]: {
    [key: string]: number | string;
  };
}

const styles: stylesTypes = StyleSheet.create({
  box: {
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

export default Box;
