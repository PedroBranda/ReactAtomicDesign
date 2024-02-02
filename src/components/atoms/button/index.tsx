import "./style.css";

interface Props {
  children: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function Button({ children, onClick, style }: Props) {
  return (
    <button className="button" style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
