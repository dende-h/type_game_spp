import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Result from "../Result";

test("renders correct message and color based on isCorrect prop", () => {
	const { rerender } = render(<Result isCorrect={true} />);
	let resultText = screen.getByText("Correct!");
	expect(resultText).toBeInTheDocument();
	expect(resultText).toHaveStyle("color: #38A169");

	rerender(<Result isCorrect={false} />);
	resultText = screen.getByText("Incorrect!");
	expect(resultText).toBeInTheDocument();
	expect(resultText).toHaveStyle("color: #E53E3E");
});
