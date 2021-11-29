import { createContext, useEffect, useState } from "react";
import { stateUserChanged } from "services/users/login";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    stateUserChanged(setUser);
  }, []);
  const data = { user, setUser };

  return (
    <>
      <UserContext.Provider value={data}>{children}</UserContext.Provider>
    </>
  );
}

export { UserContext };
export default UserProvider;
