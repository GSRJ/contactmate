import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;

  > div {
    background-color: var(--color5);
    padding: 20px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 250px;
  }
`;
