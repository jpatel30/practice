import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import Book from '../components/Book';
import BookList from '../components/BookList';
import ControlledCarouse from '../components/ControlledCarouse';
import MiddleComponent from '../components/MiddleComponent';
import Bangles from '../components/Bangles.js';
import Welcome from '../components/Welcome';
import NavigationBar from '../components/NavigationBar';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class RoutingLinks extends Component {
    render() {
		const marginTop = {marginTop:"20px"};
        return(
			<Router>
				<NavigationBar />
				<Row>
					<Col lg={12} style={marginTop}>
						<Switch>
							<Route path ="/welcome" exact component={Welcome}/>
							<Route path ="/add" exact component={Book}/>
							<Route path ="/list" exact component={BookList}/>
							<Route path ="/bangles" exact component={Bangles}/>
							<Route path ="/" exact component={ControlledCarouse}/>
							<Route path ="/" exact component={MiddleComponent}/>
						</Switch>
					</Col>
				</Row>
			</Router>
        );
    }
}

export default RoutingLinks;