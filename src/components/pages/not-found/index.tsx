import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
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
          <Typograph className="not-found-warning">Error 404</Typograph>
          <Typograph>{`Page: ${pathname} was not found`}</Typograph>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Body>
      </Container>
    </>
  );
}

export default NotFound;
