import {
  collection,
  doc,
  getDocs,
  orderBy,
  setDoc,
  query,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async (data) => {
  await setDoc(doc(firestore, "storeCollections", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllStoreCollections = async () => {
  const items = await getDocs(
    query(collection(firestore, "storeCollections"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
