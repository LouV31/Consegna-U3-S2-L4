import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const CommentedArea = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
        console.log("Quante volte sta avvenendo il render?");
    }, [props.bookId]);

    const fetchComments = async () => {
        try {
            let response = await fetch(URL + props.bookId, {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc4NDBkOGEyMDAwMThhNDhhNjEiLCJpYXQiOjE3MDQ3MTk4NTAsImV4cCI6MTcwNTkyOTQ1MH0.16yXHtYPPJGFGKsbUL-kiMmOSXCX0EayWyfC_vLPCTM",
                },
            });
            if (response.ok) {
                let comments = await response.json();
                setComments(comments);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div data-testid="commentedArea">
            <AddComment bookId={props.bookId} />
            <CommentsList usersArr={comments} />
        </div>
    );
};

export default CommentedArea;
