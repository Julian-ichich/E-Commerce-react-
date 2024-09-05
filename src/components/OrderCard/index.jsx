import {XCircleIcon} from '@heroicons/react/24/solid'
const OrderCard= props =>{
    const {id, title, imageUrl, price, handleDelete} = props

    let renderXMarkIcon
    if(handleDelete){
        renderXMarkIcon = <XCircleIcon  className="text-black size-7 cursor-pointer" onClick={()=> handleDelete(id)}/>
    }

 return(
    <div className="flex justify-between items-center mb-3 border border-black rounded-xl pe-6">
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
 )
}

export default OrderCard