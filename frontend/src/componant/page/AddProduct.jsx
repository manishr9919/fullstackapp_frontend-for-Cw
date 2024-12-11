import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Define the API endpoint

      // https://fullstackapp-banckend-for-cw-1.onrender.com/product/addProduct
      const apiEndpoint = " http://localhost:3000/product/addProduct"; // Replace with your actual endpoint

      // Send a POST request with the product data in JSON format
      const response = await axios.post(apiEndpoint, productData, {
        headers: {
          "Content-Type": "application/json", // Specify JSON format
        },
      });
      console.log(productData);

      // Handle success
      console.log("Product successfully added:", response.data);
      alert("Product added successfully!");

      // Optionally, clear form or reset state
      setProductData({
        name: "",
        price: "",
        description: "",
        category: "",
        stock: "",
        imageUrl: "",
      });
    } catch (error) {
      // Handle errors
      console.error(
        "Error adding product:",
        error.response?.data || error.message
      );
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Product
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-medium">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="mobiles">Mobiles</option>
            <option value="television">Television</option>
            <option value="laptops">Laptops</option>
            <option value="headphones-hearphones">
              Headphones & Hearphones
            </option>
            <option value="kitchen-appliances">Kitchen Appliances</option>
          </select>
        </div>

        {/* Stock */}
        <div className="mb-4">
          <label htmlFor="stock" className="block text-gray-700 font-medium">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label
            htmlFor="imageFile"
            className="block text-gray-700 font-medium"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setProductData({ ...productData, imageFile: file });
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-medium text-lg rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
