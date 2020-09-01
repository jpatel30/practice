import React, {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {
	render() {
		return(
			<Navbar bg="dark" variant="dark">
				<Link to={"/"} className ="nav-link" >Home</Link>
				<Nav className="mr-auto">
					<Link to={"add"} className ="nav-link" >Add Book</Link>
					<Link to={"list"} className="nav-link">Book List</Link>
					<Link to={"bangles"} className="nav-link">Bangles</Link>
    			</Nav>
			</Navbar>
		);
	}
}


export default NavigationBar;