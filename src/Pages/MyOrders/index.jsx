import { useContext } from "react"
import Layout from "../../components/Layout"
import OrdersCard from "../../components/OrdersCard"
import {ChevronLeftIcon} from '@heroicons/react/24/solid'

import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

function MyOrders() {
  const {order}= useContext(ShoppingCartContext)

    return (
      <Layout>
    
        <div className="flex w-80 items-center justify-center relative">
          <h1 className="mb-6 fonx">myOrder</h1>
        </div>

        {

          order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
            </Link>

          ))

        }

      </Layout>
    )
  }
  
  export default MyOrders