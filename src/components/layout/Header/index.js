import Container from "../../Container"
import { HeaderEstyle } from "./styled"

function Header({children}) {
  return (
    <HeaderEstyle>
      <Container>
        <h1>Bienvenido</h1>
      </Container>
    </HeaderEstyle>
  )
}

export default Header
