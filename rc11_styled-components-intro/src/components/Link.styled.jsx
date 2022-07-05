import styled, { css } from "styled-components";

const StyledLink = styled.a`
  font-size: 2rem;
  color: lightblue;
  &:hover {
    opacity: 0.5;
  }

  ${(props) =>
    props.secondary &&
    css`
      color: lightcoral;
      text-decoration: none;
    `}
`;

export default StyledLink;
