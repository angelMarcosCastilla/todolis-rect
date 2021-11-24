import { useContext } from "react"
import { UserContext } from "context/UserContext"

function useUser() {
  const data = useContext(UserContext)
  return data
}

export default useUser
