import { useContext } from "react"
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"
import { ShoppingCartContext } from "../../Context"


function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = ()=>{
  
    if(context.filteredItems?.length > 0){

        return (
          context.filteredItems?.map((item)=>(
            <Card key={item.id} data={item} />
          ))
     
        )
      }else{
        return(
          <div className="animate-bounce w-96">we dont have anything!!</div>
        )
      }
      }
      
      return (
        <Layout>
          <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
          </div>
          <input onChange={(event)=> context.setSearchByTitle(event.target.value.trim())} type="text" placeholder="search a product" className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" />

          <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
          {

           renderView()
          }

          </div>
         <ProductDetail/>
        
        </Layout>
    )
  }

  export default Home