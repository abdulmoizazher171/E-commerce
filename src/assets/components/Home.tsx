import Card from "./Card"
import Slider from './Slider.tsx';
import axios from "axios";
import { useEffect,useState } from "react";
interface productI {
   productId : string;
  productName: string;
  description : string;
  price: string;
  image: string;
}


interface productsI {
  
  images : imageI[];
  clickfav : any;
  clickcart : any;
}


interface imageI {
    image : string,
    caption : string
}




const Home = ({   images }: productsI) => {

  const [products, setProducts] = useState<productI[]>([
])

useEffect(()=>{
  axios.get("http://localhost:5184/api/products")
  .then((response)=>  setProducts(response.data))
},[])
console.log(products)
  return (
    <>
       <Slider images={images} />

    <div className="holder">


     

      {
        products.map((product: productI) => (<Card id={product.productId} name={product.productName} price={product.price} description= {product.description}  image={product.image} />))
      }



    </div>
    </>
  )
}

export default Home
