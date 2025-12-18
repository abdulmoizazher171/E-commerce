
interface CustomerProfile {
  customerId: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  email: string;
  creditCard: string;
}

const TableRow = ({customerId , firstName , lastName , address , city , postalCode , email , creditCard} : CustomerProfile) => {
  return (
    

        <tr>
            <td>{customerId}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{address}</td>
            <td>{city}</td>
            <td>{postalCode}</td>
            <td>{email}</td>
            <td>{creditCard}</td>
        </tr>

      
    
  )
}

export default TableRow
