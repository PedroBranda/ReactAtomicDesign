import "./style.css";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

function Body({ children, className, style }: Props) {
  return (
    <div className={["body", className].join(" ")} style={style}>
      {children}
    </div>
  );
}

export default Body;
