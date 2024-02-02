import { PropsWithChildren } from "react";
import "./style.css";

interface Props {
  children: string | React.ReactElement | React.ReactElement[];
  href: string;
  style?: React.CSSProperties;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

function Anchor({
  children,
  href,
  style,
  target,
  rel,
}: PropsWithChildren<Props>) {
  return (
    <a href={href} style={style} className="anchor" target={target} rel={rel}>
      {children}
    </a>
  );
}

export default Anchor;
