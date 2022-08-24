export interface FirestoreUserType {
  id: string;
  email: null | string;
}

export type productItemType = {
  id: number;
  img: string;
  productName: string;
  rating: number;
  "review-count": number;
  rp: string;
};
