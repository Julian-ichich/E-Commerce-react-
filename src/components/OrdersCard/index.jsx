import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { BanknotesIcon } from '@heroicons/react/24/solid'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
   const { totalPrice, totalProducts } = props

   return (
      <div className="flex justify-between items-center  border border-black w-80 p-4 rounded-lg mb-4 shadow-2xl bg-orange-300">

         <div class=" w-48 h-56 rounded-lg">
            <div class="flex p-2 gap-1">
               <div class="">
                  <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
               </div>
               <div class="circle">
                  <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
               </div>
               <div class="circle">
                  <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
               </div>
            </div>
            <div class="card__content w-72 h-52">
               <div className=' justify-between w-full '>
                  <span className='flex flex-col w-full gap-5 mb-10'>
                  
                     <span className='text-5xl flex'> <CalendarDaysIcon className='w-10 h-10 me-2' /> 01.02.23</span>
                     <span className='font-semibold text-4xl flex'><ShoppingBagIcon className='w-10 h-10 me-2'/> {totalProducts} articles </span>

                  </span>
                  <span className='font-bold text-4xl flex'><BanknotesIcon className='w-10 h-10 me-2'/>${totalPrice} <ChevronDoubleRightIcon className='w-10 h-10 ms-20'/></span>
                  
               </div>
            </div>
         </div>
      </div>




   )
}

export default OrdersCard