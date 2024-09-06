import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { useContext, useState } from "react"

const Navbar =()=>{
     const {count, setSearchByCategory, cartProducts, showUser, setShowUser } = useContext(ShoppingCartContext)
     
     
   
    
    let activeStyle= 'underline underline-offset-4'
    
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
             
                        shopi
           
                </li>
                <li>
                    <NavLink to= '/' onClick={()=> setSearchByCategory()} className={({isActive}) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/clothes' onClick={()=> setSearchByCategory('clothes')} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/electronics' onClick={()=> setSearchByCategory('electronics')} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/furnitures' onClick={()=> setSearchByCategory('furniture')} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/toys'onClick={()=> setSearchByCategory('toys')} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/others' onClick={()=> setSearchByCategory('miscellaneous')} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                      {showUser}
                </li>
                <li>
                    <NavLink to= '/my-orders' className={({isActive}) => isActive ? activeStyle : undefined}>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/my-account' className={({isActive}) => isActive ? activeStyle : undefined}>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/sign-in' className={({isActive}) => isActive ? activeStyle : undefined}>
                        Sign in
                    </NavLink>
                </li>
                <li className="flex gap-1">
                    
                        <ShoppingCartIcon className="size-6"/> 
                    
                    {cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

