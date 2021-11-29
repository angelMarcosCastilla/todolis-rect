import { providerGithub, providerGoogle } from "firebaseConfig/config.js";
import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";

const loginWithGoogle = (setUser) => {
  const auth = getAuth();
  signInWithPopup(auth, providerGoogle)
   
};
const loginWithGithub = (setUser) => {
  const auth = getAuth();
  signInWithPopup(auth, providerGithub)
    .then((result) => {
      const user = result.user.providerData[0];
      setUser(user);
    })
    .catch((error) => {console.log(error)});
};

const stateUserChanged = (onchange) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    const data = user ? user.providerData[0] : null;
    onchange(data)
  });
};

export { stateUserChanged };
export { loginWithGoogle };
export { loginWithGithub };
