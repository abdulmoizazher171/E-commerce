import axios from "axios"
import { useEffect, useState } from "react"
import TableRow from "./TableRow";
import { Button } from "@/components/ui/button"
const Customers = () => {

    const [customers , setcustomers] = useState([]);


    useEffect(()=>{
        
        console.log("object")
        axios.get("http://localhost:5184/customer/all")
        .then((response)=> (setcustomers(response.data)))
    },[])
console.log(customers)
    

    return (
        <div>
           <table className="table">
            <tr>
            <th>Id</th>
            <th>first name</th>
            <th>Last name</th>
            <th>Address</th>
            <th>City</th>
            <th>Postal code</th>
            <th>Email</th>
            <th>Cerdit Card</th>
            
            </tr>
            {customers.map((customer: any)=> (<TableRow customerId={customer.customerId} firstName={customer.firstName} lastName={customer.lastName} address={customer.address} city={customer.city} postalCode={customer.postalCode} email={customer.email} creditCard={customer.creditCard}/>))}
           </table>
  

          
         
         
        </div>
    )
}

export default Customers
