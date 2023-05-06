import { CartButtonContainer } from './styles';
import { ShoppingCart } from '@phosphor-icons/react';

export function CartButton() {
  return (
    <CartButtonContainer>
      <ShoppingCart
        size={32}
        weight='fill'
      />
    </CartButtonContainer>
  );
}
