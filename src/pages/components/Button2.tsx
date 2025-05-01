import "./style/Button2.css";

interface ButtonProps {
	text: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
}

const Button2: React.FC<ButtonProps> = ({ text, onClick, className }) => (
	<button
		className={`button3${className ? ` ${className}` : ""}`}
		onClick={onClick}
		type="submit"
	>
		{text}
	</button>
);

export default Button2;
