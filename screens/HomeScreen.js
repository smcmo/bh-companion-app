import * as React from 'react';
import { ScrollView, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen({ navigation }) {
	const [fontsLoaded] = useFonts({
		BlackOpsOne: require('./../assets/fonts/BlackOpsOne-Regular.ttf'),
	});

	return (
		<ScrollView contentContainerStyle={styles.page}>
			<Image source={require('./../assets/logo.png')} style={styles.image} />
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('PlaylistGenerator')}
			>
				<Image
					source={require('./../assets/icons/lined-list.png')}
					style={styles.buttonImage}
				/>
				<Text style={styles.buttonText}>GENERATE GAME PLAYLIST</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('Reporter')}
			>
				<Image
					source={require('./../assets/icons/wrench.png')}
					style={styles.buttonImage}
				/>
				<Text style={styles.buttonText}>REPORT BROKEN EQUIPMENT</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('CurrentDeals')}
			>
				<Image
					source={require('./../assets/icons/lined-list.png')}
					style={styles.buttonImage}
				/>
				<Text style={styles.buttonText}>VIEW CURRENT DEALS</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('PricingReference')}
			>
				<Image
					source={require('./../assets/icons/lined-list.png')}
					style={styles.buttonImage}
				/>
				<Text style={styles.buttonText}>PRICING REFERENCE</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('CleaningList')}
			>
				<Image
					source={require('./../assets/icons/lined-list.png')}
					style={styles.buttonImage}
				/>
				<Text style={styles.buttonText}>CLEANING LIST</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('RoomManager')}
			>
				<Image
					source={require('./../assets/icons/lined-list.png')}
					style={styles.buttonImage}
				/>
				<Text style={styles.buttonText}>MANAGE PARTY ROOMS</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('SessionManager')}
			>
				<Image
					source={require('./../assets/icons/lined-list.png')}
					style={styles.buttonImage}
				/>
				<Text style={styles.buttonText}>RUN A SESSION</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('SpectorView')}
			>
				<Image
					source={require('./../assets/icons/lined-list.png')}
					style={styles.buttonImage}
				/>
				<Text style={styles.buttonText}>OPEN SPECTATOR VIEW</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('ArenaEditor')}
			>
				<Image
					source={require('./../assets/icons/lined-list.png')}
					style={styles.buttonImage}
				/>
				<Text style={styles.buttonText}>VIRITUAL ARENA MAP</Text>
			</Pressable>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	page: {
		alignItems: 'center',
		backgroundColor: '#2d2d2d',
	},
	image: {
		margin: 25,
		height: 120,
		width: 100,
	},
	button: {
		color: '#000000',
		backgroundColor: '#fedd04',
		height: 70,
		width: '90%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10,
	},
	buttonImage: {
		height: 32,
		width: 32,
		margin: 15,
	},
	buttonText: {
		fontFamily: 'BlackOpsOne',
		fontSize: 20,
	},
});
