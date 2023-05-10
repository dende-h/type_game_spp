// components/Timer.tsx
import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

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

	return (
		<Text fontSize="xl">
			Time left: <strong>{timeLeft}</strong> seconds
		</Text>
	);
};

export default Timer;
