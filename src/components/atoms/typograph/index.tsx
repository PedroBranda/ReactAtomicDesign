import { PropsWithChildren } from "react";
import "./style.css";

interface Props {
  children: string;
  className?: string;
  style?: React.CSSProperties;
}

function Typograph({ children, style, className }: PropsWithChildren<Props>) {
  return (
    <p className={["base-typograph", className].join(" ")} style={style}>
      {children}
    </p>
  );
}

export default Typograph;
