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
    <div className="form-container">
      <h1 className="form-title">Add Product</h1>
      <form className="product-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="form-label" htmlFor="ProductName">Product Name</label>
          <input
            className="form-input"
            type="text"
            name="productName"
            value={formData.productName}
            id="ProductName"
            onChange={handleChange}
            placeholder="Enter product name"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="description">Description</label>
          <input
            className="form-input"
            type="text"
            name="description"
            value={formData.description}
            id="description"
            onChange={handleChange}
            placeholder="Brief description"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="categoryId">Category</label>
          <select
            className="form-select"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
          >
            <option value="1">Laptops</option>
            <option value="2">Accessories</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="price">Price</label>
          <input
            className="form-input"
            type="text"
            name="price"
            id="price"
            onChange={handleChange}
            value={formData.price}
            placeholder="0.00"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="image">Product Image</label>
          {/* Changed type to 'file' as it's the standard for uploads */}
          <input
            className="form-input"
            type="file"
            id="image"
            onChange={handleChange}
          />
        </div>

        <button className="submit-btn" type="submit">Submit Product</button>
      </form>
    </div>
  )
}

export default AddProduct
