import React, { useEffect, useState } from 'react';
import service from '../appwrite/restConfig';
import {Link} from 'react-router-dom'

function RestaurantCard({ restaurant, imageFile }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = await service.getFilePreview(imageFile);
        if (url) {
          setImageUrl(url);
        } else {
          console.log('No file');
        }
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };

    fetchImageUrl();
  }, [imageFile]);

  return (
    <Link to={`restaurant/${restaurant.$id}`}>
    
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative h-1/2 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={restaurant.name} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <span>Loading...</span>
          </div>
        )}
      </div>
      <div className="p-4 h-1/2">
        <h2 className="text-xl font-bold mb-1 text-gray-800">{restaurant.name}</h2>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927a1 1 0 011.902 0l1.5 3.034a1 1 0 00.75.546l3.337.486a1 1 0 01.554 1.706l-2.416 2.356a1 1 0 00-.287.885l.569 3.317a1 1 0 01-1.45 1.054L10 14.347l-2.98 1.566a1 1 0 01-1.45-1.054l.57-3.317a1 1 0 00-.287-.885l-2.416-2.356a1 1 0 01.554-1.706l3.336-.486a1 1 0 00.75-.546l1.5-3.034z" />
            </svg>
          </span>
          <span className="ml-1 text-gray-700">{restaurant.rating}</span>
        </div>
        <p className="text-gray-600">{restaurant.location}</p>
      </div>
    </div>
    </Link>
  );
}

export default RestaurantCard;


// import React, { useEffect } from 'react'
// import service from '../appwrite/restConfig';

// function RestaurantCard({restaurant,imageFile}) {
//     useEffect(()=>{
//         service.getFilePreview(imageFile)
//         .then(imageUrl=>{
//             if(imageUrl){
//                 console.log(imageUrl);
//             }else{
//                 console.log("Nofile");
//             }
//         })
//     },[])
   
//     return (
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
//           <div className="relative pb-1/2">
//           <img src={service.getFilePreview(imageFile)} alt={restaurant.name}className='rounded-xl' />
//             {/* <img src={service.getFilePreview(imageFile)} alt={restaurant.name} className="absolute h-full w-full object-cover" /> */}
//           </div>
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-1 text-gray-800">{restaurant.name}</h2>
//             <div className="flex items-center mb-2">
//               <span className="text-yellow-500">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M9.049 2.927a1 1 0 011.902 0l1.5 3.034a1 1 0 00.75.546l3.337.486a1 1 0 01.554 1.706l-2.416 2.356a1 1 0 00-.287.885l.569 3.317a1 1 0 01-1.45 1.054L10 14.347l-2.98 1.566a1 1 0 01-1.45-1.054l.57-3.317a1 1 0 00-.287-.885l-2.416-2.356a1 1 0 01.554-1.706l3.336-.486a1 1 0 00.75-.546l1.5-3.034z" />
//                 </svg>
//               </span>
//               <span className="ml-1 text-gray-700">{restaurant.rating}</span>
//             </div>
//             <p className="text-black-600">{restaurant.location}</p>
//           </div>
//         </div>
//       );
// }

// export default RestaurantCard