import React from "react";
import { useProduct } from "../../contexts";

function Card({ product }) {

    const {addToCart} = useProduct();

    return (
        <>
            <div className="grid content-between  max-w-xs rounded overflow-hidden shadow-lg hover:shadow-gray-500 px-5">
                <img className="w-full h-48 object-center" src={product.image} alt="Placeholder image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-md mb-2">{product.title}</div>
                        <p className="text-gray-700 text-base">
                            Some example text. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <p>${product.price}</p>
                        <p>{product.rating.rate}</p>
                        <button className='bg-green-600 hover:bg-green-400 text-white px-5 py-3 my-2' onClick={()=>{addToCart(product)}}>Add to Cart</button>
                    </div>
            </div>

        </>
    )
}


export default Card;