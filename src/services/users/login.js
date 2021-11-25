import { providerGithub, providerGoogle } from "firebaseConfig/config.js";
import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";

const loginWithGoogle = (setUser) => {
  const auth = getAuth();
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      const user = result.user.providerData[0];
      setUser(user)
    }).catch((error) => {

    });
}
const loginWithGithub = (setUser) => {
  const auth = getAuth();
  signInWithPopup(auth, providerGithub)
    .then((result) => {
      const user = result.user.providerData[0];
      setUser(user)
    }).catch((error) => {

    });
}

const stateUserChanged = (onchange) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
     user && onchange(user.providerData[0])
  })
}

export {stateUserChanged}
export { loginWithGoogle }
export { loginWithGithub }