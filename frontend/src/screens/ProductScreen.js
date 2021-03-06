import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';

const ProductScreen = ({ match }) => {
  const product = products.find(p => p._id === match.params.id);

  return (
    <>
      <Link to="/" className="btn btn-light my-3">Go Back</Link>
      <Row lg={ 2 } md={ 1 }>
        <Col md={ 6 }>
          <Image src={ product.image } alt={ product.name } fluid />
        </Col>
        <Col md={ 6 }>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{ product.name }</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={ product.rating }
                      text={ `${ product.numReviews } reviews` }
              />
            </ListGroupItem>
            <ListGroupItem>Price: ${ product.price }</ListGroupItem>
            <ListGroupItem>Description: { product.description }</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={ 6 }>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col><strong>${ product.price }</strong></Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>{ product.countInStock > 0 ? 'In Stock' : 'Out Of Stock' }</Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Button className="btn-block"
                        type="button"
                        disabled={ product.countInStock === 0 }
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;