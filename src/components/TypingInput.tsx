// components/TypingInput.tsx
import React from "react";
import { Input } from "@chakra-ui/react";

interface TypingInputProps {
	value: string;
	onChange: (value: string) => void;
	disabled: boolean;
	inputRef: React.RefObject<HTMLInputElement>;
}

const TypingInput: React.FC<TypingInputProps> = ({ value, onChange, disabled, inputRef }) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<Input
			ref={inputRef}
			value={value}
			onChange={handleChange}
			isDisabled={disabled}
			placeholder="Start typing..."
			focusBorderColor="transparent"
			borderColor="transparent"
			_hover={{ borderColor: "transparent" }}
			fontSize="2xl"
			w="100%"
			maxW="800px"
			mb={4}
		/>
	);
};

export default TypingInput;
