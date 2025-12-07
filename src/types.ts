import { z } from "zod";

export type ProductType = {
  id: number | string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 characters long")
    .max(10, "Phone number must be at most 10 characters long")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
  address: z.string().min(2, "Address must be at least 2 characters long"),
  city: z.string().min(2, "City must be at least 2 characters long"),
  country: z.string().min(2, "Country must be at least 2 characters long"),
});

export type ShippingFormType = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolderName: z
    .string()
    .min(1, "Please enter your name as shown on the card"),
  cardNumber: z
    .string()
    .min(16, "Card number must be at least 16 digits long")
    .max(16, "Card number must be at most 16 digits long")
    .regex(/^[0-9]+$/, "Card number must contain only numbers"),
  expirayDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in the format MM/YY"
    ),
  cvv: z
    .string()
    .min(3, "CVV must be at least 3 digits long")
    .max(3, "CVV must be at most 3 digits long")
    .regex(/^[0-9]+$/, "CVV must contain only numbers"),
});

export type PaymentFormType = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType;
};

export type CartStoreActionsType = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  clearCart: () => void;
};
