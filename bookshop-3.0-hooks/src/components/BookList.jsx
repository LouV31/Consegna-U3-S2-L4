import { useState } from "react";
import SingleBook from "./SingleBook";

import { Row, Col, Container, Form } from "react-bootstrap";
import CommentedArea from "./CommentedArea";

const BookList = (props) => {
    const [bookTitle, setBookTitle] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);
    const handleChange = (title) => {
        setBookTitle(title);
    };

    const handleSelectedBook = (asin) => {
        setSelectedBook(asin);
    };

    return (
        <Container>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Find your {props.stuffToSearch}</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Search a book"
                    value={bookTitle}
                    onChange={(event) => handleChange(event.target.value)}
                />
            </Form.Group>
            <Row>
                <Col sm={6} md={8}>
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4">
                        {props.booksArray
                            .filter((book) => book.title.toLowerCase().includes(bookTitle.toLowerCase()))
                            .map((book, index) => (
                                <Col key={`book-${index}`}>
                                    <SingleBook
                                        img={book.img}
                                        title={book.title}
                                        category={book.category}
                                        price={book.price}
                                        bookId={book.asin}
                                        selectedBook={selectedBook}
                                        handleSelectedBook={handleSelectedBook}
                                    />
                                </Col>
                            ))}
                    </Row>
                </Col>
                <Col>{selectedBook !== null && <CommentedArea bookId={selectedBook} />}</Col>
            </Row>
        </Container>
    );
};

export default BookList;
