import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 100%;
  border-right: 1px solid ${props => props.theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  svg{
    width: 180px;
  }
`;