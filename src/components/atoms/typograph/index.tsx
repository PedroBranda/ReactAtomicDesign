import { PropsWithChildren } from "react";
import "./style.css";

interface Props {
  children: string;
  style?: React.CSSProperties;
}

function Typograph({ children, style }: PropsWithChildren<Props>) {
  return <p style={style}>{children}</p>;
}

export default Typograph;
