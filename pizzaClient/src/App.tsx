import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import CheckoutPage from './pages/CheckoutPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThankYouPage from './pages/ThankYouPage'

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/checkout" element={ <CheckoutPage /> } />
          <Route path="/thankyou" element={ <ThankYouPage /> } />
        </Routes>
      </Router>
  )
}

export default App
