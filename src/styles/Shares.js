import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const Button = styled.button`
  color: #fff;
  background-color: hotpink;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: indigo;
  }
`;
