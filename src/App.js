import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import FeaturedThemes_2 from './components/FeaturedThemes_2';
import FeaturedThemes from './components/FeaturedThemes';
import PopularCategories from './components/PopularCategories';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import HeroSection from './components/HeroSection';
import FeaturedDesigns from './components/FeaturedDesigns'
import FooterTop from './components/FooterTop';
import Footer2 from './components/Footer2';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/CartPage';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'
import ProductDetailPage from './components/ProductDetailPage'
import AdminLogin from './Admin/Components/AdminLogin'
import ProcessPage from './components/ProcessPage';
import CartPage from './components/CartPage';


// const App = () => {
//     return (
//         <>
//             <Login />
//             <Header />
//       <HeroSection />
//       <FeaturedThemes />
//       <FeaturedThemes_2 />
//       <PopularCategories />
//       <FeaturedDesigns />

//       <Testimonials />
//       <CallToAction />
//       <ProductDetail />
//       <Process />
//       <FooterTop />
//       <Product />
//       <Footer2 />
//             <Footer />
//         </>

//     );
// };

// export default App;


const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<><Login /><Footer /></>} />
            <Route path="/home" element={<HomePage />} /> 
            <Route path="/products" element={<ProductPage />} /> 
            <Route path="/products/detail" element={<ProductDetailPage />} /> 
            <Route path="/process" element={<ProcessPage />} /> 
            <Route path="/cart" element={<CartPage />} /> 



            <Route path="/login" element={<AdminLogin />} />
        </Routes>
    </Router>

    );
};

export default App;