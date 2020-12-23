import firebase from 'firebase'

const apiKey = 'AIzaSyCHi8rk1MpDGLaQHTADMQQZaF2rMbtDJlc'

if (location.hostname === 'localhost') {
  const firebaseConfig = {
    apiKey: apiKey,
    authDomain: 'vue3auth.firebaseapp.com',
    projectId: 'vue3auth',
    storageBucket: 'vue3auth.appspot.com',
    messagingSenderId: '57922491154',
    appId: '1:57922491154:web:6e92a7e04185dd29af19cb',
    // Point to the RTDB emulator running on localhost.
    // In almost all cases the ns (namespace) is your project ID.
    databaseURL: 'http://localhost:9000?ns=sejukung-id'
  }
  firebase.initializeApp(firebaseConfig)
} else {
  const firebaseConfig = {
    apiKey: apiKey,
    authDomain: 'vue3auth.firebaseapp.com',
    projectId: 'vue3auth',
    storageBucket: 'vue3auth.appspot.com',
    messagingSenderId: '57922491154',
    appId: '1:57922491154:web:6e92a7e04185dd29af19cb',
    databaseURL: 'https://vue3auth-default-rtdb.firebaseio.com/'
  }
  // Initialize firebase
  firebase.initializeApp(firebaseConfig)
}

// export const fireApp = firebase.initializeApp(firebaseConfig);
