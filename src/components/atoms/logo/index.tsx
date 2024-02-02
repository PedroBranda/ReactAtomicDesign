import logo from "../../../imgs/logo.svg";
import "./style.css";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

function Logo({ className, style, width, height }: Props) {
  return (
    <img
      style={style}
      className={["base-logo", className].join(" ")}
      src={logo}
      alt="logo"
      width={width}
      height={height}
    />
  );
}

export default Logo;
