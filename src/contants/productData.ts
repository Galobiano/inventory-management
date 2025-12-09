import drugs from "@/assets/drugs.jpg";

export interface ProductDetails {
  image: string;
  items: string;
  price: number;
  qty: number;
  total: number;
  date: string;
}
export const product: ProductDetails[] = [
  {
    image: drugs,
    items: "Antibiotic",
    price: 100,
    qty: 15,
    total: 1000,
    date: "November 12, 2026",
  },
  {
    image: drugs,
    items: "Paracetamol",
    price: 50,
    qty: 200,
    total: 1500,
    date: "November 25, 2026",
  },
  {
    image: drugs,
    items: "Bioflu",
    price: 150,
    qty: 250,
    total: 2500,
    date: "November 30, 2026",
  },
];
