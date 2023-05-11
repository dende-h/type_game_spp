// components/TypingInput.tsx
import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

interface TypingInputProps {
	value: string;
	onChange: (value: string, composition: boolean) => void;
	disabled: boolean;
	inputRef: React.RefObject<HTMLInputElement>;
}

const TypingInput: React.FC<TypingInputProps> = ({ value, onChange, disabled, inputRef }) => {
	const [composition, setComposition] = useState(false);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value, composition);
	};

	return (
		<Input
			ref={inputRef}
			value={value}
			onCompositionStart={() => {
				setComposition(true);
			}}
			onCompositionEnd={() => {
				setComposition(false);
			}}
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
			autoFocus={true}
		/>
	);
};

export default TypingInput;
