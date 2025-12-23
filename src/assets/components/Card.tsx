// import Button from "./Button";
import { Button } from "@/components/ui/button"
import axios from "axios";
//import console from "console";
import { useEffect, useState } from "react";

// import Row from "./Row";
interface productI {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;

}

interface customerI {
  customerId: string,
  firstName: string,
  lastName: string,
  email: string

}

const Card = ({ id, name, price, description, image }: productI) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState("");
  const [customers, setcustomers] = useState<customerI[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5184/customer/all")
      .then((response) => setcustomers(response.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleBuyClick = (productId: string) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleOrderSubmit = async () => {


    console.log("Current selectedCustomerId state:", selectedCustomerId);

    if (!selectedProductId || !selectedCustomerId || selectedCustomerId === "") {
      alert("Please select a valid customer.");
      return;
    }


    console.log(selectedCustomerId);
    const pId = Number(selectedProductId);
    const cId = Number(selectedCustomerId);

    const orderData = {
      CustomerId: cId,
      ProductId: pId,
      PaymentId: 2,
      OrderDate: new Date().toISOString()
    };

    const api = axios.create({
      baseURL: 'http://localhost:5184',
      headers: { 'Content-Type': 'application/json' }
    });

    try {


      const response = await api.post('/order', orderData);

      console.log("Success!", response.data);
      alert("Product saved!");
    } catch (error: any) {

      if (error.response) {
        console.error("Backend Validation Error:", error.response.data.errors);
      } else {
        console.error("Network Error:", error.message);
      }
    }

    console.log("Creating order:", orderData);
    setIsModalOpen(false);
    setSelectedCustomerId("");
  };

  return (
    <div className="products">
      <h3>{name}</h3>
      <p>{price} $</p>
      <p>{description}</p>

      <div className="bottom">
        <img src={image} alt={name} />

        <Button variant="outline" onClick={() => handleBuyClick(id)}>Buy</Button>
      </div>


      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-Content">
            <h3>Select Customer</h3>
            <p>Assign this order to a customer:</p>

            <select
              className="form-select"
              value={selectedCustomerId}
              onChange={(e) => {
                console.log("Selected ID:", e.target.value); 
                setSelectedCustomerId(e.target.value);
              }}
            >
              <option value="">-- Choose Customer --</option>
              {customers.map((c: customerI) => (
                
                <option key={c.customerId} value={c.customerId}>
                  {c.firstName} {c.lastName}
                </option>
              ))}
            </select>

            <div className="modal-actions">
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button
                className="confirm-btn"
                onClick={handleOrderSubmit}
                disabled={!selectedCustomerId}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card
