import React, { Component } from "react";
import { Card, Button,CardDeck } from "react-bootstrap";

class Bangles extends Component {
  render() {
    return (
        <div style={{ marginTop: 20, marginBottom: 20 }}>
<CardDeck>
<Card>
  <Card.Img variant="top" src="bangle1.jpg" />
  <Card.Body>
    <Card.Title>Bangle Style 1</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
<Card>
  <Card.Img variant="top" src="bangle2.jpg" />
  <Card.Body>
    <Card.Title>Bangle Style 2</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to additional
      content.{' '}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
<Card>
  <Card.Img variant="top" src="bangle1.jpg" />
  <Card.Body>
    <Card.Title>Bangle Style 3</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This card has even longer content than the first to
      show that equal height action.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
<Card>
  <Card.Img variant="top" src="bangle1.jpg" />
  <Card.Body>
    <Card.Title>Bangle Style 4</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This card has even longer content than the first to
      show that equal height action.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
</CardDeck>
</div>
    
    );
  }
}

export default Bangles;
