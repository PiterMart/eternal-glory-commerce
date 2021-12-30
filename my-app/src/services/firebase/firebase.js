import { initializeApp } from '@firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBzmz-67BIaVn8YTycpAG8Haf2V824Nw8U",
    authDomain: "eternal-glory-ecommerce.firebaseapp.com",
    projectId: "eternal-glory-ecommerce",
    storageBucket: "eternal-glory-ecommerce.appspot.com",
    messagingSenderId: "418488095040",
    appId: "1:418488095040:web:5b289ed9b30466866a6aa5"
  };
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)

