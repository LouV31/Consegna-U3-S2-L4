import { Component, useState } from "react";
import { Card, Button } from "react-bootstrap";
import CommentedArea from "./CommentedArea";

const SingleBook = (props) => {
    const [selected, setSelected] = useState(false);
    const handleSelected = () => {
        setSelected(!selected);
    };

    return (
        <Card
            style={
                props.selectedBook === props.bookId
                    ? { minHeight: "550px", border: "3px solid red" }
                    : { minHeight: "550px" }
            }
        >
            <Card.Img
                data-testid="cardItem"
                variant="top"
                src={props.img}
                className="img-fluid object-fit-contain "
                style={{ maxHeight: "250px" }}
                onClick={() => {
                    props.handleSelectedBook(props.bookId);
                    handleSelected();
                }}
            />
            <Card.Body className="d-flex flex-column align-content-baseline justify-content-end">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className="mt-auto">{props.category}</Card.Text>
                <Card.Text>{props.price}</Card.Text>

                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default SingleBook;
