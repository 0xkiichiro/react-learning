import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1rem;
  background-color: ${({ bg }) => bg || "white"};
`;

export default Container;
