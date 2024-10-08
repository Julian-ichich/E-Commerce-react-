import { useContext } from "react"
import { ShoppingCartContext} from "../../Context"
import { PlusIcon } from "@heroicons/react/24/solid"
import { CheckCircleIcon} from '@heroicons/react/24/solid'

const Card =({data})=>{
    const context= useContext(ShoppingCartContext)

    const showProduct=(productDetail)=>{
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckOutSideMenuOpen()
    }

    const addProductsToCard=(event, productData)=>{
        event.stopPropagation()
        productData.contadorProducto = 1
        context.setCartProducts([...context.cartProducts, productData])
        context.setCount(context.count+1)
        context.closeProductDetail()
        context.openCheckOutSideMenuOpen()
       
    }

    const renderIcon=(id)=>{
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if(!isInCart){
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                onClick={(event)=> addProductsToCard(event, data)}>
                    <PlusIcon />
                </div>
            )
        }else{
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 p-1">
                    < CheckCircleIcon  className="bg-black"/>
                </div>
            )

        }

       
    }


    return(
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={()=> showProduct(data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black  text-xs m-2 px-3 py-0.5">{data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt={data.title} />
                { renderIcon(data.id) }
            </figure>
            <p className=" flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-semibold">{`$${data.price}`}</span>
            </p>
            
        </div>
    )
}

export default Card