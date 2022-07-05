import styled from "styled-components";

const Button = styled.button`
  /* color: ${(props) => (props.primary ? "hotpink" : "white")}; */
  color: ${({ primary }) => (primary ? "hotpink" : "white")};
  background-color: ${(props) => (props.primary ? "lightgrey" : "hotpink")};
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 5px;

  &:hover {
    transform: scale(0.97);
  }
`;

export const ButtonTomato = styled(Button)`
  color: ${({ primary }) => (primary ? "tomato" : "white")};
  background-color: ${({ primary }) => (primary ? "white" : "tomato")};
  border: 1px solid tomato;
`;

export default Button;
