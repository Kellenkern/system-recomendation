import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';
import {
  LoginContainer,
  Logo,
  CompanyName,
  Link,
  Button,
} from './styled';
import logo from '../../assets/logobranco.png'

export const SignIn = () => {
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/home')
  }
  const handleNavigateForgetPassword = () => {
    navigate('/forgot-password')
  }
  const handleNavigateSignUp = () => {
    navigate('/sign-up')
  }

  return (
    <>
      <LoginContainer>
        <Logo src={logo} alt="Logo da Empresa" />
        <CompanyName>COOL TEA COMPANY</CompanyName>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button onClick={handleNavigateHome}>Entrar</Button>
        <Link onClick={handleNavigateForgetPassword}>Esqueci minha senha</Link>
        <Link onClick={handleNavigateSignUp}>Cadastrar</Link>
      </LoginContainer>
    </>
  );
}

