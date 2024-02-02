import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/button";
import Typograph from "../../atoms/typograph";
import Body from "../../templates/body";
import Container from "../../templates/container";
import "./style.css";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>RAD: About</title>
      </Helmet>
      <Container>
        <Body>
          <Typograph className="about-title">
            Example of React Atomic Design
          </Typograph>
          <Typograph className="about-description">
            This project was built to learn the basics of react atomic design.
          </Typograph>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Body>
      </Container>
    </>
  );
}

export default About;
