// import firebase from 'firebase/app'

export default class Base {
  constructor(collection, firestore) {
    this.collection = collection
    this.firestore = firestore
  }
}
