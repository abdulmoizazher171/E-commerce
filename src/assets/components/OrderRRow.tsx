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
  return (
    <tr>
        <td>{orderId}</td>
        <td>{customer.firstName + customer.lastName}</td>
        <td>{product.price}</td>
        <td>{orderDate}</td>
    </tr>
  )
}

export default OrderRRow
