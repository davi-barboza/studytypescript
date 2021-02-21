import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: #6ED9A0;
  color: #fff;
  border-radius: 5px;
  
  width: 350px;
  height: 50px;
  font-size: 24px;
  
  cursor: pointer;
  transition: .5s;

  :hover{
    background: none;
    border: 1px solid #6ED9A0;
    transition: .5s;
  }
`;