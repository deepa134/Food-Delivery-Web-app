import {createContext,useState,useEffect} from "react";
export const CartContext=createContext();
export function CartProvider({children})
{
    const [cart,setCart]=useState(()=>
    {
        const saved=localStorage.getItem("cart");
        return saved?JSON.parse(saved):[];
    });

    useEffect(()=>
    {
        localStorage.setItem("cart",JSON.stringify(cart));

    },[cart]);

    const addToCart=(item)=>
    {
        setCart(prev=>
        {
            const  exists=prev.find(i=>i.id===item.id);

            if(exists)
            {
                return prev.map(i=>i.id===item.id ?{...i,quantity:i.quantity+1}:i);
            }
            return [...prev,{...item,quantity:1}];
        }
        );
    };

    // Decrease quantity safely
    const decreaseQuantity = (id) => {
    setCart(prev =>
        prev
        .map(item => {
            if (item.id === id) {
            const newQty = item.quantity - 1;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
        })
        .filter(item => item !== null) // remove items with 0 quantity
    );
    };

    const removeFromCart=(id)=>
    {
        setCart(prev=>prev.filter(item=>item.id!==id));
    };
    return (
        <CartContext.Provider value={{cart,setCart,addToCart,decreaseQuantity,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );



}