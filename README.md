# ✨ Project: Stellar Cart E-Commerce Platform

## 🎯 Project Overview
Stellar Cart is a modern, full-stack E-Commerce application built to provide a seamless and intuitive online shopping experience. Designed with a high-end "Liquid Glass" aesthetic, it focuses on performance, robust architecture, and a premium user interface.

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 (App Router), React 19
- **Styling**: Tailwind CSS 4, Lucid React Icons
- **State Management**: Zustand (with Persist Middleware)
- **Validation**: Zod
- **Notifications**: React Toastify

## 🚀 Recent Implementations

### Shopping Cart Functionalty
- **Global State Management**: Implemented `useCartStore` using Zustand to manage cart state globally.
- **Persistence**: Cart data is persisted to `localStorage`, ensuring users don't lose their items on refresh.
- **Features**:
  - Add to Cart (with logic to merge quantities for identical items).
  - Remove from Cart.
  - Clear Cart.
  - Dynamic Subtotal & Total calculations.

### UI & UX Enhancements
- **Cart Page**:
  - Multi-step checkout flow (Cart > Shipping > Payment).
  - Responsive layout for Cart Details and Order Summary.
  - "Empty Cart" state with a call-to-action to continue shopping.
- **Notifications**: Integrated `react-toastify` for immediate feedback on actions (e.g., "Product added to cart").
- **Aesthetics**:
  - Custom "thin" scrollbar styling in `globals.css` for a cleaner look.
  - Consistent use of the project's color palette.

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
