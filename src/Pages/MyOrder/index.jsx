import { useContext } from "react"
import Layout from "../../components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../components/OrderCard"
import { Link } from "react-router-dom"
import {ChevronLeftIcon} from '@heroicons/react/24/solid'

function MyOrder() {
const {order}= useContext(ShoppingCartContext)
const currentPath = window.location.pathname
let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

if(index === 'last') index = order?.length - 1



    return (
      <Layout>
        <div className="flex w-80 items-center justify-center relative mb-6">
          <Link to={'/my-orders/'} className="absolute left-0">
              <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          <h1>myOrder</h1>
        </div>
      
        <div className="flex flex-col px-6 pb-32 w-96">
            {
                order?.[index]?.products.map(product =>(
                <OrderCard
                id={product.id} 
                key={product.id}
                title={product.title} 
                price={product.price} 
                imageUrl={product.images}
                />))
            }        
        </div>
          
          
      </Layout>
    )
  }
  
  export default MyOrder