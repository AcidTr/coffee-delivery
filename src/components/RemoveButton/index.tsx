import { RemoveButtonContainer } from './styles';
import { Trash } from '@phosphor-icons/react';

export function RemoveButton() {
  return (
    <RemoveButtonContainer>
      <Trash size={32} />
      <label>REMOVER</label>
    </RemoveButtonContainer>
  );
}
