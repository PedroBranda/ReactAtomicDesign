import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { CustomStyles } from "../../../types/common";
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
          <Typograph style={style.title}>
            Example of React Atomic Design
          </Typograph>
          <Typograph style={style.description}>
            This project was built to learn the basics of react atomic design.
          </Typograph>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Body>
      </Container>
    </>
  );
}

const style: CustomStyles = {
  title: {
    fontSize: 64,
    fontWeight: "bold",
    margin: "unset",
  },
  description: {
    fontSize: 26,
  },
};

export default About;
