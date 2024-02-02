import "./style.css";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

function Container({ children }: Props) {
  return <div className="container">{children}</div>;
}

export default Container;
