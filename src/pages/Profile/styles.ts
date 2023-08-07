import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    height: 100%;
  }
  h2 {
    font-size: 60px;
    text-align: center;
    color: var(--color4);
  }
  h6 {
    margin: 10px;
    font-size: 30px;
    text-align: center;
    color: var(--color4);
  }
`;
