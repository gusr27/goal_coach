import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAI8UQ4lF2BEWNRDpVYzKXCrHM76V7nt_k",
    authDomain: "goalcoach-557da.firebaseapp.com",
    databaseURL: "https://goalcoach-557da.firebaseio.com",
    projectId: "goalcoach-557da",
    storageBucket: "goalcoach-557da.appspot.com",
    messagingSenderId: "1040445423889"
}

export const firebaseApp = firebase.initializeApp(config)
export const goalRef = firebase.database().ref('goals')
export const completeGoalRef = firebase.database().ref('completeGoals')