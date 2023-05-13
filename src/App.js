import React, { useState } from 'react';
import Header from './common/header/Header';
import Pages from './pages/Pages'
import Cart from './common/Cart/Cart';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css'

import Data from './components/Data';
import Sdata from './components/shops/Sdata'
import Footer from './common/footer/Footer';
const App = () => {

  // step1: fetch data from database
  const { productItems } = Data
  const {shopItems} =Sdata
  const [cartItem, setCartItem] = useState([])

  const addToCart = (productItems) => {
    //arr.push({ ...productItems})
    // الخطوه دي عملية اضافه عادية جدا وهيكرر اي منتج هضغط عليه اكتر من مرة
    setCartItem([...cartItem, { ...productItems, Quantity: 1 }])


    // الخطوة دي عشان مايكررش اضافة منتج موجود بالفعل ف الارراي الجديد ولكن يزود فقط السعر والكميه

    const product = cartItem.find((item) => item.id === productItems.id)

    if (product) {
      setCartItem(cartItem.map((item) =>
      (item.id === productItems.id ?
        { ...product, Quantity: product.Quantity + 1 } : item
      )))
    }

  }
  const decreaseQty =(productItems) => {
    const product = cartItem.find((item) => item.id === productItems.id)
    if(product.Quantity === 1){
      // يعني لو اليوزر مختار واحد بس المنتج ده وداس زرار الناقص امسحلي الايتم كله
      setCartItem(cartItem.filter((item) => item.id !== productItems.id ))
    }else{
      //  انما لو مختار كميه من نفس المنتج اكتر من واحد هتقلل الكميه بس وتسيب المنتج ف الصفحة زي ماهوه 
      setCartItem(cartItem.map((item)=>(item.id===productItems.id?{...product , Quantity:product.Quantity -1} : item)))
    }
  }
  return (
    <>

      <Router>
        <Header cartItem={cartItem} />
        <Route exact path='/' >
          <Pages productItems={productItems} addToCart={addToCart} cartItem={cartItem} shopItems={shopItems} />
        </Route>
        <Route exact path='/Cart' >
          <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}  />
        </Route>
        <Footer/>

      </Router>
    </>
  );
}

export default App;

//2:07:14