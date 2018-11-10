import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBXfuNn2vUsaXQS5eII91eIHLmuCuWfurM",
  authDomain: "ragnarok-mobile-guide-playlsit.firebaseapp.com",
  databaseURL: "https://ragnarok-mobile-guide-playlsit.firebaseio.com",
  projectId: "ragnarok-mobile-guide-playlsit",
  storageBucket: "ragnarok-mobile-guide-playlsit.appspot.com",
  messagingSenderId: "522262421602"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;

export const db = firebase.database();

export const getAll = (collection) => db.ref(`${collection}`)

export const getOne = (collection, attr) => db.ref(`${collection}/${attr}`)

export const insert = (collection, value) => db.ref(`${collection}`).set({ ...value })

export const auth = firebase.auth
