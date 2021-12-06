import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "firebaseConfig/config";

async function getOneTask(idUser, id) {
  const q = query(
    collection(db, "tasks"),
    where("idUser", "==", `${idUser}`),
    where("id", "==", `${id}`)
  );
  let result;

  const querySnapshot = await getDocs(q);
  
  querySnapshot.forEach((doc) => {
    result = doc.data();
  });
  return result;
}

export default getOneTask;
