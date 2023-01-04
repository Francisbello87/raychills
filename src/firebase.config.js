import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmiZXXlhr7Pbz8fKxDDCObwSKWGV7PbBA",
  authDomain: "raychills-b4211.firebaseapp.com",
  databaseURL: "https://raychills-b4211-default-rtdb.firebaseio.com",
  projectId: "raychills-b4211",
  storageBucket: "raychills-b4211.appspot.com",
  messagingSenderId: "470997498203",
  appId: "1:470997498203:web:9afd8e383c1d5aaa3f827e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
