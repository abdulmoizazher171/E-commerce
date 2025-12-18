import Button from "./Button";
import Row from "./Row";
interface productI{
    id : string;
    name : string;
    price: string;
    description: string;
    image : string;
    clickfav : any;
    clickcart : any;
}

const Card = ( {id ,name  , price, description, image , clickcart ,clickfav} : productI) => {
  
  return (
    <div className="products" key={id}>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <img src= {image} alt="" />
        
        <Row>
        <Button onclick={() =>{clickfav(id)}} icon={<span style={{ color: "red", fontSize: "20px" }}>❤️</span>}></Button>
        <Button onclick={() =>{clickcart(id)}}  icon={<span style={{ color: "black", fontSize: "20px" }}>❌</span>}></Button>
      </Row>
       
        
    </div>
  )
}

export default Card
