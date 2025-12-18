import Card from "./Card";

interface productI {
   id : string;
  name: string;
  price: string;
  image: string;
}



interface FavouriteI{
  products : productI[];
  favlist : string[];
  onclick : any;

}

const Favourite = ({products , favlist , onclick } : FavouriteI) => {
  
 
  return (
    <div className="holder">
     {
       products.map((product) => ( favlist.includes(product.id)? <Card id={product.id} name={product.name} price={product.price} image={product.image} clickfav={() =>(onclick(product.id))} clickcart={""}/> : ""))
       
     }
    </div>
  )
}

export default Favourite
