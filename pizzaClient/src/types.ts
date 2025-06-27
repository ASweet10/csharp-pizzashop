export interface Pizza {
    id: number;
    name: string;
    price: number;
    ingredients: string;
}
export interface Appetizer {
    id: number;
    name: string;
    price: number;
    ingredients: string;
}

export type CartItem = {
    id: number;
    name: string;
    price: number;
    type: string,
    quantity: number;
}

export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (item: CartItem) => void;
    clearCart: () => void;
}