import useUser from "hooks/useUser"
import Container from "../../Container"
import { HeaderEstyle } from "./styled"

function Header({children}) {
  const {user} = useUser();
  return (
    <HeaderEstyle>
      <Container>
        <h1>{!user ? "Login": "Bienvenido"}</h1>
      </Container>
    </HeaderEstyle>
  )
}

export default Header
