import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('hello')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="coucou je suis la" onPress={() => setOutputText('The text changed')}/>
      <Button title="return" onPress={() => setOutputText('hello')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
