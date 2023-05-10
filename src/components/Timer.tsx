/* eslint-disable react/no-unescaped-entities */
// components/Timer.tsx
import React, { useEffect, useState } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
interface TimerProps {
	isActive: boolean;
	onTimeUp: () => void;
	duration: number;
}

const Timer: React.FC<TimerProps> = ({ isActive, onTimeUp, duration }) => {
	const [timeLeft, setTimeLeft] = useState(duration);

	useEffect(() => {
		if (!isActive) return;

		const timer = setInterval(() => {
			setTimeLeft((prevTime) => {
				if (prevTime <= 1) {
					onTimeUp();
					return duration;
				}
				return prevTime - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
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
