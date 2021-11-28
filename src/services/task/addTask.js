import { collection, addDoc } from "firebase/firestore";
import { db } from "firebaseConfig/config";

const addTask = async (newTask) => {
  const docRef = await addDoc(collection(db, "tasks"), newTask);
  return docRef;
}

export default addTask
