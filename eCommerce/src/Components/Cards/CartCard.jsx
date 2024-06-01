import React from "react";
import Cart from "../Cart/Cart";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useProduct } from "../../contexts";

function CartCard({ product }) {


    const { addToCart, removeFromCart, deleteFromCart } = useProduct();

    return (
        <div className="grid grid-cols-6 gap-5 shadow-md p-5 content-center">
            <div className="col-span-1 flex flex-wrap">
                <img className="h-20 w-15" src={product.image} alt="" />
            </div>
            <div className="col-span-2">
                <h5>{product.title}</h5>
                <p>${product.price}</p>
                <p>{product.rating.rate}</p>
            </div>

            <div className="btn col-span-2 flex flex-wrap gap-4">
                <div className="col-span-2 flex flex-wrap content-center justify-center gap-2">
                    <button onClick={() => removeFromCart(product)}><CiSquareMinus className="text-4xl" /></button>
                    <p className="text-2xl">{product.qty}</p>
                    <button onClick={() => { addToCart(product) }}><CiSquarePlus className="text-4xl" /></button>
                </div>

                <button onClick={() => deleteFromCart(product)} className="flex flex-wrap content-center font-semibold
             bg-blue-950 text-white px-4 py-1 my-auto rounded-md max-h-10 ">Remove From Cart
                    <MdDelete className="text-3xl ml-1" /></button>

            </div>




        </div>
    )
}



export default CartCard;