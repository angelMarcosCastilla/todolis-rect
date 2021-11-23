import Container from "components/Container"
import Button from "../../components/Button"
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import login from "services/users/login";

function Login() {
  return (
    <Container>
      <button onClick = {login}> <GoogleOutlined />  Inicia con tu cuenta de Google </button>
      <button> <GithubOutlined /> Inicia con tu cuenta de Github</button>
    </Container>
  )
}

export default Login
