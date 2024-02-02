import "./style.css";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

function Container({ children, className, style }: Props) {
  return (
    <div className={["container", className].join(" ")} style={style}>
      {children}
    </div>
  );
}

export default Container;
