import drugs from "@/assets/drugs.jpg";

interface AddedProduct {
  image: string;
  title: string;
  price: string;
  initial: string;
}
export const addedProduct: AddedProduct[] = [
  {
    image: drugs,
    title: "Biogesic",
    price: "1000",
    initial: "Antibiotic",
  },
  {
    image: drugs,
    title: "Aminoglycosides",
    price: "1000",
    initial: "Antibiotic",
  },
];
