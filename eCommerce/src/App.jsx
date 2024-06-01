import React, { useEffect, useState } from 'react';
import { Card ,Header} from './Components';
import './App.css';
import { ProductProvider } from './contexts';
import { Outlet, json } from 'react-router-dom';


function App() {
  const [products, setProducts] = useState([]);
  const [cartItems,setCartItems] = useState([]);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) =>{
    const index = cartItems.findIndex(item => item.id === product.id);
    if(index !== -1){
      setCartItems(cartItems.map((item)=>(item.id===product.id?{...item,qty:item.qty+1}:item)));
    }else{
      setCartItems((prev)=>[...prev,{...product,qty:1}]);
    }
  }


  // decrease the quantity of Product in cart 
  const removeFromCart = (product)=>{
    const index = cartItems.findIndex(item=>item.id===product.id);
    if(product.qty===1){
      const tempCart = cartItems.filter((item) => item.id !== product.id);
      setCartItems(tempCart);
    }else{
      const tempCart = cartItems.map((item)=>(item.id === product.id ? {...item,qty:item.qty-1}:item));
      setCartItems(tempCart)
    }
  }

  // remove the product from cart 
  const deleteFromCart = (products)=>{
    setCartItems(cartItems.filter(item=>item.id !== products.id));
  }

  // get cart items from localStorage 
  useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(cart && cart.length>0){
      setCartItems(cart);
    }
  },[])
  
  // set cart Items in localStorage 
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartItems));
  },[cartItems]);

  

  

  return (
      
    <ProductProvider value={{products,fetchProducts,cartItems,addToCart,removeFromCart,deleteFromCart}}>
      <Header/>
      <Outlet/>
    </ProductProvider>

  );
}

export default App;



