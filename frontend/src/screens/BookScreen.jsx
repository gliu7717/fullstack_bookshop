
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import books from '../components/Books';

const BookScreen = () => {
  const { id: bookId } = useParams();
  const book = books.find((p) => p._id === bookId);

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={book.image} alt={book.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{book.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={book.rating}
                text={`${book.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${book.price}</ListGroup.Item>
            <ListGroup.Item>Description: {book.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${book.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {book.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={book.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BookScreen;