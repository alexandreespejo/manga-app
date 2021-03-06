import React from 'react';
import { ActivityIndicator } from 'react-native';
import Colors from '../../constants/Colors';
import { Container } from './style';

function Load({footer}) {
  return (
    <Container footer={footer}>
      <ActivityIndicator size="large" color={Colors.light.tint} />
    </Container>
  );
}

export default Load;
