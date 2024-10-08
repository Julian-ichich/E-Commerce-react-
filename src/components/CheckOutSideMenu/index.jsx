import { useContext } from "react"
import { Link } from "react-router-dom"
import "./style.css"
import {XCircleIcon} from '@heroicons/react/24/solid'
import { totalPrice } from "../../Utils"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"
const CheckOutSideMenu =()=>{
    const{
        closeCheckOutSideMenuOpen,
        checkOutSideMenuOpen,
        cartProducts,
        setCartProducts,
        setOrder,
        order,
        setSearchByTitle,
        SobrePrecio,
        setSobrePrecio,
        setCantidadProductoTotal,
        cantidadProductoTotal
    }=useContext(ShoppingCartContext)

    let datos = [...cartProducts]  
 
    const handleDelete =(id)=>{
        const filteredProducts = datos.filter(product => product.id !== id)
        setCartProducts(filteredProducts)
    }

    const aumentarProducto =(id)=>{
        datos.forEach(product => {
           if( product.id === id){
            product.contadorProducto += 1
           }
        
        })

        setCartProducts(datos)   
    }

   
    const disminuirProducto =(id)=>{
        datos.forEach(product => {
            if( product.id === id){
            product.contadorProducto -= 1 
            }
         
         })

        setCartProducts(datos)
         
    }

    const handleCheckout =()=>{
        const orderToAdd ={
            date:'01.02.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts) + SobrePrecio,
            
        }

        datos = []
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setSearchByTitle('')
        setSobrePrecio(0)
        setCantidadProductoTotal([])
        

    }

    return(
        <aside className={`${checkOutSideMenuOpen ? "flex" : "hidden"} check-out-side-menu overflow-y-scroll flex-col fixed  right-0 border border-black rounded bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-semibold text-xl">My order</h2>
                <div><XCircleIcon className="text-black size-7 cursor-pointer" onClick={()=>closeCheckOutSideMenuOpen()}/></div>
                
            </div>

            <div className="px-6 pb-32">
            {
                cartProducts.map(product =>(<OrderCard id={product.id} handleDelete ={handleDelete } key={product.id} title={product.title} price={product.price} imageUrl={product.images} contadorProducto ={product.contadorProducto} aumentarProducto={()=>aumentarProducto(product.id)} disminuirProducto={()=>disminuirProducto(product.id)} />))
            }
            </div>

            <div className="px-6 bg-white fixed bottom-0 w-96 pe-15">
                <p className="flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold text-2xl">${totalPrice(cartProducts) + SobrePrecio}</span>
                </p>
                
                <Link to={'./my-orders/last'}>
                <button onClick={()=> handleCheckout()} className="bg-black text-white py-4 my-4 w-full rounded-lg">
                    CheckOut
                </button>
                </Link>
               
            </div>
        </aside>
    )
}

export default CheckOutSideMenu