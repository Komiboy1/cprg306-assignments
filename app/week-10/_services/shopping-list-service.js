import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItems = async(userId) => {
    try{
        const items = [];
        const db = firebase.firestore();
        const itemsCollection = db.collection('users').doc(userId).collection('items');
        const snapshot = await itemsCollection.get();

        snapshot.forEach(doc => {
            items.push({id: doc.id, ...doc.data()});
        });

        return items;
    } catch (error) {
        console.error("Error fetching items: ", error);
        throw new Error("Unable to fetch items");
    }
}

const addItem = async (userId, item) => {
    try{
        const db = firebase.firestore();
        const itemsCollection = db.collection('users').doc(userId).collection('items');
        const docRef = await itemsCollection.add(item);

        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", error);
        throw new Error("Unable to add item");
    }
};