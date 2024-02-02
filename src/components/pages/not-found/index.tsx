import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomStyles } from "../../../types/common";
import Button from "../../atoms/button";
import Typograph from "../../atoms/typograph";
import Body from "../../templates/body";
import Container from "../../templates/container";
import "./style.css";

function NotFound() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>RAD: Page not found</title>
      </Helmet>
      <Container>
        <Body>
          <Typograph style={style.warning}>Error 404</Typograph>
          <Typograph>{`Page: ${pathname} was not found`}</Typograph>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Body>
      </Container>
    </>
  );
}

const style: CustomStyles = {
  warning: {
    fontSize: 64,
    fontWeight: "bold",
    margin: "unset",
  },
};

export default NotFound;
