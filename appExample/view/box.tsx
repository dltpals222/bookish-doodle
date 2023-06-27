import React from 'react';
import {StyleSheet, View} from 'react-native';

interface stylePropsType {
  rounded?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: string;
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
        props.rounded && styles.rounded,
        sizes[props.size || 'medium'],
        {
          backgroundColor: props.color,
        },
      ]}
    />
  );
};

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

interface stylesTypes {
  [key: string]: {
    [key: string]: number | string;
  };
}

const styles: stylesTypes = StyleSheet.create({
  // box: {
  //   backgroundColor: 'black',
  // },
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
