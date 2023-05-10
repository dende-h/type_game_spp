// components/TypingInput.tsx
import React from "react";
import { Input } from "@chakra-ui/react";

interface TypingInputProps {
	value: string;
	onChange: (value: string) => void;
	disabled: boolean;
}

const TypingInput: React.FC<TypingInputProps> = ({ value, onChange, disabled }) => {
	return (
		<Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Type here..." isDisabled={disabled} />
	);
};

export default TypingInput;
