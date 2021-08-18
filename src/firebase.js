// import firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyA4tKa-dCrQ0eYvVjceJw-Ch4GwzvYPRFY",
//     authDomain: "expense-tracker-2-cf35f.firebaseapp.com",
//     projectId: "expense-tracker-2-cf35f",
//     storageBucket: "expense-tracker-2-cf35f.appspot.com",
//     messagingSenderId: "482576866684",
//     appId: "1:482576866684:web:6b2694304f48f87da5d8f9"
// };

// firebase.initializeApp(firebaseConfig)

// const notificationConfig = () => {
//     const msg = firebase.messaging()

//     msg.requestPermission().then(() => {
//         return msg.getToken()
//     }).then(token => {
//         console.log('token', token)
//     })
// }

// export default notificationConfig