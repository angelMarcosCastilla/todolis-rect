import Container from "components/Container"
import Button from "../../components/Button"
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import { loginWithGoogle , loginWithGithub} from "services/users/login";

function Login() {
  return (
    <Container>
      <button onClick = {loginWithGoogle}> <GoogleOutlined />  Inicia con tu cuenta de Google </button>
      <button onClick={loginWithGithub}> <GithubOutlined /> Inicia con tu cuenta de Github</button>
    </Container>
  )
}

export default Login
