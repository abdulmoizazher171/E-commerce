import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";

// interface productI {
//    id : string;
//   name: string;
//   price: string;
//   image: string;
//    description: string;
// }



// interface FavouriteI{
//   products : productI[];
//   favlist : string[];
//   onclick : any;

//}

const Favourite = () => {
//   const [products, setProducts] = useState<productI[]>([
// ])

// useEffect(()=>{
//   axios.get("http://localhost:5184/api/products")
//   .then((response)=>  setProducts(response.data))
// })
 
  return (
    <div className="holder">
     {/* {
       products.map((product) => ( favlist.includes(product.id)? <Card id={product.id} name={product.name} price={product.price} image={product.image} description={product.description} clickfav={() =>(onclick(product.id))} clickcart={""}/> : ""))
       
     } */}
    </div>
  )
}

export default Favourite
