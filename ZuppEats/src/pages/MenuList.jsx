import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '../../../MegaBlog/src/components';
import { FcRating } from "react-icons/fc";
import { BiCycling } from "react-icons/bi";

function MenuList() {
    const { restId } = useParams();

    const restaurant = useSelector((state) => state.restaurant.restaurantList).find((restaurant)=>restId==restaurant.$id);
    const menu = restaurant.menu;
    return (
        <div className="bg-gray-100 min-h-screen">
            <Container className="p-8">
                <h1 className="text-3xl pl-5 font-bold mt-4">{restaurant.name}</h1>
                <div className="my-8 bg-white border border-gray-200 shadow-xl p-6 font-medium flex flex-col pl-14 gap-4 rounded-3xl">
                    <h1 className="font-bold">
                        <FcRating className="inline text-3xl text-green-400" /> {restaurant.rating} (10K+ Ratings)
                    </h1>
                    <h1>
                        Outlet <span className="font-light">{restaurant.location}</span>
                    </h1>
                    <h1 className="font-light">35-45 mins</h1>
                    <hr />
                    <p>
                        <BiCycling className="inline text-lg" /> Order above 149 to get free delivery
                    </p>
                </div>

                {menu && menu.length>0? (
                    <div>
                        {menu.map((menuItem)=>(
                            <MenuCard key={menuItem.$id} menuItem={menuItem} />
                        )
                        )}
                    </div>
                ):null}
            </Container>

            {console.log(restaurant)}
            {console.log(menu)}
        </div>
    );
}

export default MenuList;
