import { createContext, useEffect, useState } from "react"
import { stateUserChanged } from "services/users/login";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    if (!user) {
      stateUserChanged(setUser)
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
export { UserContext }