// pages/result.tsx
import { useRouter } from "next/router";
import { Box, Button, Container, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Result() {
	const router = useRouter();
	const score = router.query.score;

	const bgColor = useColorModeValue("gray.50", "gray.900");
	const headingColor = useColorModeValue("gray.700", "gray.200");

	return (
		<Container
			height="100vh"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			backgroundColor={bgColor}
		>
			<Text fontSize="4xl" fontWeight="bold" color={headingColor} mb={6}>
				Typing Practice Game
			</Text>
			<Box textAlign="center">
				<Text fontSize="3xl" mb={4}>
					Score: {score}
				</Text>
				<Button colorScheme="blue" onClick={() => router.push("/")}>
					Retry
				</Button>
			</Box>
		</Container>
	);
}
