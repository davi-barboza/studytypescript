import styled from "styled-components";

export const Form = styled.div`
  height: 300px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  padding: 0 10px;

  width: 350px;
  height: 50px;
  font-size: 24px;


  &:focus {
    border: 2px solid #6ED9A0;
  }
`;

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

export const FormFooter = styled.div`
  width: 350px;
  height: 50px;
  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  p {
    font-size: 20px;
    line-height: 20px;
    color: ${props => props.theme.colors.primary}
  }
`;