import Button, { ButtonTomato } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/Header.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <>
      <Container bg={"black"}>
        <HeaderText>styled</HeaderText>
        <StyledLink href="https://github.com/0xkiichiro" target={"_blank"}>
          oi
        </StyledLink>
        <Button primary={true}>code</Button>
        <Button>to</Button>
        <ButtonTomato>survive</ButtonTomato>
        <ButtonTomato primary>DOMINATE</ButtonTomato>
        <StyledLink
          href="https://github.com/0xkiichiro"
          target={"_blank"}
          secondary
        >
          oi
        </StyledLink>
        <HeaderText color={"white"}>components</HeaderText>
      </Container>
    </>
  );
};

export default App;
