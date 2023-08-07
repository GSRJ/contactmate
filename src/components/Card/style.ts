import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px;
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
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
    gap: 10px;
    padding: 10px;
    width: 100%;
  }
`;
