import "./style.css";

interface Props {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function Button({ children, className, style, onClick }: Props) {
  return (
    <button
      className={["base-button", className].join(" ")}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
