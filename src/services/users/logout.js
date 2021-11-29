import { getAuth, signOut } from "firebase/auth";

export const logout = (setUser) => {
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log("cerrando sesion")
  }).catch((error) => {
    console.log("ubo problems")
  });
}

