import { Row, Col } from 'react-bootstrap';
import { useGetBooksQuery } from '../slices/bookSlice';
import Book from '../components/Book';

const HomeScreen = () => {
  const { data: books, isLoading, error } = useGetBooksQuery();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Books</h1>
          <Row>
            {books.map((book) => (
              <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                <Book book={book} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
export default HomeScreen;