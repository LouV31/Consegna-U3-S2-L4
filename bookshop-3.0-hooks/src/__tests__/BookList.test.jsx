import { fireEvent, render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import CommentedArea from "../components/CommentedArea";
const allTheBooksArr = [...fantasy, ...history, ...horror, ...romance, ...scifi];

describe("Correctly mounted BookList component", () => {
    it("Book cards are as many as booksArray has", () => {
        render(<BookList booksArray={allTheBooksArr} />);

        const cardsList = screen.getAllByTestId("cardItem");
        expect(cardsList).toHaveLength(allTheBooksArr.length);
    });

    it("Mounts CommentedArea correctly", () => {
        render(<BookList booksArray={allTheBooksArr} />);
        const cards = screen.getAllByTestId("cardItem");

        fireEvent.click(cards[0]);
        fireEvent.click(cards[1]);
        const commentedArea = screen.getByTestId("commentedArea");

        expect(commentedArea).toBeInTheDocument();
    });
});
