import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqaCV7h9bsBsErtWTCfjGpWj4oK75agFg",
  authDomain: "accept-images.firebaseapp.com",
  projectId: "accept-images",
  storageBucket: "accept-images.appspot.com",
  messagingSenderId: "577722656518",
  appId: "1:577722656518:web:20e794934255fc44806087",
  measurementId: "G-P7YWZ0FXYB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://accept-images.appspot.com");

export default storage;
