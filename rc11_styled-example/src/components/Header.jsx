import React from "react";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex-styled";
import StyledHeader, { Logo, Nav, Image, Div } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="../../images/logo_white.webp" />
          <div>
            <Button color="hsl(252, 59%, 52%)" bg={"white"}>
              Projects
            </Button>
            <Button>About Me</Button>
            <Button>Contact</Button>
          </div>
        </Nav>
        <Div>
          <h1>0xkiichiro, ancient code-fu master!</h1>
          <p>
            He started his journey when he was 26 years old. He was from Morioh,
            Japan. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsum molestiae fuga pariatur veritatis voluptates magni amet
            similique distinctio odit reprehenderit?
          </p>
          <Flex>
            <Button color={"hsl(252, 59%, 52%)"} bg={"white"}>
              suki suki!
            </Button>
            <Image src={"./images/chicago.jpg"} />
            <Image src={"./images/art.jpg"} />
            <Image src={"./images/europe-amazing-picture.jpg"} />
          </Flex>
        </Div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
