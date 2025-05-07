import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  foto: string
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      state.items.push(item);
    },
    
    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
