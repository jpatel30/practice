import React, { Component } from 'react';
import { Card, Form, Button,Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare} from '@fortawesome/free-solid-svg-icons';

export default class Book extends Component {
	
	constructor(props) {
		super(props);
		this.state= {title:'',author:'',coverPhotoUrl:'',isbnNumber:'',price:'',language:''};
		this.bookChange = this.bookChange.bind(this);
		this.submitBook	= this.submitBook.bind(this);
	}
	
	submitBook(event) {
		alert('Title:' +this.state.title + ' Author' + this.state.author);
		event.preventDefault();
	}
	
	bookChange(event) {
		this.setState({[event.target.name]:event.target.value})
	}
 	
	render() {
		return (
			<Card className="border border-dark bg-dark text-white">
			<Card.Header><FontAwesomeIcon icon={faPlusSquare} />Add Book</Card.Header>
			<Form onSubmit={this.submitBook} id="bookFormId">
				<Card.Body>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridTitle">
								<Form.Label>Title</Form.Label>
								<Form.Control required
								type="text" name="title"
								value={this.state.title}
								onChange={this.bookChange}
								className="bg-dark text-white"
								placeholder="Enter Book Title" />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridAuthor">
								<Form.Label>Author</Form.Label>
								<Form.Control required
								type="text" name="author"
								value={this.state.author}
								onChange={this.bookChange}
								className="bg-dark text-white"
								placeholder="Enter Book Title" />
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridCoverPhotoUrl">
								<Form.Label>Cover Photo Url</Form.Label>
								<Form.Control required
								type="text" name="coverPhotoUrl"
								value={this.state.coverPhotoUrl}
								onChange={this.bookChange}
								className="bg-dark text-white"
								placeholder="Enter Book Title" />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridisbnNumber">
								<Form.Label>ISBN NUmber</Form.Label>
								<Form.Control required
								type="text" name="isbnNumber"
								value={this.state.isbnNumber}
								onChange={this.bookChange}
								className="bg-dark text-white"
								placeholder="Enter Book Title" />
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridPrice">
								<Form.Label>Price</Form.Label>
								<Form.Control required
								type="text" name="price"
								value={this.state.price}
								onChange={this.bookChange}
								className="bg-dark text-white"
								placeholder="Enter Book Title" />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridLanguage">
								<Form.Label>Language</Form.Label>
								<Form.Control required
								type="text" name="language"
								value={this.state.language}
								onChange={this.bookChange}
								className="bg-dark text-white"
								placeholder="Enter Book Title" />
							</Form.Group>
						</Form.Row>
				</Card.Body>
				<Card.Footer style={{"textAlign":"right"}}>
					<Button className="bg-dark text-white"size="sm" variant="sucess" type="submit"> 
					<FontAwesomeIcon icon={faSave} />Submit </Button>
				</Card.Footer>
				</Form>
			</Card >
		);
	}
}