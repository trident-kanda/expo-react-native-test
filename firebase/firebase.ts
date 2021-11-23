import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"
import env from "../env";

export const firebaseApp = initializeApp(env.expo.firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()

