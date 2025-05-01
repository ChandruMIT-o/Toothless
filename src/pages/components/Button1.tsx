// components/Button.tsx
import React from "react";
import "./style/Button1.css";

interface ButtonProps {
	text: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
}

const Button1: React.FC<ButtonProps> = ({ text, onClick, className }) => (
	<button
		className={`button2${className ? ` ${className}` : ""}`}
		onClick={onClick}
		type="submit"
	>
		{text}
	</button>
);

export default Button1;
