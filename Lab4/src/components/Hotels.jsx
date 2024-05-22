import { getFirestore, collection, getDocs } from "firebase/firestore";

export function Hotels() {
    //init firestore
    const db = getFirestore();
    const collectionReference = collection(db, 'hotels');
    getDocs(collectionReference).then((snapshot) => {
    var hotels = [];
    snapshot.docs.forEach((doc) => {
        hotels.push({...doc.data(), id: doc.id})
    });
    console.log(hotels);
})
}

export default Hotels;