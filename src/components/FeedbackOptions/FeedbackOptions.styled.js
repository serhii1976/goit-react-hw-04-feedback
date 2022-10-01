import styled from 'styled-components';

export const ButtonsList = styled.div`
  display: flex;
  gap: 25px;
  justify-content: start;
`;
export const Button = styled.button`
  width: 5vw;
  border-radius: 5px;
  :hover {
    background-color: grey;
    color: white;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.6);
  }
`;
