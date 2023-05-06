import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  max-width: 8rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.yellow};

  label {
    padding: 0.75rem 2.5rem;

    color: ${({ theme }) => theme.white};

    font-size: 0.875rem;
  }

  transition: background 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.yellowDark};
  }
`;
