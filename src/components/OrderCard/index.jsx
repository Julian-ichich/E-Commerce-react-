import { SparklesIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { MinusCircleIcon } from '@heroicons/react/24/solid'
import { useState, useContext } from 'react'
import { ShoppingCartContext } from "../../Context"

const OrderCard = props => {
    const { id, title, imageUrl, price, contadorProducto,  handleDelete, aumentarProducto, disminuirProducto } = props
    
    const {cartProducts, SobrePrecio, setSobrePrecio}= useContext(ShoppingCartContext)  
  
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XCircleIcon className="text-black size-7 cursor-pointer" onClick={() => handleDelete(id)} />
    }

   

    const RenderCantidad = () => {

        const [cantidadProducto, setCantidadProducto] = useState(1)
        
        const agregarMasProducto = () => {
            setCantidadProducto(cantidadProducto + 1)
            setSobrePrecio(SobrePrecio + price)
            aumentarProducto()
         
        }

        const decrementarProducto = () => {
            if (cantidadProducto > 1) {
                setCantidadProducto(cantidadProducto - 1)
                setSobrePrecio(SobrePrecio - price)
               disminuirProducto()
            }
        }

    
        if (cartProducts.length > 0 ) {
            return (
                <div className='size-7'>
                    <PlusCircleIcon onClick={() => agregarMasProducto()} className='text-blue-500' />
                    <span className='ps-2'>{cantidadProducto}</span>
                    <MinusCircleIcon onClick={() => decrementarProducto()} className='text-red-500' />
                </div>
            )

        } else {
            return (
                <div className='w-20 flex flex-col border border-black rounded-lg h-20'>
                   <span className='text-red-600'>
                    Cantidad Producto:
                   </span>
                   <span>
                   { 
                    contadorProducto
                   }
                   </span>
                </div>
            )
        }
    }


    return (
        <div className='flex'>

            <div className="flex justify-between items-center mb-3 border border-black rounded-xl pe-6 w-96">
                <div className='flex items-center gap-2'>
                    <figure className='w-20 h-20'>
                        <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                    </figure>
                    <p className='text-sm font-light'>
                        {title}
                    </p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-lg font-medium'>
                        ${price}
                    </p>

                    {renderXMarkIcon}
                </div>


            </div>

            <div>
                {RenderCantidad()}
            </div>


        </div>

    )
}

export default OrderCard