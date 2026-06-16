import {
   signInWithPopup,
   signOut,
   singnInWithRedirect,
} from "firebase/auth";


import {
   auth,
   provider
} from "./firebase";



const googleLogin = async () => {

      try {

         const result =
            await signInWithRedirects(
               auth,
               provider
            );

        //  setUser(result.user);
        console.log(result.user);

      } catch (error) {

         console.log(error);

      }

   };

   const logout = async () => {

      await signOut(auth);

    //   setUser(null);

    console.log("User signed out");


   };