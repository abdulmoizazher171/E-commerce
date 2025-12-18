import Card from "./Card"
import Slider from './Slider.tsx';
interface productI {
   id : string;
  name: string;
  price: string;
  image: string;
}


interface productsI {
  products: productI[];
  images : imageI[];
  clickfav : any;
  clickcart : any;
}


interface imageI {
    image : string,
    caption : string
}

// interface imagesI {
//     images : imageI[];
// }



const Home = ({  products , images , clickfav , clickcart}: productsI) => {
  return (
    <>
       <Slider images={images} />

    <div className="holder">


     

      {
        products.map((product: productI) => (<Card id={product.id} name={product.name} price={product.price} image={product.image} clickfav={clickfav} clickcart={clickcart}></Card>))
      }



    </div>
    </>
  )
}

export default Home
