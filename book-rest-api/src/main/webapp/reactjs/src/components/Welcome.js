import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
class welcome extends Component {
	render() {
		return(
				<div>
				<Jumbotron className="bg-dark text-white" fluid>
	  				<h1>Welcome to Online Jewellery Shop</h1>
	  				<blockquote className="blockQuote mb-0">
						<p>Good Friends, Good Books, and a Sleepy conscience</p>
						<footer className="blockquote-footer">
							Ashish Patel
						</footer>
					</blockquote>
				</Jumbotron>
				</div>
		);
	}
}

export default welcome;