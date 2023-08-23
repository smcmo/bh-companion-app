import { View, Text, Image, Button, FlatList, StyleSheet, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function CurrentDeals({ navigation }) {
	const [deals, setDeals] = useState([])

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/smcmo/bh-data/main/deals.json')
			.then((res) => res.json())
			.then((data) => {
				setDeals(data)
			})
	}, [])

	const Item = ({ title, description, startDate = null, endDate = null }) => (
		<View style={styles.item}>
			<Text style={styles.itemDateText}>{dealStatus(startDate, endDate)}</Text>
			<Text style={styles.itemTitleText}>{title}</Text>
			<Text style={styles.itemDescText}>{description}</Text>
		</View>
	)

	function dealStatus(startDate, endDate) {
		const startingDate = dayjs(startDate).valueOf()
		const endingDate = dayjs(endDate).valueOf()

		if (startingDate > dayjs().valueOf()) {
			return `UPCOMING | Starts in ${dayjs(startDate).fromNow(true)}`
		} else if (startingDate < dayjs().valueOf() && endingDate > dayjs().valueOf()) {
			return `ONGOING | Ends in ${dayjs(endDate).fromNow(true)}`
		} else if (endingDate < dayjs().valueOf()) {
			return `EXPIRED | Ended ${dayjs(endDate).toNow(true)}`
		} else {
			return ''
		}
	}

	return (
		<View style={styles.page}>
			<FlatList
				data={deals}
				renderItem={({ item }) => <Item title={item.title} description={item.description} startDate={item.startDate} endDate={item.endDate} />}
				keyExtractor={(item) => item.title}
			></FlatList>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		alignItems: 'center',
		backgroundColor: '#2d2d2d',
		padding: 10,
		height: '100%',
	},
	item: {
		borderWidth: 3,
		borderColor: '#fedd04',
		marginTop: 5,
		marginBottom: 10,
		padding: 10,
	},
	itemDateText: {
		color: '#b3b3b3',
		fontFamily: 'BlackOpsOne',
		fontSize: 15,
	},
	itemTitleText: {
		color: '#fedd04',
		fontFamily: 'BlackOpsOne',
		fontSize: 22,
	},
	itemDescText: {
		color: 'white',
		fontSize: 15,
	},
})
