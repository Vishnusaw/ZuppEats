import React, { useEffect, useState } from "react";
import { useProduct } from "../../contexts";
import CartCard from "../Cards/CartCard";



function Cart() {

    const { cartItems } = useProduct();
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(totalPrice);

    useEffect(() => {
        let val = 0;
        cartItems.map((item) => {
            val += item.price * item.qty;
        })
        val = val.toFixed(2);
        setTotalPrice(val);

    }, [cartItems]);

    return (
        <div className="flex flex-wrap">
    <div className="mx-25 p-10 overflow-hidden w-full md:w-8/12">
        <h1 className="text-3xl font-bold text-red-600 mb-5">Your Cart Items</h1>
        <div className="grid gap-5">
            {cartItems.map((product) =>
                <CartCard product={product} key={product.id} />)
            }
        </div>
    </div>
    <div className="w-full md:w-4/12 px-14 mt-20 shadow-xl flex flex-col h-auto">
        <div className="flex flex-col mb-3 pb-3 gap-2 border-b border-gray-500">
            <div>Order To Pay: ${totalPrice}</div>
            <div className="line-through text-gray-600">Delivery Charges : $49</div>
        </div>
        <div>Total Sum : ${totalPrice}</div>
        <button className='bg-green-600 text-white px-5 py-3 my-2'>Proceed to Buy</button>
    </div>
</div>


    )
}

export default Cart;
