import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./common/ProtectedRoute";
// import { useDispatch, useSelector } from 'react-redux';
// import { addtocart, updateCart } from './slice/Cart';
// import Header from './components/Header';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import ErrorPage from './components/ErrorPage';
// import ScreenLoader from './components/ScreenLoader';
// import Add from './components/Add';

// const About = lazy(() => import('./components/AboutUs'));
// const WishList = lazy(() => import('./components/WishList'));
const ProductsListing = lazy(() => import('./components/ProductsListing/ProductsListing'));
// const SingleProduct = lazy(() => import('./components/SingleProduct'));
const SignUp = lazy(() => import('./components/SignUp/SignUp'));
const Home = lazy(() => import("./components/Home/Home"));
const SignIn = lazy(() => import("./components/SignIn/SignIn"));
// const LoginOTP = lazy(() => import('./components/LoginOTP'));
// const Orders = lazy(() => import('./components/Orders'));
// const Checkout = lazy(() => import('./components/Checkout'));
// const AddProduct = lazy(() => import('./components/AddProduct'));
// const Cart = lazy(() => import('./components/Cart'));



const Routing = () => {
    return (
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                {/* <Route path="/products/:id" element={<Suspense fallback={<ScreenLoader />}><SingleProduct addRemoveCart={cartAddition}/></Suspense>} /> */}
                <Route path="/products" element={<ProductsListing/>} />
                <Route exact path="/" element={<Home />} />
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
    );
}
 
export default Routing;