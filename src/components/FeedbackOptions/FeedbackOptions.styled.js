import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  border-style: none;
  border-radius: 4px;
  font-size: 36px;
  font-weight: 400;
  color: white;
  background: turquoise;
  padding: 6px 22px;
  margin-right: 10px;
  &:hover,
  &:focus {
    color: turquoise;
    background: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
