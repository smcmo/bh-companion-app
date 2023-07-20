import {
	View,
	Text,
	Image,
	Button,
	ScrollView,
	StyleSheet,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function PricingReference({ navigation }) {
	const [fontsLoaded] = useFonts({
		BlackOpsOne: require('./../assets/fonts/BlackOpsOne-Regular.ttf'),
	});

	return (
		<ScrollView contentContainerStyle={styles.page}>
			<View style={styles.pricesBox}>
				<Text style={styles.h1}>Friday & Saturday</Text>
				<Text style={styles.h2}>Standard Admission</Text>
				<Text style={styles.p}>Standard Play (1.75 Hours)</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	page: {
		alignItems: 'center',
		backgroundColor: '#2d2d2d',
	},
	pricesBox: {
		borderWidth: 1,
		borderColor: '#ffffff',
		width: '95%',
		marginTop: 15,
	},
	h1: {
		color: '#fedd04',
		fontFamily: 'BlackOpsOne',
		fontSize: 25,
		marginLeft: 10,
		marginVertical: 5,
	},
	h2: {
		color: '#ffffff',
		fontSize: 25,
		marginLeft: 30,
		marginVertical: 5,
	},
	p: {
		color: '#ffffff',
		fontSize: 16,
		marginLeft: 50,
		marginVertical: 5,
	}
});
