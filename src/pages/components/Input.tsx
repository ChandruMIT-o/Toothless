import React from "react";
import "./style/Input.css";

interface InputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
}

const Input: React.FC<InputProps> = ({
	value,
	onChange,
	placeholder,
	className,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<div className={`container ${className}`}>
			<div className="search-container">
				<input
					className="input"
					type="text"
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default Input;
