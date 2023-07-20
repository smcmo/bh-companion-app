import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import PlaylistGenerator from './screens/PlaylistGenerator';
import EquipmentReporter from './screens/EquipmentReporter';
import CurrentDeals from './screens/CurrentDeals';
import PricingReference from './screens/PricingReference';
import CleaningList from './screens/CleaningList';
import RoomManager from './screens/RoomManager';
import SessionManager from './screens/SessionManager';
import SpectatorView from './screens/SpectatorView';
import ArenaEditor from './screens/ArenaEditor';

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		BlackOpsOne: require('./assets/fonts/BlackOpsOne-Regular.ttf'),
	});

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="PlaylistGenerator" component={PlaylistGenerator} />
				<Stack.Screen name="EquipmentReporter" component={EquipmentReporter} />
				<Stack.Screen name="CurrentDeals" component={CurrentDeals} />
				<Stack.Screen name="PricingReference" component={PricingReference} />
				<Stack.Screen name="CleaningList" component={CleaningList} />
				<Stack.Screen name="RoomManager" component={RoomManager} />
				<Stack.Screen name="SessionManager" component={SessionManager} />
				<Stack.Screen name="SpectatorView" component={SpectatorView} />
				<Stack.Screen name="ArenaEditor" component={ArenaEditor} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
