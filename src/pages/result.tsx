// pages/result.tsx
import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Result = () => {
	const router = useRouter();
	const score = router.query.score;

	const handleRetry = () => {
		router.push("/");
	};

	return (
		<Box textAlign="center" pt="10">
			<Text fontSize="2xl">Your Score: {score}</Text>
			<Button colorScheme="teal" onClick={handleRetry}>
				Retry
			</Button>
		</Box>
	);
};

export default Result;
