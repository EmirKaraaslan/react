import { getDatabase, ref, set } from "firebase/database";

 function writeUserData( name:string,email:String) {
  const db = getDatabase();
  set(ref(db, 'users/'), {
    username: name,
    email: email,
  });
}