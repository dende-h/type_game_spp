// components/TypingInput.tsx
import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

interface TypingInputProps {
	value: string;
	onChange: (value: string) => void;
	onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	disabled: boolean;
	inputRef: React.RefObject<HTMLInputElement>;
}

const TypingInput: React.FC<TypingInputProps> = ({ value, onChange, disabled, inputRef, onKeyPress }) => {
	return (
		<Input
			ref={inputRef}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			isDisabled={disabled}
			placeholder="Start typing..."
			focusBorderColor="transparent"
			borderColor="transparent"
			_hover={{ borderColor: "transparent" }}
			fontSize="2xl"
			w="100%"
			maxW="800px"
			mb={4}
			autoFocus={true}
			onKeyDown={onKeyPress}
		/>
	);
};

export default TypingInput;
