import { useState } from "react";
import axios from "axios";


interface productI {
    productName: string;
    description: string;
    categoryId: number;
    price: string;
    picture: string;
}




const AddProduct = () => {


    const [formData, setFormData] = useState<productI>({
    productName: '',
    description: '',
    categoryId: 1, // Default category
    price: '',
    picture: ''
});


const api = axios.create({
  baseURL: 'http://localhost:5184/api',
  headers: { 'Content-Type': 'application/json' }
});


const handleSubmit = async (e: React.FormEvent) => {
  try {
    e.preventDefault()
    // You just pass the object. Axios handles JSON.stringify() for you.
    const response = await api.post('/products', formData);
    
    console.log("Success!", response.data);
    alert("Product saved!");
  } catch (error: any) {
    // Axios gives you the specific error message from your .NET [Required] attributes
    if (error.response) {
      console.error("Backend Validation Error:", error.response.data.errors);
    } else {
      console.error("Network Error:", error.message);
    }
  }
};



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: name === 'categoryId' ? parseInt(value) : value
           
        }));
    };

    return (
        <div>
             <h1> Add Product</h1>
            <form action="submit"  onSubmit={handleSubmit}>
               
                <label htmlFor="ProductName" ></label>
                <input type="text" name="productName" value={formData.productName} id="ProductName" onChange={handleChange} />
                <label htmlFor="description"></label>
                <input type="text" name="description" value={formData.description} id="description" onChange={handleChange} />
                <label htmlFor="categoryId" ></label>
                <select name="categoryId" value={formData.categoryId} onChange={handleChange}>
                    <option value="1">Laptops</option>
                    <option value="2">Accessories</option>
                </select>
                <label htmlFor="price"></label>
                <input type="text" name="price" id="price" onChange={handleChange} value={formData.price}  />
                <label htmlFor="image"></label>
                <input type="image" id="image" onChange={handleChange} value={formData.picture} />
                <button type="submit"> submit</button>
            </form>

            
        </div>
    )
}

export default AddProduct
