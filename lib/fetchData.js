import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const productsRef = collection(db, "products");
const ordersRef  = collection(db, "orders");

export const fetchProducts = async () => {
  const q = query(productsRef);
  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};

export const fetchOrders = async () => {
  const q = query(ordersRef);
  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};
