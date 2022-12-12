import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCbBehCM-LGRtKB0PZ8kiaTCnhpfmPshxE",
  authDomain: "rtalks-2f875.firebaseapp.com",
  projectId: "rtalks-2f875",
  storageBucket: "rtalks-2f875.appspot.com",
  messagingSenderId: "850359690629",
  appId: "1:850359690629:web:1fe904add8f1c1065e10ec"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);