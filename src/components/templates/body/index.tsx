import "./style.css";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

function Body({ children }: Props) {
  return <body className="body">{children}</body>;
}

export default Body;
