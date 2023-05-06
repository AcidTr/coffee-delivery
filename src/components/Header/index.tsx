import { HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <a href='/'>
          <img
            src={logo}
            alt='logo'
          />
        </a>
      </nav>
      <nav>
        <button>select place</button>
        <a href='/checkout'>
          <button>carrinho</button>
        </a>
      </nav>
    </HeaderContainer>
  );
}
