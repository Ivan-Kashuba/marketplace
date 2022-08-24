import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "@firebase/firestore";
import { auth, firestore } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { FirestoreUserType } from "../types/models";
import { getProductsListItemResultType } from "../types/productsTypes";
import { getProductList } from "./commonApi";

export const authAPI = {
  async signUpWithEmail(email: string, password: string) {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userForFirestore: FirestoreUserType = {
      id: createdUser.user.uid,
      email: createdUser.user.email,
    };

    await setDoc(doc(firestore, "users", createdUser.user.uid), {
      ...userForFirestore,
    });

    return createdUser;
  },

  async loginWithEmail(email: string, password: string) {
    const loggedUser: any = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return loggedUser;
  },

  async logout() {
    return signOut(auth);
  },
};

export const productsAPI = {
  async getFeatureProducts() {
    return getProductList("mmtBE1MtchRX806VpNOE");
  },

  async getBestSellersProducts() {
    return getProductList("KHRemwfEV2PbgvFbsxDU");
  },

  async getNewArrivalsProducts() {
    return getProductList("1znEFXNyfFANCsyQ0GC1");
  },

  async getTopRatedProducts() {
    return getProductList("yu27D4jBNq0MhqE0gsGK");
  },

  async getSpecialOffersProducts() {
    return getProductList("U8ECqQr6bJT8Jk2Usk0q");
  },

  async addProduct() {
    const data = [
      {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/marketplace-app-5a69b.appspot.com/o/adapter.svg?alt=media&token=d48867ca-e268-4bfc-9fee-d6907265dce5",
        productName: "TMA-2 HD Wireless",
        rating: 4.6,
        "review-count": 86,
        rp: "1.500.000",
      },
      {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/marketplace-app-5a69b.appspot.com/o/adapter.svg?alt=media&token=d48867ca-e268-4bfc-9fee-d6907265dce5",
        productName: "TMA-2 HD Wireless",
        rating: 4.6,
        "review-count": 86,
        rp: "1.500.000",
      },
      {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/marketplace-app-5a69b.appspot.com/o/adapter.svg?alt=media&token=d48867ca-e268-4bfc-9fee-d6907265dce5",
        productName: "TMA-2 HD Wireless",
        rating: 4.6,
        "review-count": 86,
        rp: "1.500.000",
      },
      {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/marketplace-app-5a69b.appspot.com/o/adapter.svg?alt=media&token=d48867ca-e268-4bfc-9fee-d6907265dce5",
        productName: "TMA-2 HD Wireless",
        rating: 4.6,
        "review-count": 86,
        rp: "1.500.000",
      },
      {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/marketplace-app-5a69b.appspot.com/o/adapter.svg?alt=media&token=d48867ca-e268-4bfc-9fee-d6907265dce5",
        productName: "TMA-2 HD Wireless",
        rating: 4.6,
        "review-count": 86,
        rp: "1.500.000",
      },
      {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/marketplace-app-5a69b.appspot.com/o/adapter.svg?alt=media&token=d48867ca-e268-4bfc-9fee-d6907265dce5",
        productName: "TMA-2 HD Wireless",
        rating: 4.6,
        "review-count": 86,
        rp: "1.500.000",
      },
    ];

    const productsListDoc = doc(
      firestore,
      "products-list",
      "U8ECqQr6bJT8Jk2Usk0q"
    );

    const productsCollection = collection(productsListDoc, "products");

    for (let i = 0; i < data.length; i++) {
      await addDoc(productsCollection, data[i]);
    }
  },
};
