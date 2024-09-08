import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import HeartRateLimitsCalculator from './HeartRateLimitsCalculator';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);  


  const calculateHeartRateLimits = () => {
    const limits = HeartRateLimitsCalculator(age);
    setLowerLimit(limits.lowerLimit);
    setUpperLimit(limits.upperLimit);
  };

  return (
    <View>
      <Text>Syötä ikä:</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <Button title="Laske" onPress={calculateHeartRateLimits} />
      <Text>Tavoitesykeväli:</Text>
      <Text>{lowerLimit}-{upperLimit}</Text>
    </View>
  );
}