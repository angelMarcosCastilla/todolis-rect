import { logout } from "services/users/logout";
import useUser from "hooks/useUser";
import Container from "components/Container";
import Avatar from "components/Avatar";
import { HeaderStyled } from "./styled";
import { LogoutOutlined } from "@ant-design/icons";
import "./styled.css";

function Header() {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <HeaderStyled>
          <Container className="flex space-between">
            <div className="flex">
              <Avatar src={user.photoURL} alt="da" />
              <h1 className="userName">{user.displayName.toLowerCase()}</h1>
            </div>
            <button className="btnLogout" onClick={logout}>
              <LogoutOutlined /> cerrar sesion
            </button>
          </Container>
        </HeaderStyled>
      ) : null}
    </>
  );
}

export default Header;
