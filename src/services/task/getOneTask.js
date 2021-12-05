import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "firebaseConfig/config";

async function getOneTask(idUser, id) {
  const q = query(
    collection(db, "tasks"),
    where("idUser", "==", `${idUser}`),
    where("id", "==", `${id}`)
  );

  const querySnapshot = await getDocs(q);
  let result;
  querySnapshot.forEach((doc) => {
    result = doc.data();
  });

  return result;
}

export default getOneTask;
