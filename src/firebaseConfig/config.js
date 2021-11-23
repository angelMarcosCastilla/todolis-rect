import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi5FUC38YTOwz7RV6CrdaNn4VAMLNwHws",
  authDomain: "todolist-1bd4d.firebaseapp.com",
  projectId: "todolist-1bd4d",
  storageBucket: "todolist-1bd4d.appspot.com",
  messagingSenderId: "224912032721",
  appId: "1:224912032721:web:63c6f3c5620d0ee222d6f0"
};

const app = initializeApp(firebaseConfig);
export const providerGoogle = new GoogleAuthProvider(app);
export const providerGithub = new GithubAuthProvider (app);
