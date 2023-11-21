import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore, getDocs  } from "firebase/firestore"; 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbMeFmMMYTP7f1G4myqmC5IafhKdpZKFc",
  authDomain: "react-client-30ec8.firebaseapp.com",
  projectId: "react-client-30ec8",
  storageBucket: "react-client-30ec8.appspot.com",
  messagingSenderId: "959068688922",
  appId: "1:959068688922:web:25b86cf19887962b2677a3",
  measurementId: "G-KKT0KVD23Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()
const storage = getStorage();

export {
    collection,
    addDoc,
    db,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    getDocs
}