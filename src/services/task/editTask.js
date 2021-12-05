import { doc, updateDoc } from "@firebase/firestore";
import { db } from "firebaseConfig/config";

async function editTask(id, newTask) {
  const docRef = doc(db, "tasks", id);

  await updateDoc(docRef, newTask);
}

export default editTask;
