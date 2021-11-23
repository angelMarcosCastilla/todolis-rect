import { providerGithub, providerGoogle } from "firebaseConfig/config.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const loginWithGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user)
    }).catch((error) => {

    });
}
const loginWithGithub = () => {
  const auth = getAuth();
  signInWithPopup(auth, providerGithub)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user)
    }).catch((error) => {

    });
}

export { loginWithGoogle }
export { loginWithGithub }