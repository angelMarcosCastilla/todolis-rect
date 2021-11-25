import { useContext, useEffect } from "react";
import { UserContext } from "context/UserContext";
import Container from "components/Container"
import Button from "../../components/Button"
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import { loginWithGoogle, loginWithGithub } from "services/users/login";
import "./style.css"
import { useLocation } from "wouter";

function Login() {
  const { user,setUser } = useContext(UserContext);
  const [location, setLocation] = useLocation();

useEffect(()=>{
  user && setLocation("/")
},[user, setLocation])
  return (
    <Container>
      <div className="login">
        <h2>Inicia sesión con: </h2>
        <Button color="google" onClick={() => loginWithGoogle(setUser)}> <GoogleOutlined />   cuenta de Google </Button>
        <Button color="github" onClick={() => loginWithGithub(setUser)}> <GithubOutlined />  cuenta de Github</Button>
      </div>
    </Container>
  )
}

export default Login
