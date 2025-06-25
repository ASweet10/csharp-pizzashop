import './App.css'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CheckoutPage from './pages/CheckoutPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThankYouPage from './pages/ThankYouPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/menu" element={ <MenuPage /> } />
          <Route path="/checkout" element={ <CheckoutPage /> } />
          <Route path="/thankyou" element={ <ThankYouPage /> } />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
