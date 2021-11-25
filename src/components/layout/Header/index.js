import useUser from "hooks/useUser"
import Container from "../../Container"
import { HeaderEstyle } from "./styled"
import Avatar from "components/Avatar"
import {LogoutOutlined} from "@ant-design/icons"
function Header({ children }) {
  const { user } = useUser();
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
          user && <button><LogoutOutlined />cerrar sesion</button>
        }
        </div>
      </Container>
    </HeaderEstyle>
  )
}

export default Header
