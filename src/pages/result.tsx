// pages/result.tsx
import { useRouter } from "next/router";
import { Box, Button, Container, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Seo from "../components/Seo";

export default function Result() {
	const router = useRouter();
	const score = router.query.score;

	const bgColor = useColorModeValue("gray.50", "gray.900");
	const headingColor = useColorModeValue("gray.700", "gray.200");

	return (
		<>
			<Seo
				pageDescription={"今回のリザルトスコア"}
				pageTitle={"匂う...匂うぞ"}
				pagePath={"https://type-game-spp.vercel.app/result"}
				pageImg={null}
				pageImgWidth={1200}
				pageImgHeight={600}
			/>
			<Container
				height="100vh"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				backgroundColor={bgColor}
			>
				<Text fontSize="3xl" fontWeight="bold" color={headingColor} mb={6}>
					Thanks for playing!
				</Text>
				<Box textAlign="center">
					<Text fontSize="3xl" mb={4}>
						Score: {score}
					</Text>
					<Button colorScheme="blue" onClick={() => router.push("/")}>
						Retry
					</Button>
				</Box>
				<Text fontSize={"xl"} color={headingColor} my={6}>
					©2023 dende-h
				</Text>
			</Container>
		</>
	);
}
export const getStaticProps = async () => {
	return {
		props: {
			data: "This is static data"
		}
	};
};
