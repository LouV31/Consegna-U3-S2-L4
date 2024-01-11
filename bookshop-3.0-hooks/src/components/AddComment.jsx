import { Component, useState } from "react";
import { Button, Form } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const AddComment = (props) => {
    const [user, setUser] = useState({
        comment: "",
        rate: 1,
        elementId: props.bookId,
    });

    const handleChange = (propertyName, propertyValue) => {
        setUser({ ...user, [propertyName]: propertyValue });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let response = await fetch(URL, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc4NDBkOGEyMDAwMThhNDhhNjEiLCJpYXQiOjE3MDQ3MTk4NTAsImV4cCI6MTcwNTkyOTQ1MH0.16yXHtYPPJGFGKsbUL-kiMmOSXCX0EayWyfC_vLPCTM",
                },
            });
            if (response.ok) {
                setUser({
                    comment: "",
                    rate: 1,
                    elementId: props.bookId,
                });
                let userObj = await response.json();
                console.log(userObj);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form className="mt-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
                <Form.Control
                    type="text"
                    placeholder="Lascia una recensione"
                    value={user.comment}
                    onChange={(event) => handleChange("comment", event.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Select value={user.rate} onChange={(event) => handleChange("rate", event.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Select>
            </Form.Group>
            <Button className="mt-2" type="submit">
                Invia
            </Button>
        </Form>
    );
};

export default AddComment;
