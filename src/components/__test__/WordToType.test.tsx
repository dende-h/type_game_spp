import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WordToType from "../WordToType";

test("renders the given word with correct characters highlighted", () => {
	render(<WordToType word="apple" userInput="ap" />);

	const correctChars = screen.queryAllByText("ap");
	expect(correctChars.length).toBe(2);

	const remainingChars = screen.queryAllByText("ple");
	expect(remainingChars.length).toBe(1);
});
