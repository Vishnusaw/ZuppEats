import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';
import { FaSearch, FaRegUser } from "react-icons/fa";
import { MdOutlineAddBusiness } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";

import Container from '../container/Container';
import LogoutBtn from './LogoutBtn';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const userData = useSelector((state) => state.auth.userData);

    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 py-4 shadow bg-gray-50">
            <Container>
                <nav className="flex items-center justify-between">
                    <Link to="/" className="flex items-center py-5 px-2 text-gray-700">
                        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                        <span className="font-bold text-xl text-orange-500">ZuppEats</span>
                    </Link>

                    <ul className="flex space-x-6 items-center">
                        <li>
                            <button
                                onClick={() => navigate("/business")}
                                className="flex items-center px-4 py-2 duration-200 hover:text-orange-600 rounded-full"
                            >
                                <MdOutlineAddBusiness className="mr-2" />
                                Zupp Corporate
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate("/search")}
                                className="flex items-center px-4 py-2 duration-200 hover:text-orange-600 rounded-full"
                            >
                                <FaSearch className="mr-2" />
                                Search
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate("/help")}
                                className="flex items-center px-4 py-2 duration-200 hover:text-orange-600 rounded-full"
                            >
                                <IoHelpBuoyOutline className="mr-2" />
                                Help
                            </button>
                        </li>
                        {authStatus ? (
                            <li>
                                <button
                                    onClick={() => navigate("/profile")}
                                    className="flex items-center px-4 py-2 duration-200 hover:text-orange-600 rounded-full"
                                >
                                    <FaRegUser className="mr-2" />
                                    {userData.name}
                                </button>
                            </li>
                        ) : (
                            <li>
                                <button
                                    onClick={() => navigate("/login")}
                                    className="flex items-center px-4 py-2 duration-200 hover:text-orange-600 rounded-full"
                                >
                                    <FaRegUser className="mr-2" />
                                    Sign in
                                </button>
                            </li>
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;


// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../assets/logo.png'
// import { useSelector } from 'react-redux';
// import { FaSearch,FaRegUser } from "react-icons/fa";
// import { MdOutlineAddBusiness } from "react-icons/md";
// import { IoHelpBuoyOutline } from "react-icons/io5";

// import Container from '../container/Container';
// import LogoutBtn from './LogoutBtn';



// function Header() {

//     const authStatus = useSelector((state)=>state.auth.status);
//     const userData = useSelector((state)=>state.auth.userData);

   

//     const navigate = useNavigate();

//     const navItems = [
//         {
//             name:'Business',
//             slug:'/business',
//             active:true
//         },

//         {
//             name:'Search',
//             slug:'/search',
//             active:true
//         },

//         {
//             name:'',
//             slug:'/business',
//             active:true
//         },

//     ]

//     return (

//         <header className='py-3 shadow bg-gray-50'>
//             <Container>
//                 <nav className="flex justify-around">
//                     <div className="logo">
//                     <Link to="/" className="flex items-center py-5 px-2 text-gray-700">
//                                <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
//                            <span className="font-bold text-xl text-orange-500">ZuppEats</span>
//                    </Link>
//                     </div>


//                     <ul className='flex ml-auto'>


//                         <li><button onClick={()=>navigate("/business")}
//                                 className='inline-block px-6 py-2 duration-200
//                                 hover:text-orange-600 rounded-full gap-10'><MdOutlineAddBusiness className='inline-block ' /> Zupp Corporate</button>
//                         </li>

//                         <li><button onClick={()=>navigate("/search")}
//                             className='inline-block px-6 py-2 duration-200
//                             hover:text-orange-600 rounded-full gap-8'><FaSearch className='inline-block '/>Search</button>
//                         </li>

//                         <li><button onClick={()=>navigate("/help")}
//                             className='inline-block px-6 py-2 duration-200
//                             hover:text-orange-600 rounded-full gap-8'><IoHelpBuoyOutline className='inline-block '/>Help</button>
//                         </li>


                        
//                     {
//                             authStatus? 
//                                 (<li><button onClick={()=>navigate("/profile")}
//                                 className='inline-block px-6 py-2 duration-200
//                                 hover:text-orange-600 rounded-full gap-8'><FaRegUser className='inline-block '/>{userData.name}</button>
//                                 </li>):
//                                 (<li><button onClick={()=>navigate("/login")}
//                                 className='inline-block px-6 py-2 duration-200
//                                 hover:text-orange-600 rounded-full gap-8'><FaRegUser className='inline-block '/>Sign in</button>
//                             </li>)
//                         }
                         

                        
                       
//                         {authStatus && (
//                         <li><LogoutBtn/></li>
//                     )}

//                     </ul>
//                 </nav>
                
//             </Container>

//         </header>

        
//     );


// }

// export default Header

