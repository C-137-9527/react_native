import Colors from '../../constants/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: Colors.accent500, fontSize: 36, fontWeight: 'bold' },
});
