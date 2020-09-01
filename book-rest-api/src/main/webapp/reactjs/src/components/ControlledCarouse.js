import React, {Component, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ControlledCarouse extends Component {

    constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0
			//direction: null,
		};
    }

    handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			//direction: e.direction,
		});
    }
    
    render() {
        const { index, direction } = this.state;
        return(
            <Carousel
				activeIndex={index}
				//direction={direction}
				onSelect={this.handleSelect}
			>
				<Carousel.Item>
					<img
                        style={{'height':"400px"}}
						className="d-block w-100"
						src="./img.jpg?text=First slide&bg=282c34"
						alt=""
					/>
					
				</Carousel.Item>
				<Carousel.Item>
					<img
                        style={{'height':"400px"}}
						className="d-block w-100"
						src="./img2.jpg??text=Second slide&bg=282c34"
						alt=""
					/>

					{/* <Carousel.Caption>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item>
					<img
                        style={{'height':"400px"}}  
						className="d-block w-100"
						src="./img3.jpg??text=Third slide&bg=20232a"
						alt=""
					/>

					{/* <Carousel.Caption>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
			</Carousel>
        );
    }
}

export default ControlledCarouse;