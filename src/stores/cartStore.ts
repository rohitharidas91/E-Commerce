import { create } from "zustand";
import { CartStoreActionsType, CartStoreStateType } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingItemIndex = state.cart.findIndex(
            (cartItem) =>
              cartItem.id === item.id &&
              cartItem.selectedSize === item.selectedSize &&
              cartItem.selectedColor === item.selectedColor
          );

          if (existingItemIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex] = {
              ...updatedCart[existingItemIndex],
              quantity:
                updatedCart[existingItemIndex].quantity + (item.quantity || 1),
            };
            return { cart: updatedCart };
          }

          return {
            cart: [...state.cart, { ...item, quantity: item.quantity || 1 }],
          };
        }),
      removeFromCart: (itemToRemove) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              item.id !== itemToRemove.id ||
              item.selectedSize !== itemToRemove.selectedSize ||
              item.selectedColor !== itemToRemove.selectedColor
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
