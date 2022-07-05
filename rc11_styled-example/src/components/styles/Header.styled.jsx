import styled from "styled-components";

const StyledHeader = styled.header`
  height: 15vh;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Logo = styled.img`
  width: 100px;
  padding: 1rem;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Div = styled.div`
  height: 15vh;
  margin: 4rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export default StyledHeader;
