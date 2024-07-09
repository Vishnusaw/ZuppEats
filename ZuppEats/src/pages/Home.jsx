import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/container/Container';
import RestaurantCard from '../components/RestaurantCard';

export default function Home() {
  const restaurantList = useSelector((state) => state.restaurant.restaurantList);

  if (!restaurantList) {
    return (
      <Container className="min-h-10">
        <h1 className='text-center text-9xl font-bold p-14 my-8 min-h-10'>Loading...</h1>
      </Container>
    );
  }

  return (
    restaurantList.length > 0 ? (
      <div className="w-full bg-gray-100 p-10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {restaurantList.map(restaurant => (
              <RestaurantCard key={restaurant.$id} restaurant={restaurant} imageFile={restaurant.imageFile} />
            ))}
          </div>
        </Container>
      </div>
    ) : (
      <Container className="min-h-10">
        <h1 className='text-center text-5xl font-semibold p-14 my-8 min-h-10'>Sorry!! No Restaurant To Show .....</h1>
      </Container>
    )
  );
}


































// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRestaurantList } from '../store/restaurantSlice';
// import service from '../appwrite/restConfig';
// import Container from '../components/container/Container'
// import RestaurantCard from '../components/RestaurantCard';

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
  

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const restaurantList = await service.getRestaurants();
//         if (restaurantList) {
//           dispatch(getRestaurantList(restaurantList.documents));
//           console.log(restaurantList.documents);
//         }
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRestaurants();
//   }, [dispatch]);

//   const restaurantList = useSelector((state) => state.restaurant.restaurantList);

//   return loading?(
//     <Container className="min-h-10">
//       <h1 className='text-center text-9xl font-bold p-14 my-8 min-h-10 '>Loading...</h1>
//     </Container>
//   )  : (
//      restaurantList && restaurantList.length>0 ? (
//       <div className="w-full bg-gray-100 p-10">
//          <Container>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {
//                 restaurantList.map(restaurant=>(
//                   <RestaurantCard key={restaurant.$id} restaurant={restaurant} imageFile={restaurant.imageFile}/>
//                 ))
//               }
//             </div>
//         </Container>
//       </div>
     
//      ) :(
//       <Container className="min-h-10">
//       <h1 className='text-center text-5xl font-semibold p-14 my-8 min-h-10 '>Sorry!! No Restaurant To Show .....</h1>
//     </Container>
//      )
//   )
      

// }



























// import React, { useState } from 'react'
// import service from "../appwrite/restConfig"
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getRestaurantList } from '../store/restaurantSlice';

// export default function Home() {

//   const [loading,setLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(()=>{
    
//         service.getRestaurants()
//         .then((restaurantList)=>{
//           if(restaurantList){
//             dispatch(getRestaurantList(restaurantList.documents))
//             // console.log(restaurantList.documents);
//           }
//         }).finally(setLoading(false))
    
   
//   },[dispatch])

//   const restaurantList = useSelector((state)=>state.restaurant.restaurantList)

//   return (
//     <div>
//       Home
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         restaurantList && restaurantList.length > 0 ? (
//           restaurantList.map((restaurant) => (
//             <div key={restaurant.$id}>
//               <h2>{restaurant.name}</h2>
//               <p>{restaurant.description}</p>
//             </div>
//           ))
//         ) : (
//           <p>No restaurants found</p>
//         )
//       )}
//     </div>
//   );
// }
