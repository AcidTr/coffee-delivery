import { CoffeeCartButtonContainer } from './styles';
import { ShoppingCart } from '@phosphor-icons/react';

export function CoffeeCartButton() {
  return (
    <CoffeeCartButtonContainer>
      <ShoppingCart
        size={32}
        weight='fill'
      />
    </CoffeeCartButtonContainer>
  );
}
