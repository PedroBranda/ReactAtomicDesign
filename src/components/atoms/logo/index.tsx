import logo from "../../../imgs/logo.svg";
import "./style.css";

interface Props {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export default function Logo({ width, height, style }: Props) {
  return (
    <img
      src={logo}
      className="logo"
      style={style}
      alt="logo"
      width={width}
      height={height}
    />
  );
}
