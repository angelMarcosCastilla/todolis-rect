import Container from "components/Container"
import Button from "../../components/Button"
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import { loginWithGoogle, loginWithGithub } from "services/users/login";
import "./style.css"

function Login() {
  return (
    <Container>
      <div className="login">
      <h2>Inicia sesión con: </h2>
      <Button color="google" onClick={loginWithGoogle}> <GoogleOutlined />   cuenta de Google </Button>
      <Button color="github" onClick={loginWithGithub}> <GithubOutlined />  cuenta de Github</Button>
      </div>
    </Container>
  )
}

export default Login
