import { PropsWithChildren } from "react";
import "./style.css";

interface Props {
  children: string | React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

function Anchor({
  children,
  className,
  style,
  href,
  target,
  rel,
}: PropsWithChildren<Props>) {
  return (
    <a
      className={["base-anchor", className].join(" ")}
      style={style}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}

export default Anchor;
