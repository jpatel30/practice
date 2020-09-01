import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import RoutingLinks from './components/RoutingLinks';

class App extends Component {
	render() {
		return(
			 	<div>
				<RoutingLinks/>
				<Footer/>
    			</div>
		);
	}
}

export default App;
