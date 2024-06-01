import React, { useState } from "react";
import { useProduct } from "../../contexts";
import Card from "../Cards/Card";

export default function Home(){
    const {products} = useProduct();
    const [sortBy,setSortBy] = useState('default');

    const handleFilterBy = (text) =>{
      setSortBy(text);
    }


    const sortedProducts = [...products].sort((a,b)=>{
      if(sortBy==="priceHigh"){
        return a.price-b.price;
      }else if(sortBy==="priceLow"){
        return b.price-a.price;
      }else if(sortBy ==="ratingHigh"){
        return b.rating.rate-a.rating.rate
      }else if(sortBy==="default"){
        return;
      }
    });
    return(
        <div className='container mx-5 py-8 px-5 overflow-hidden' >
        <h1 className='text-4xl font-medium mb-8'>Top trending products on shopse </h1>

        <div className="flex flex-wrap gap-3 px-5 mb-8">
          <h2 className="mr-3 text-lg font-bold text-red-500"> Sort By: </h2>

          <input type="radio" name="filterBy" id="relevent" value="default" checked={sortBy==="default"} onChange={(e)=>{handleFilterBy(e.target.value)}}  />
          <label htmlFor="relevent">Relevent To You</label>

          <input type="radio" name="filterBy" id="priceLow" value="priceLow" onChange={(e)=>{handleFilterBy(e.target.value)}}/>
          <label htmlFor="priceLow"> Price (low to high)</label>

          <input type="radio" name="filterBy" id="priceHigh" value="priceHigh" onChange={(e)=>{handleFilterBy(e.target.value)}}  />
          <label htmlFor="priceHigh">Price (high to low)</label>

          <input type="radio" name="filterBy" id="ratingHigh" value="ratingHigh" onChange={(e)=>{handleFilterBy(e.target.value)}}  />
          <label htmlFor="ratingHigh">Rated (High to Low) </label>
          
        </div>
        <div className='grid grid-cols-4 grid-flow-row gap-5 max-w-screen-xl mx-auto'>
          {sortedProducts.map(product => (
            <Card className='hover:' key={product.id} product={product} />
          ))}
        </div>
        </div>
    )
}