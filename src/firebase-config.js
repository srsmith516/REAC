import { initializeApp } from "firebase/app";
// Import other Firebase services as needed, such as Firestore or Auth
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUJdlKPU96euCOLVP3zjC8upkkHXVScCs",
  authDomain: "reac-77b5d.firebaseapp.com",
  projectId: "reac-77b5d",
  storageBucket: "reac-77b5d.appspot.com",
  messagingSenderId: "1079630751571",
  appId: "1:1079630751571:web:8b7881445a3efaa191e3a6",
  measurementId: "G-RQB8D3460T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const storage = getStorage(app);

// Export configured services
export { app, db, storage };