import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";
import { auth } from "../components/firebase/firebase";


export function writeUserData(name: string, email: String) {
  const db = getDatabase();
  const auth = getAuth();
  const uId = auth.currentUser?.uid; // authanticate ' deki otomatik verilen id yi burada db de oluşturduğumuz id ye veriyor 

  const userList = ref(db, 'users/');
  const newUser = push(userList);
  set(newUser, {
    uId:uId,
    username: name,
    email: email,
    
  });
  
}


// task ekleme
export function deneme(name: string, email: String) {
  const db = getDatabase();
  const uId = auth.currentUser?.uid;

  set(ref(db, "users/"), {
    uId:uId,
    username: name,
    email: email,
  });
}

