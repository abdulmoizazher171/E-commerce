import axios from "axios";
import { useEffect, useState } from "react";
import OrderRRow from "./OrderRRow";


const Order = () => {

  
    const [Orders , setOrder] = useState([]);


    useEffect(()=>{
        
        console.log("object")
        axios.get("http://localhost:5184/order/all")
        .then((response)=> (setOrder(response.data)))
        console.log(Orders)
    },[])
      
  return (
    <div>
            <table className="order-table">
              <tr>
                <th>Product Name</th>
                <th>Customer Name</th>
                <th>Price</th>
                <th>Order Date</th>
              </tr>
              {Orders.map(
                
                (Order : any)=> (
                  
                <OrderRRow orderId={Order.orderId} orderDate={Order.orderDate} product={Order.product} customer={Order.customer}/>))}

            </table>
    </div>
  )
}

export default Order
