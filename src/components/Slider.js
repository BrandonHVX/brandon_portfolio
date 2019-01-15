
import React , {Component} from "react";
import BandsTA from './BandsTA.js';
import { BrowserRouter, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';



const content = [
	{
		title: 'Bands by Taylor Alexandria',
		description:
		'Business profile and interview on fashion designer Taylor Alexandria',
		button: 'Watch Video',
		image: require('../images/bta.svg'),
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Salatto Salon',
		description:
		'Inside look into the luxury experience of hair and beautyar.',
		button: 'Watch Video',
		image: require('../images/salon.svg'),
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
		title: 'Salatto Salon',
		description:
		'Inside look into the luxury experience of hair and beautyar.',
		button: 'Discover',
		image: require('../images/salon.svg'),
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},

];

const App = () => (
	<div>
	
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<Button variant="contained" color="primary">{item.button}</Button>
					</div>
					
				</div>
			))}
		</Slider>
       
	</div>
);

export default App;