import React from "react";
import {Link,NavLink} from "react-router-dom"



function Header(){
    return(
        <header>
            <nav className="bg-white text-red-600 px-6 py-2.5 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                <div className="logo font-bold text-4xl ">
                    <Link to='#'>
                        Shohpse
                    </Link>
                </div>
                <ul className="flex space-x-6 font-medium text-lg">
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='category'>
                            Categories
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>
                            Cart
                        </NavLink>
                    </li>
                </ul>

                </div>
            </nav>

        </header>
    )
}

export default Header;