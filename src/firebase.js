import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCHuDPWjWy4cAaolTYHOS-9E9dJkCtGuhU",
    authDomain: "quiz-2-47c03.firebaseapp.com",
    projectId: "quiz-2-47c03",
    storageBucket: "quiz-2-47c03.appspot.com",
    messagingSenderId: "569582323782",
    appId: "1:569582323782:web:0e8dc64724fa2aea7f6247"
};

firebase.initializeApp(firebaseConfig)

const notificationConfig = () => {
    const msg = firebase.messaging()

    msg.requestPermission().then(() => {
        return msg.getToken()
    }).then(token => {
        console.log('token', token)
    })
}

export default notificationConfig