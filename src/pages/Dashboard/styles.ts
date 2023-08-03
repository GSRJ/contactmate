import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  header {
    background-color: var(--color3);
  }

  main {
    display: flex;
    gap: 20px;
  }
`;

export const Board = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  list-style: none;
`;
