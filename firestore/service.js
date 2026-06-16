import { collection, getDocs } from "firebase/firestore";
import { db } from "../firestore/firestore"; // Adjust the path as necessary to point to your Firestore initialization file

export async function getUsersCollection() {
  try {
    // 1. Get reference to the 'users' collection
    const myCollectionRef = collection(db, "users");

    // 2. Fetch data snapshot
    const querySnapshot = await getDocs(myCollectionRef);

    // 3. Map the documents into a clean array of objects
    const usersList = querySnapshot.docs.map(doc => ({
      id: doc.id,         // The unique document ID autofilled by Firebase
      ...doc.data()       // The actual fields inside the document (name, email, etc.)
    }));

    return usersList; 
  } catch (error) {
    console.error("Error fetching users: ", error);
    return [];
  }
}