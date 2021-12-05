import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "firebaseConfig/config";

const getTasks = async (id) => {
  const taks = [];
  const taskRef = collection(db, "tasks");
  const q = query(taskRef, where("idUser", "==", `${id}`));
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    taks.push({...doc.data(), id:doc.id})
  });

  return taks;
};

export default getTasks;
