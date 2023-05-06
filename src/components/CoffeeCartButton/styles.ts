import styled from 'styled-components';

export const CoffeeCartButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  max-width: 2.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.purpleDark};

  svg {
    padding: 8px;

    color: ${({ theme }) => theme.white};
  }

  transition: background 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.purple};
  }
`;
