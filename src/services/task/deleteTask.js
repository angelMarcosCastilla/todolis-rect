import { deleteDoc, doc } from "@firebase/firestore"
import { db } from "firebaseConfig/config"

async function deleteTask(id) {
  const deleteUser = doc(db, "tasks", id);
  deleteDoc(deleteUser);
  

}

export default deleteTask
