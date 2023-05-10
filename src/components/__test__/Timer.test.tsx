import React from "react";
import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Timer from "../Timer";

jest.useFakeTimers();

test("decreases the time by 1 every second when active", () => {
	const handleTimeUp = jest.fn();
	const { getByText } = render(<Timer isActive={true} onTimeUp={handleTimeUp} duration={3} />);

	expect(getByText("3")).toBeInTheDocument();

	act(() => {
		jest.advanceTimersByTime(1000);
	});
	expect(getByText("2")).toBeInTheDocument();

	act(() => {
		jest.advanceTimersByTime(1000);
	});
	expect(getByText("1")).toBeInTheDocument();

	act(() => {
		jest.advanceTimersByTime(1000);
	});
	expect(handleTimeUp).toHaveBeenCalled();
});
