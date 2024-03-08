import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sizeOptions = ["S", "M", "L"];

export default function EditProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    previousPrice: "",
    offer: "",
    sizes: [],
    description: "",
    category: "",
  });

  const navigate = useNavigate();

  //product data 
  const productData = {
    name: "Sleeve Top",
    price: "1200",
    previousPrice: "1500",
    offer: "20",
    sizes: ["S", "M", "L"],
    description: "SHEIN Frilled Bow Tie Trumpet Sleeve Top",
    category: "Women",
  };

  useState(() => {
    setProduct(productData);
  }, []);

  const handleEditProduct = () => {
    console.log("Product edited:", product);
    navigate("/productlist");
  };

  const handleCancelEdit = () => {
    navigate("/productlist");
  };

  const handleCheckboxChange = (size) => {
    setProduct((prevProduct) => {
      const updatedSizes = prevProduct.sizes.includes(size)
        ? prevProduct.sizes.filter((s) => s !== size)
        : [...prevProduct.sizes, size];

      return {
        ...prevProduct,
        sizes: updatedSizes,
      };
    });
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-bold font-monospace text-center m-2">
          Edit Product
        </h2>
        <div className="cardA rounded bg-white border shadow p-4 mb-3">
          <form className="row g-3">
            <div className="col-12">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                name="name"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Price</label>
              <input
                className="form-control"
                type="text"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                name="price"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Previous Price</label>
              <input
                className="form-control"
                type="text"
                value={product.previousPrice}
                onChange={(e) => setProduct({ ...product, previousPrice: e.target.value })}
                name="previousPrice"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Offer (%)</label>
              <input
                className="form-control"
                type="text"
                value={product.offer}
                onChange={(e) => setProduct({ ...product, offer: e.target.value })}
                name="offer"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <input
                className="form-control"
                type="text"
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                name="description"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Category</label>
              <select
                className="form-control"
                name="category"
                value={product.category}
                onChange={(e) => setProduct({ ...product, category: e.target.value })}
              >
                <option value="book">Book</option>
                <option value="child">Child</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="sizes">Sizes:</label>
              <div>
                {sizeOptions.map((size) => (
                  <div key={size}>
                    <input
                      type="checkbox"
                      id={`size${size}`}
                      name={`size${size}`}
                      checked={product.sizes.includes(size)}
                      onChange={() => handleCheckboxChange(size)}
                    />
                    <label htmlFor={`size${size}`}>{size}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 mt-4 text-center">
              <button
                className="btn btnA me-4"
                type="button"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
              <button
                className="btn btnA"
                type="button"
                onClick={handleEditProduct}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
