/* eslint-disable react/no-unescaped-entities */
// components/Timer.tsx
import React, { useEffect, useRef } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
interface TimerProps {
	isActive: boolean;
	onTimeUp: () => void;
	duration: number;
	timeLeft: number;
	setTimeLeft: (time: number) => void;
}

const Timer: React.FC<TimerProps> = ({ isActive, onTimeUp, duration, timeLeft, setTimeLeft }) => {
	const startTimeRef = useRef<number | null>(null);

	useEffect(() => {
		let animationFrame: number | null = null;

		const updateTimer = (timestamp: number) => {
			if (startTimeRef.current === null) {
				startTimeRef.current = timestamp;
			}

			const elapsedTime = Math.floor((timestamp - startTimeRef.current) / 1000);

			const newTimeLeft = duration - elapsedTime;

			if (newTimeLeft <= 0) {
				onTimeUp();
				setTimeLeft(0);
			} else {
				setTimeLeft(newTimeLeft);
			}

			if (isActive) {
				animationFrame = requestAnimationFrame(updateTimer);
			}
		};

		if (isActive) {
			animationFrame = requestAnimationFrame(updateTimer);
		} else {
			setTimeLeft(duration);
			startTimeRef.current = null;
		}

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, [isActive, onTimeUp, duration]);

	const textColor = useColorModeValue("black", "white");
	const warningTextColor = useColorModeValue("red.500", "red.300");

	return (
		<Text fontSize="xl" color={timeLeft <= 10 ? warningTextColor : textColor}>
			{timeLeft === 0 ? (
				<strong>Time's up!</strong>
			) : (
				<>
					Time left: <strong>{timeLeft}</strong> seconds
				</>
			)}
		</Text>
	);
};

export default Timer;
