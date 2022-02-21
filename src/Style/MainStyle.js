import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  color: red;
  height: 100vh;
  background-color: white;
`;
export const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25vw;
  height: 90vh;
  border: 2px solid white;
  background-color: black;
`;
export const Heading = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 40px;
  color: white;
  weight: 20;
  margin-right: 30px;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  gap: 46px;
  .Orange {
    background-color: #eb9834;
    color: white;
    border-radius: 70%;
    height: 130%;
    gap: 10px;
    cursor: pointer;
  }
  .zero {
    grid-column-start: 1;
    grid-column-end: 3;
    border-radius: 50px;
    height: 150%;
    cursor: pointer;
  }
  .grey {
    background-color: #a19e9a;
    color: black;
    height: 130%;
    gap: 10px;
    cursor: pointer;
  }
  .greyDark {
    background-color: #505254;
    height: 130%;
    gap: 10px;
    cursor: pointer;
  }
`;
export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  border-radius: 60%;
`;
