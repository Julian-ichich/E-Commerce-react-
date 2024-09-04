import {XCircleIcon} from '@heroicons/react/24/solid'
const OrdersCard= props =>{
    const {totalPrice, totalProducts} = props

 return(
    <div className="flex justify-between items-center  border border-black w-80 p-4 rounded-lg mb-4 shadow-2xl">
      <div className=' justify-between w-full'>
         <span className='flex flex-col'>
            <span>01.02.23</span>
            <span className='font-semibold'>{totalProducts} articles </span>

        </span>
        <span className='font-bold'>${totalPrice}</span>
     </div>
    </div>
 )
}

export default OrdersCard