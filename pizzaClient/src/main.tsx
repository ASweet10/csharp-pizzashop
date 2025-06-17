import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './components/CartContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
)
