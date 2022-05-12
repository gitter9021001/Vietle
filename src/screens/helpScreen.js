import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HelpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>Help goes here</Text>
		
		<View>
			<Button
			title="Back"
			onPress={() => navigation.goBack()}
			/>
		</View>
    </View>
  );
}

export default HelpScreen;