import { Redirect } from "wouter";
import useUser from "hooks/useUser";
import { loginWithGithub, loginWithGoogle } from "services/users/login";
import Button from "components/Button";
import "./styles.css";

function Login() {
  const { user } = useUser();

  if(user===undefined) return null
  if (user) return <Redirect to="/" />;

  return (
    <section className="pageLogin">
      <div className="loginContent">
        <h2 className="mb-2 loginContent__text">Inicia Sesión con tu:</h2>
        <Button onClick={loginWithGoogle} bg="#ff6347"> Cuenta de Google</Button>
        <Button onClick={loginWithGithub} bg="#3e4444"> Cuenta de Github</Button>
      </div>
    </section>
  );
}

export default Login;
