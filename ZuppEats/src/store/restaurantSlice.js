import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    'restaurantList':[],
    'menuList':null,
}

const restaurantSlice = createSlice(
    {
        name:'restaurant',
        initialState,
        reducers:{
            setRestaurantList(state,action){
                state.restaurantList = action.payload
            },
            setRestaurantById(state,action){
                // state.menuList = action.payload
                const {restId} = action.payload;
                state.menuList = state.restaurantList.find((restaurant)=>restaurant.$id == restId)
            }
        }
    }
)


export const  {setRestaurantList,setRestaurantById} = restaurantSlice.actions
export default  restaurantSlice.reducer