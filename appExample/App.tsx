import React from 'react';
import {SafeAreaView} from 'react-native';
import Box from './view/box';

const App = () => {
  return (
    <SafeAreaView>
      <Box rounded={true} size="large" color="#cccccc" />
    </SafeAreaView>
  );
};

export default App;
