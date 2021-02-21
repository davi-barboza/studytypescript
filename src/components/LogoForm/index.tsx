import { Container, Logo} from './styles'
import LogoSvg from '../../assets/logo.svg'

const LogoForm: React.FC = () => {
  return (    
    <Container>
      <Logo>
        <LogoSvg />
      </Logo>
    </Container>
  );
}

export default LogoForm;