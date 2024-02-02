import { Helmet } from "react-helmet";
import Anchor from "../../atoms/anchor";
import Logo from "../../atoms/logo";
import Typograph from "../../atoms/typograph";
import Body from "../../templates/body";
import Container from "../../templates/container";
import "./style.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>RAD: React Atomic Design</title>
      </Helmet>
      <Container>
        <Body>
          <Logo width={200} />
          <Typograph className="home-title">It's a training project!</Typograph>
          <Anchor href="/about" target="_self" rel="noopener noreferrer">
            See more about
          </Anchor>
        </Body>
      </Container>
    </>
  );
}

export default Home;
