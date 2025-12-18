import Button from "./Button";
import Row from "./Row";
interface productI{
    name : string;
    price: string;
    image : string;
}

const Card = ( {name  , price , image} : productI) => {
  return (
    <div className="products">
        <h3>{name}</h3>
        <p>{price}</p>
        <img src= {image} alt="" />
        
        <Row>
        <Button onclick={""} icon={<span style={{ color: "red", fontSize: "20px" }}>❤️</span>}></Button>
        <Button onclick={''}  icon={<span style={{ color: "black", fontSize: "20px" }}>❌</span>}></Button>
      </Row>
       
        
    </div>
  )
}

export default Card
