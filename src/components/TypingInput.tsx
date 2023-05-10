// components/TypingInput.tsx
import React from "react";
import { Input } from "@chakra-ui/react";

interface TypingInputProps {
	value: string;
	onChange: (value: string) => void;
}

const TypingInput: React.FC<TypingInputProps> = ({ value, onChange }) => {
	return <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Type here..." />;
};

export default TypingInput;
