import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
import { firestore } from "../../firebaseConfig";
import { getProductsListItemResultType } from "../types/productsTypes";

export const getProductList = async (documentId: string) => {
  const productListDocRef = doc(
    firestore,
    "products-list",
    "mmtBE1MtchRX806VpNOE"
  );

  const productListDocSnapshot = await getDoc(productListDocRef);
  const productListDoc = productListDocSnapshot.data();

  const productsSnap = await getDocs(collection(productListDocRef, "products"));

  const products = productsSnap.docs.map((prod) => {
    return prod.data();
  });

  return { productListDoc, products } as getProductsListItemResultType;
};
