import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GuessSquare from '../component/guessSquare/guessSquare.js'

function GameScreen({ navigation }) {
  return (
	<View style={{flexDirection: 'column'}}>
		<View style={{flex: 1, flexDirection: 'row', alignItems: 'top', justifyContent: 'center' }}>
			<View style={{flex: 2}}>
				<Button
				title="Help"
				onPress={() => navigation.navigate('Help')}
				/>
			</View>
		
			<View style={{flex: 2, alignItems: 'center'}}>
				<Text>Vietle</Text>
			</View>
			
			<View style={{flex: 1}}>
				<Button
				title="Stat"
				onPress={() => navigation.navigate('Stat')}
				/>
			</View>
			
			<View style={{flex: 1}}>
				<Button
				title="Setting"
				onPress={() => navigation.navigate('Setting')}
				/>
			</View>
		</View>
		
		<View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Guess Board goes here {"\n"}</Text>
			<GuessSquare />
		</View>
		
		<View style={{flex: 1}}>
			<Text>Keyboard goes here</Text>
		</View>
	</View>
  );
}

export default GameScreen;