import { styled } from "styled-components";
export const Button=styled.button`
    color: white;
    background: #000000;
    padding: 10px 18px;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;
    &:hover{
      border: 1px solid black;
      background-color: white;
      color: black;
      transition: 0.3s background ease-in;
    }
  `;
export const OutlineButton =styled(Button)  `
  color:black;
  background-color: white;
  border: 1px solid black;
  &:hover{
      border: 1px solid transparent;
      background-color: black;
      color: white;
    }
`;
