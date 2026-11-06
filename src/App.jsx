import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import ProductDetail from './pages/ProductDetail'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import ThankYou from './pages/ThankYou'
// import Contact from './pages/Contact'
// import PrivacyPolicy from './pages/PrivacyPolicy'
// import TermsConditions from './pages/TermsConditions'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/product/:slug" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} /> */}
    </Routes>
  )
}

export default App