import { getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { getDatabase, ref, set, push, update } from "firebase/database";
import { auth } from "../components/firebase/firebase";
import { getStorage } from "firebase/storage";

export function writeUserData(name: string, email: String) {
  const db = getDatabase();
  const auth = getAuth();
  const uId = auth.currentUser?.uid; // authanticate ' deki otomatik verilen id yi burada db de oluşturduğumuz id ye veriyor

  const userList = ref(db, "users/");
  const newUser = push(userList);
  set(newUser, {
    uId: uId,
    username: name,
    email: email,
  });
}


//  veri okuma 
