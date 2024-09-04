import { useContext } from "react"
import "./style.css"
import {XCircleIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
const ProductDetail =()=>{
    const{
        isDetailProductOpen,
        closeProductDetail,
        productToShow
    }=useContext(ShoppingCartContext)



    return(
        <aside className={`${isDetailProductOpen ? "flex" : "hidden"} product-detail flex-col fixed overflow-y-scroll right-0 border border-black rounded bg-white`}>
            <div className="flex justify-between items-center p-6 ">
                <h2 className="font-semibold text-xl">Detail</h2>
                <div><XCircleIcon className="text-black size-7 cursor-pointer" onClick={()=>closeProductDetail()}/></div>
            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg" src={productToShow.images?.[0]} alt={productToShow.titulo} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-semibold text-2xl">
                   Precio de ${productToShow.price} 
                </span> <br/>
                <span className="font-semibold text-md">
                    {productToShow.title}
                </span> <br/>
                <span className="font-medium text-sm">
                    Detalles: {productToShow.description}
                </span>
            </p>
        </aside>
    )
}

export default ProductDetail