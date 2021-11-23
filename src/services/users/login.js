import { provider } from "firebaseConfig/config.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const login = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
     console.log(user)
    }).catch((error) => {
     
    });
}

export default login