import React from "react";
import { createContext, useState , useEffect } from "react";




export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    
    const [isDetailProductOpen, setIsDetailProductOpen] = useState(false)
    
    const openProductDetail =()=> setIsDetailProductOpen(true)
    const closeProductDetail=()=> setIsDetailProductOpen(false)
    
    const [checkOutSideMenuOpen, setCheckOutSideMenuOpen] = useState(false)
    
    const openCheckOutSideMenuOpen=()=> setCheckOutSideMenuOpen(true)
    const closeCheckOutSideMenuOpen=()=> setCheckOutSideMenuOpen(false)

    
    
    const [productToShow, setProductToShow] = useState({})
    const [cartProducts, setCartProducts] = useState([])
    const [count, setCount] = useState(cartProducts.length)
    
    
    const [order, setOrder] = useState([])
    const [searchByTitle, setSearchByTitle] = useState(null)
    const [searchByCategory, setSearchByCategory] = useState(null)
    
    const [items, setItems] = React.useState(null)
    const [filteredItems, setFilteredItems] = React.useState(null)
    
    useEffect(()=>{
      fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => setItems(data))
    }, [])
 
    const filteredItemsByTitle = (items, searchByTitle)=>{
        return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()) )
    }

    const filteredItemsByCategory = (items, searchByCategory)=>{
        return items?.filter((item) => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()) )
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory)=>{
        
        
        if(searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchByTitle)
        }
        
        if(searchType === 'BY_CATEGORY'){
            
            return filteredItemsByCategory(items, searchByCategory)
        }
        
        if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if(!searchType){
            return items
        }

    }

    useEffect(()=>{

        if(searchByTitle && searchByCategory){
            setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items, searchByTitle, searchByCategory))
        }
        if(searchByTitle && !searchByCategory){
            setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchByCategory))
        }
        if(!searchByTitle && searchByCategory){
            setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory))
        }
        if(!searchByTitle && !searchByCategory){
            setFilteredItems(filterBy(null ,items, searchByTitle, searchByCategory))
        }

       

      }, [items, searchByTitle, searchByCategory])
   

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isDetailProductOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            checkOutSideMenuOpen,
            openCheckOutSideMenuOpen,
            closeCheckOutSideMenuOpen,
            order,
            setOrder,
            items,
            setItems,
            setSearchByTitle,
            searchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}