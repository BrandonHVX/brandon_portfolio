
import React , {Component} from "react";
import BandsTA from './BandsTA.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import { BrowserRouter, Route,Router, Link } from "react-router-dom";


class NextLink extends Component {
	render() {
	  const routeComponents = content.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
	  return (
		<BrowserRouter>
		<div>
		 <Button>  {routeComponents}</Button>
        </div>
		</BrowserRouter>
	  );
	}
  }


const content = [
	{
		title: 'Bands by Taylor Alexandria',
		description:
		'Business profile and interview on fashion designer Taylor Alexandria',
        button: 'Watch Video',
		path: '/web-development/Bands-TA',
		component: BandsTA,
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
	{
	all: function() { return this.content},
	get: function(id) {
	  const isContent = p => p.number === id
	  return this.contents.find(isContent)
	}
}
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
						<Button variant="contained" color="primary">   <NextLink /></Button>
            
					</div>
					
				</div>
			))}
		</Slider>
		<BrowserRouter>
        <div>
         
          <Route exact path="/web-development/Bands-TA" component={BandsTA} />
 
        {/* And on and on for classes, grades, students, et cetera. */}
        </div>
      </BrowserRouter>
      
	</div>
);

export default App;