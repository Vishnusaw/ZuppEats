import { useEffect, useState } from 'react'
import './App.css'
import Signup from './components/Signup'
import { Outlet } from 'react-router-dom'
import { Header } from './components/index'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import Footer from './Footer/Footer'
import { setRestaurantList } from './store/restaurantSlice'
import service  from './appwrite/restConfig'

function App() {
  const [loading,setLoading] = useState(true);

  const dispatch = useDispatch();
  const userData = useSelector((state)=>state.auth.userData);

  useEffect(()=>{
      authService.getCurrentUser()
        .then((userData)=>{
            if(userData){
              dispatch(login(userData))
            }else{
              dispatch(logout())
            }
        });
        // .finally(()=>setLoading(false)
  },
  
  [])

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurantList = await service.getRestaurants();
        if (restaurantList) {
          dispatch(setRestaurantList(restaurantList.documents));
          console.log(restaurantList.documents);
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [dispatch]);



  return !loading? ( 
   <div className='w-full'>
     
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
   </div>
  ):null;
}

export default App
