import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;

  h2 {
    font-size: 60px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
    gap: 10px;
    padding: 10px;
    width: 50%;
    height: fit-content;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;
    }
  }
`;
