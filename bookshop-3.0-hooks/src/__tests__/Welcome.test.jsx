import { render, screen, fireEvent } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Correctly mounted Welcome component", () => {
    it("mounts Welcome component correctly", () => {
        render(<Welcome title="libreria epica!" subtitle="Ma quanti bei libri!" />);
        const alert = screen.queryByRole("alert");
        expect(alert).toBeInTheDocument();
    });
});
