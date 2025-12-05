interface ExpiringProduct {
  product: string;
  stocks: number;
  dateAdded: string;
  exprdIn: string;
  expirationDate: string;
}

export const expiringProduct: ExpiringProduct[] = [
  {
    product: "Ibuprofen",
    stocks: 10,
    dateAdded: "November 10, 2025",
    exprdIn: "30 Days",
    expirationDate: "December 10, 2025",
  },
  {
    product: "Amoxicillin",
    stocks: 15,
    dateAdded: "December 10, 2025",
    exprdIn: "365 Days",
    expirationDate: "December 10, 2026",
  },
];
