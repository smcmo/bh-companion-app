import { View, Text, Image, Button, ScrollView, StyleSheet, Pressable } from 'react-native'
import { useFonts } from 'expo-font'
import { useState } from 'react'

export default function PricingReference({ navigation }) {
	const [fontsLoaded] = useFonts({
		BlackOpsOne: require('./../assets/fonts/BlackOpsOne-Regular.ttf'),
	})

	const [currentSubpageName] = useState(['Standard Battles', 'Party Packages', 'Private Events'])
	// 0 = standard battles, 1 = party packages, 2 = private events
	const [currentSubpageId, setCurrentSubpageId] = useState(0)

	function nextSubpage() {
		if (currentSubpageId + 1 > 2) {
			setCurrentSubpageId(0)
		} else {
			setCurrentSubpageId(currentSubpageId + 1)
		}
	}

	function previousSubpage() {
		if (currentSubpageId - 1 < 0) {
			setCurrentSubpageId(2)
		} else {
			setCurrentSubpageId(currentSubpageId - 1)
		}
	}

	function renderCurrentSubpage() {
		switch (currentSubpageId) {
			case 0:
				return (
					<ScrollView contentContainerStyle={styles.page}>
						<View style={styles.navigationButtonsContainer}>
							<Pressable style={styles.navigationButtons} onPress={() => previousSubpage()}>
								<Image source={require('./../assets/icons/arrow_left.png')} style={styles.buttonImage} />
							</Pressable>

							<Text style={styles.navigationText}>{currentSubpageName[currentSubpageId]}</Text>

							<Pressable style={styles.navigationButtons} onPress={() => nextSubpage()}>
								<Image source={require('./../assets/icons/arrow_right.png')} style={styles.buttonImage} />
							</Pressable>
						</View>

						<View style={styles.pricesBox}>
							<Text style={styles.h1}>Friday & Saturday</Text>

							<Text style={styles.h2}>Standard Admission</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Standard Play (1.75 Hours)</Text>
								<Text style={styles.p}>$47</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Play (1.75 Hours)</Text>
								<Text style={styles.p}>$22</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Late Night Deal (1.75 Hours)</Text>
								<Text style={styles.p}>$42</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Double Time (3.5 Hours)</Text>
								<Text style={styles.p}>$60</Text>
							</View>

							<Text style={styles.h2}>Military & First Responders</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Standard Play (1.75 Hours)</Text>
								<Text style={styles.p}>$42</Text>
							</View>

							<Text style={styles.h2}>Groups of 21 or More</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Standard Play (1.75 Hours)</Text>
								<Text style={styles.p}>$42</Text>
							</View>

							<Text style={styles.h2}>Friends of Battle House</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Standard Play (1.75 Hours)</Text>
								<Text style={styles.p}>$27.50</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Play (1.75 Hours)</Text>
								<Text style={styles.p}>$17.50</Text>
							</View>

							<Text style={styles.h1}>Wednesday, Thursday & Sunday</Text>

							<Text style={styles.h2}>Standard Admission</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Standard Play (1.0 Hour)</Text>
								<Text style={styles.p}>$34</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Standard Play (2.0 Hours)</Text>
								<Text style={styles.p}>$44</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Additional Play (1.0 Hour)</Text>
								<Text style={styles.p}>$17</Text>
							</View>

							<Text style={styles.h2}>Student Discount (Wed & Thurs Only)</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Standard Play (1.0 Hour)</Text>
								<Text style={styles.p}>$22</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Standard Play (2.0 Hours)</Text>
								<Text style={styles.p}>$33</Text>
							</View>

							<Text style={styles.h2}>Friends of Battle House</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Standard Play (1.0 Hour)</Text>
								<Text style={styles.p}>$17.50</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Standard Play (2.0 Hours)</Text>
								<Text style={styles.p}>$27.50</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Additional Play (1.0 Hours)</Text>
								<Text style={styles.p}>$12.50</Text>
							</View>
						</View>
					</ScrollView>
				)
			case 1:
				return (
					<ScrollView contentContainerStyle={styles.page}>
						<View style={styles.navigationButtonsContainer}>
							<Pressable style={styles.navigationButtons} onPress={() => previousSubpage()}>
								<Image source={require('./../assets/icons/arrow_left.png')} style={styles.buttonImage} />
							</Pressable>

							<Text style={styles.navigationText}>{currentSubpageName[currentSubpageId]}</Text>

							<Pressable style={styles.navigationButtons} onPress={() => nextSubpage()}>
								<Image source={require('./../assets/icons/arrow_right.png')} style={styles.buttonImage} />
							</Pressable>
						</View>

						<View style={styles.pricesBox}>
							<Text style={styles.h1}>Friday & Saturday</Text>

							<Text style={styles.h2}>Recon 2</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>One Hour and 45 Minutes</Text>
								<Text style={styles.p}>$285</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Included Tickets</Text>
								<Text style={styles.p}>5</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$47</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Event Space After Battle</Text>
								<Text style={styles.p}>45 minutes</Text>
							</View>

							<Text style={styles.h1}>Wed, Thurs & Sun</Text>

							<Text style={styles.h2}>Recon 1.1</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>One Hour</Text>
								<Text style={styles.p}>$200</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Included Tickets</Text>
								<Text style={styles.p}>5</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$34</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Event Space After Battle</Text>
								<Text style={styles.p}>30 minutes</Text>
							</View>

							<Text style={styles.h2}>Recon 1.2</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Two Hours</Text>
								<Text style={styles.p}>$250</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Included Tickets</Text>
								<Text style={styles.p}>5</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$44</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Event Space After Battle</Text>
								<Text style={styles.p}>30 minutes</Text>
							</View>
						</View>
					</ScrollView>
				)
			case 2:
				return (
					<ScrollView contentContainerStyle={styles.page}>
						<View style={styles.navigationButtonsContainer}>
							<Pressable style={styles.navigationButtons} onPress={() => previousSubpage()}>
								<Image source={require('./../assets/icons/arrow_left.png')} style={styles.buttonImage} />
							</Pressable>

							<Text style={styles.navigationText}>{currentSubpageName[currentSubpageId]}</Text>

							<Pressable style={styles.navigationButtons} onPress={() => nextSubpage()}>
								<Image source={require('./../assets/icons/arrow_right.png')} style={styles.buttonImage} />
							</Pressable>
						</View>

						<View style={styles.pricesBox}>
							<Text style={styles.h1}>Mid-Week Off Hours</Text>

							<Text style={styles.h2}>1.75 Hours</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle Outside Open Hours</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Minimum Deposit</Text>
								<Text style={styles.p}>$614</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Minimum Players</Text>
								<Text style={styles.p}>12</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$47</Text>
							</View>

							<Text style={styles.h2}>One Hour</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle Outside Open Hours</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Minimum Deposit</Text>
								<Text style={styles.p}>$540</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Minimum Players</Text>
								<Text style={styles.p}>15</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$34</Text>
							</View>

							<Text style={styles.h2}>Two Hours</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle Outside Open Hours</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Minimum Deposit</Text>
								<Text style={styles.p}>$470</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Minimum Players</Text>
								<Text style={styles.p}>10</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$44</Text>
							</View>

							<Text style={styles.h1}>Organized School & Youth Groups</Text>

							<Text style={styles.h2}>1.75 Hours</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle Outside Open Hours</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>15-40 Players</Text>
								<Text style={styles.p}>$35</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>40+ Players</Text>
								<Text style={styles.p}>$32</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>No Charge for Event Room</Text>
							</View>

							<Text style={styles.h1}>Thursday</Text>

							<Text style={styles.h2}>One Hour</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle During Open Hours</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Minimum Deposit</Text>
								<Text style={styles.p}>$710</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Minimum Players</Text>
								<Text style={styles.p}>20</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$34</Text>
							</View>

							<Text style={styles.h2}>Two Hour</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle During Open Hours</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Minimum Deposit</Text>
								<Text style={styles.p}>$910</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Minimum Players</Text>
								<Text style={styles.p}>20</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$44</Text>
							</View>

							<Text style={styles.h1}>Friday</Text>

							<Text style={styles.h2}>1.75 Hours</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle During Open Hours</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Minimum Deposit</Text>
								<Text style={styles.p}>$1,225</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Minimum Players</Text>
								<Text style={styles.p}>25</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$47</Text>
							</View>

							<Text style={styles.h1}>Saturday</Text>

							<Text style={styles.h2}>Non-Peak Hours - 1.75 Hours</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle During Open Hours</Text>
								<Text style={styles.p}>11am & 9pm</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Minimum Deposit</Text>
								<Text style={styles.p}>$1,225</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Minimum Players</Text>
								<Text style={styles.p}>25</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$47</Text>
							</View>

							<Text style={styles.h2}>Peak Hours - 1.75 Hours</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle During Open Hours</Text>
								<Text style={styles.p}>1pm, 3pm, 5pm & 7pm</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Minimum Deposit</Text>
								<Text style={styles.p}>$1,930</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Minimum Players</Text>
								<Text style={styles.p}>40</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$47</Text>
							</View>

							<Text style={styles.h1}>Sunday</Text>

							<Text style={styles.h2}>One Hour</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle During Open Hours</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Minimum Deposit</Text>
								<Text style={styles.p}>$1,050</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Minimum Players</Text>
								<Text style={styles.p}>30</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$34</Text>
							</View>

							<Text style={styles.h2}>Two Hours</Text>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Battle During Open Hours</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Minimum Deposit</Text>
								<Text style={styles.p}>$1,350</Text>
							</View>
							<View style={styles.pricesLine}>
								<Text style={styles.p}>Minimum Players</Text>
								<Text style={styles.p}>30</Text>
							</View>
							<View style={styles.pricesLineAlt}>
								<Text style={styles.p}>Additional Players</Text>
								<Text style={styles.p}>$44</Text>
							</View>
						</View>
					</ScrollView>
				)
		}
	}

	return <>{renderCurrentSubpage()}</>
}

const styles = StyleSheet.create({
	page: {
		alignItems: 'center',
		backgroundColor: '#2d2d2d',
		paddingTop: 10,
		paddingBottom: 80,
	},
	navigationButtonsContainer: {
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		width: '100%',
		zIndex: 1,
	},
	navigationButtons: {
		backgroundColor: '#fedd04',
		justifyContent: 'center',
	},
	navigationText: {
		backgroundColor: '#fedd04',
		fontFamily: 'BlackOpsOne',
		fontSize: 20,
		flex: 1,
		height: '100%',
		textAlign: 'center',
		textAlignVertical: 'center',
		marginLeft: 5,
		marginRight: 5,
	},
	buttonImage: {
		height: 32,
		width: 32,
		margin: 15,
	},
	pricesBox: {
		borderWidth: 1,
		borderColor: '#ffffff',
		width: '95%',
	},
	pricesLine: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 15,
		backgroundColor: '#424242',
	},
	pricesLineAlt: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 15,
	},
	h1: {
		color: '#fedd04',
		borderWidth: 1,
		borderBottomColor: 'white',
		fontFamily: 'BlackOpsOne',
		fontSize: 25,
		paddingLeft: 10,
		paddingVertical: 5,
	},
	h2: {
		color: '#ffffff',
		fontSize: 25,
		paddingLeft: 20,
		paddingVertical: 5,
	},
	p: {
		color: '#ffffff',
		fontSize: 16,
		paddingLeft: 30,
		paddingVertical: 5,
	},
})
