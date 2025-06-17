import './App.css'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import CheckoutPage from './pages/CheckoutPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThankYouPage from './pages/ThankYouPage'

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Menu /> } />
          <Route path="/checkout" element={ <CheckoutPage /> } />
          <Route path="/thankyou" element={ <ThankYouPage /> } />
        </Routes>
      </Router>
  )
}

export default App
