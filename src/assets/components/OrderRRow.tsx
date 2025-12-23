 interface ProductI {
  productId: number;
  productName: string;
  description: string;
  price: string;
}

 interface CustomerI {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
}

 interface OrderI {
  orderId: number;
  orderDate: string; // ISO Date strings are handled as strings in TS
  product: ProductI;
  customer: CustomerI;
}



const OrderRRow = ({orderId , orderDate , product , customer} : OrderI) => {

  const formattedDate = new Date(orderDate).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
});
  return (

    
    <tr>
        <td>{orderId}</td>
        <td>{customer.firstName + customer.lastName}</td>
        <td>{product.price}</td>
        <td>{formattedDate}</td>
    </tr>
  )
}

export default OrderRRow
