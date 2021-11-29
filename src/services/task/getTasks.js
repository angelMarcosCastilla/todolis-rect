import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "firebaseConfig/config";

const getTasks = async (id) => {
  console.log("pidiento task")
  const taks = [];
  const taskRef = collection(db, "tasks");
  const q = query(taskRef, where("idUser", "==", `${id}`));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    taks.push(doc.data())
  });

  return taks;
};

export default getTasks;
