import {useRoutes, BrowserRouter} from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NofFound'
import SignIn from '../SignIn'
import Navbar from '../../components/navbar/'
import CheckOutSideMenu from '../../components/CheckOutSideMenu'
import SignUp from '../SignUp'
import './App.css'

const AppRoutes=()=>{
  let routes = useRoutes([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/clothes',
      element:<Home/>
    },
    {
      path:'/electronics',
      element:<Home/>
    },
    {
      path:'/furnitures',
      element:<Home/>
    },
    {
      path:'/toys',
      element:<Home/>
    },
    {
      path:'/others',
      element:<Home/>
    },
    {
      path:'/my-account',
      element:<MyAccount/>
    },
    {
      path:'/my-order',
      element:<MyOrder/>
    },
    {
      path:'/my-orders',
      element:<MyOrders/>
    },
    {
      path:'/sign-in',
      element:<SignIn/>
    },
    {
      path:'/sign-up',
      element:<SignUp/>
    },
    {
      path:'/my-orders/:id',
      element:<MyOrder/>
    },
    {
      path:'/*',
      element:<NotFound/>
    },
  ])

  return routes
}

const App = () => {
  
  return (

    <ShoppingCartProvider>
          <BrowserRouter>
            <AppRoutes/>
            <Navbar />
            <CheckOutSideMenu/>
          </BrowserRouter>
          
    </ShoppingCartProvider>

  
  )
}

export default App
