import styled from "styled-components";

const Button = styled.button`
  font-size: 1.2rem;
  color: ${({ color }) => color || "white"};
  background-color: ${({ bg }) => bg || "hsl(252, 59%, 52%)"};
  border: 1px solid hsl(252, 59%, 52%);
  padding: 10px 20px;
  box-shadow: 1px 1px 2px black;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
  }
`;

export default Button;
