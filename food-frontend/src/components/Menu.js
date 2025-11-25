import {useEffect,useState,useContext} from "react";
import {CartContext} from "../context/CartContext";
import {Link} from "react-router-dom";

function Menu()
{
    const[items,setItems]=useState([]);
    const{addToCart}=useContext(CartContext);
    useEffect(()=>
    {
        fetch("http://127.0.0.1:8000/api/items/")
        .then(res=>res.json())
        .then(data=>setItems(data));
    },[]);
    return(
        <div>
            <h1>Menu</h1>
            <Link to="/cart">Go to Cart</Link>
            <div>
            {items.map(item=>
                (
                    <div key={item.id} style={{border:"1px solid #ccc",margin:10,padding:10}}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={()=> addToCart(item)}>Add To Cart</button>
                    </div>
                )
            )}
            </div>


        </div>
    );
}
export default Menu;