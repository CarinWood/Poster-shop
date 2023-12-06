import { ReactNode, createContext, useContext, useState } from "react";


type shoppingCartContext = {
    cart: cartItem[];
    setCart: React.Dispatch<React.SetStateAction<cartItem[]>>;
}

type cartProviderProps = {
    children: ReactNode
}

type cartItem = {
    id: number
    title: string
    img: string
    price: number
    quantity: number
}
const cartContext = createContext({} as shoppingCartContext)

export function useShoppingCart() {
    return useContext(cartContext)
}



export const CartProvider = ({children}: cartProviderProps) => {
        const [cart, setCart] = useState<cartItem[]>([])



  return (
    <cartContext.Provider
        value={{
          cart,
          setCart
        }}
    >
            {children}
    </cartContext.Provider>
  
  )
}
