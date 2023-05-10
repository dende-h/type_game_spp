import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TypingInput from "../TypingInput";

test("calls onChange with the input value when the input changes", () => {
	const handleChange = jest.fn();
	const inputRef = React.createRef<HTMLInputElement>();
	const { getByPlaceholderText } = render(
		<TypingInput value="" onChange={handleChange} disabled={false} inputRef={inputRef} />
	);

	const input = getByPlaceholderText("Type here...");
	fireEvent.change(input, { target: { value: "a" } });

	expect(handleChange).toHaveBeenCalledWith("a");
});
