import styled from 'styled-components';

export const RemoveButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;

  max-width: 5.75rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.baseButton};

  svg {
    padding: 8px;
    padding-right: 4px;

    color: ${({ theme }) => theme.purple};
  }

  label {
    padding: 6px 4px;
    padding-right: 8px;
    font-size: 0.75rem;
  }

  transition: background 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.baseHover};

    svg {
      color: ${({ theme }) => theme.purpleDark};
    }

    label {
      color: ${({ theme }) => theme.baseSubtitle};
    }
  }
`;
