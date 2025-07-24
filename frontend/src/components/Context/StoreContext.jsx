import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";
export const StoreContext= createContext(null)

const StoreContextProvider=(props)=>{

    const [cartitems,setcartitems]=useState({});

    const addToCart =(itemId)=>{
        if (!cartitems[itemId])
        {
            setcartitems((prev)=>({...prev,[itemId]:1}))
        }
        else
        {
            setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

     const removeFromCart =(itemId)=>{
       
            setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
     
    }

    const getTotalCartAmount=()=>{
        let totamount=0;
        for(const item in cartitems)
        {
            if(cartitems[item]>0)
            {
                let iteminfo=food_list.find((product)=>product._id===item);
                totamount+=iteminfo.price*cartitems[item];
            }
        }
        return totamount;
    }
    const contextValue={
        food_list,
        cartitems,
        setcartitems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider