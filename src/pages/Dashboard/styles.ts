import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  h2 {
    font-size: 60px;
    text-align: center;
    color: var(--color4);
  }

  header {
    background-color: var(--color3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 10px;
    height: 10vh;
  }

  main {
    display: flex;
    gap: 20px;
  }
`;

export const Board = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100vw;
  list-style: none;
  align-items: center;
`;
