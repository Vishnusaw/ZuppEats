import { createContext,useContext } from "react";


export const ProductContext = createContext({
    products:[{

    }],
    cartItems:[{

    }],
    addToCart:(product)=>{},
    removeFromCart:(product)=>{},
    deleteFromCart:(product)=>{},
    fetchProduct:()=>{},
})


export const useProduct = ()=>{
    return useContext(ProductContext);
}


export const ProductProvider = ProductContext.Provider;

