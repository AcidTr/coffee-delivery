import styled from 'styled-components';

export const CartButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  max-width: 2.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.yellowLight};

  svg {
    padding: 8px;

    color: ${({ theme }) => theme.yellowDark};
  }
`;
