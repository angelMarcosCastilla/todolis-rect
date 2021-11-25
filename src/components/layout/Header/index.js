import useUser from "hooks/useUser"
import Container from "../../Container"
import { HeaderEstyle } from "./styled"
import Avatar from "components/Avatar"
import {LogoutOutlined} from "@ant-design/icons"
import { logout } from "services/users/logout"

function Header({ children }) {
  const { user, setUser } = useUser();
  return (
    <HeaderEstyle>
      <Container>
        <div className="flex space-between">
        {
          !user
          ? <h1>TodoApp</h1>
          :
          <div className="flex">
              <Avatar image={user.photoURL} />
              <h1>{user.displayName}</h1>
            </div>
        }

        {
          user && <button onClick = {()=>logout(setUser)}><LogoutOutlined />cerrar sesion</button>
        }
        </div>
      </Container>
    </HeaderEstyle>
  )
}

export default Header
