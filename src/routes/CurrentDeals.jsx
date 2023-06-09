import { useState } from 'react';
import deals from '../../deals.json';
import './CurrentDeals.css';

export default function CurrentDeals() {
	function dealStatus(deal, defaultPlaceholder) {
		const startDate = new Date(deal.startDate).valueOf();
		const endDate = new Date(deal.endDate).valueOf();

		if (startDate > Date.now()) {
			return 'UPCOMING';
		} else if (startDate < Date.now() && endDate > Date.now()) {
			return 'ONGOING';
		} else if (endDate < Date.now()) {
			return 'EXPIRED';
		} else {
			return defaultPlaceholder;
		}
	}

	const sortedDeals = deals.sort((dealA, dealB) => {
		const dateAValue = new Date(dealA.startDate).valueOf();
		const dateBValue = new Date(dealB.startDate).valueOf();
		return dateAValue - dateBValue;
	});

	let listedDeals;
	if (sortedDeals.length === 0) {
		listedDeals = <h1>No current deals, check back later.</h1>;
	} else {
		let index = 1;
		listedDeals = sortedDeals.map((deal) => (
			<div
				key={deal.title}
				className={
					'deal-item ' +
					`animate-${index++} ` +
					`${
						Date.now() > new Date(deal.startDate).valueOf() &&
						Date.now() < new Date(deal.endDate).valueOf()
							? 'ongoing'
							: ''
					}`
				}
			>
				<h3 className="deal-dates">
					{dealStatus(deal, 'SUMMER 2023')}
					{deal.startDate ? ' | ' : ''}
					{deal.startDate
						? `${new Date(deal.startDate).toLocaleDateString('en-US')}`
						: ''}
					{deal.endDate &&
					new Date(deal.endDate).valueOf() !==
						new Date(deal.startDate).valueOf()
						? ` - ${new Date(deal.endDate).toLocaleDateString('en-US')}`
						: ''}
				</h3>
				<h1 className="deal-title">{deal.title}</h1>
				<h2 className="deal-desc">{deal.description}</h2>
			</div>
		));
	}

	return <div>{listedDeals}</div>;
}
