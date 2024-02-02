import { Helmet } from "react-helmet";
import Anchor from "../../atoms/anchor";
import Logo from "../../atoms/logo";
import Typograph from "../../atoms/typograph";
import Body from "../../templates/body";
import Container from "../../templates/container";

function Home() {
  return (
    <>
      <Helmet>
        <title>RAD: React Atomic Design</title>
      </Helmet>
      <Container>
        <Body>
          <Logo width={200} />
          <Typograph>Example of React Atomic Design</Typograph>
          <Anchor href="/about" target="_self" rel="noopener noreferrer">
            See more about
          </Anchor>
        </Body>
      </Container>
    </>
  );
}

export default Home;
