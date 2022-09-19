  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDhipJ2-wf9_siFboOmgxbIhne6HecP_Bg",
    authDomain: "mundo-invertido-6b639.firebaseapp.com",
    projectId: "mundo-invertido-6b639",
    storageBucket: "mundo-invertido-6b639.appspot.com",
    messagingSenderId: "888501098312",
    appId: "1:888501098312:web:479ecf4cdb458b57d8057d",
    measurementId: "G-H9CZWH8GE6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export default app ;
