import React, { useState } from "react";
import { faEdit, faEye, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import SleeveTop from "../../Images/SHEIN Frilled Bow Tie Trumpet Sleeve Top.jpg";
import LaceShirt from "../../Images/Floral Applique Lace Insert Shirt.jpg";
import Sweater from "../../Images/Plunging Batwing Sleeve Dip Hem Oversized Sweater.jpg";
import Jacket from "../../Images/Girls Letter Patched Striped Trim Varsity Jacket Without Tee.jpg";
import Hooded from "../../Images/Zip Up Drawstring Hooded Jacket.jpg";
import Maroon from "../../Images/Latest Maroon Bridal Lehenga Designs For 2022-23 Reception Brides.jpg";
import Pearl from "../../Images/Buy Light Thulian Pink Pearl Embroidered Organza Designer Lehenga Online.jpg";
import Grey from "../../Images/Brown net embroidered lehenga choli 1031.jpg";
import NavyBlue from "../../Images/Reception Ready with Nitika Gujral.jpg";

function ProductList() {
  const [products, setProducts] = useState([
    {
      _id: "1",
      name: "Sleeve Top",
      category: "Women",
      sizes: ["S", "M", "L"],
      price: 1200,
      previousPrice: 1500,
      image: SleeveTop,
      description: "SHEIN Frilled Bow Tie Trumpet Sleeve Top",
    },
    {
      _id: "2",
      name: "Lace Shirt",
      category: "Women",
      sizes: ["S", "M", "L"],
      price: 1000,
      previousPrice: 1200,
      image: LaceShirt,
      description: "Floral Applique Lace Insert Shirt.",
    },
    {
      _id: "3",
      name: "Sweater",
      category: "Women",
      sizes: ["S", "M", "L"],
      price: 1800,
      previousPrice: 2000,
      image: Sweater,
      description: "Plunging Batwing Sleeve Dip Hem Oversized Sweater",
    },
    {
      _id: "4",
      name: "Varsity Jacket",
      category: "Men",
      sizes: ["S", "M", "L"],
      price: 2500,
      previousPrice: 3000,
      image: Jacket,
      description: " Letter Patched Striped Trim Varsity Jacket Without Tee."
    },
    {
      _id: "5",
      name: "Hooded Jacket",
      category: "Men",
      sizes: ["S", "M", "L"],
      price: 2000,
      previousPrice: 2600,
      image: Hooded,
      description: "Zip Up Drawstring Stylish Hooded Jacket."
    },
    {
      _id: "6",
      name: "Bridal Lehenga",
      category: "Women",
      sizes: ["S", "M", "L"],
      price: 2500,
      previousPrice: 3000,
      image: Maroon,
      description:"Latest Maroon Bridal Lehenga Designs For Reception Brides",
    },
    {
      _id: "7",
      name: "Grey Lehenga",
      category: "Women",
      sizes: ["S", "M", "L"],
      price: 2200,
      previousPrice: 3000,
      image: Grey,
      description:"Elephant Grey Sequins Embroidered Net Bridal Lehenga",
    },
    {
      _id: "8",
      name: "Pearl Lehenga",
      category: "Women",
      sizes: ["S", "M", "L"],
      price: 1500,
      previousPrice: 2300,
      image: Pearl,
      description:"Light Pink Pearl Embroidered Organza Designer Lehenga",
    },
    {
      _id: "9",
      name: "Navy Blue Lehenga",
      category: "Women",
      sizes: ["S", "M", "L"],
      price: 2500,
      previousPrice: 3000,
      image: NavyBlue,
      description:"Dark Navy Sequins Embroidered Georgette Party Wear Lehenga",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product._id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="d-flex flex-column p-1 m-1 justify-content-center align-items-center">
        <h2 className="mb-4 text-bold font-monospace text-center">
          All Products
        </h2>
        <div className="cardAP rounded bg-white border shadow p-4 pb-5 mb-5">
          <div className="d-flex justify-content-end">
            <Link to="/addproduct" className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Available Sizes</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-thumbnail"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.sizes.join(", ")}</td>
                  <td>
                    <strong>₹{product.price}</strong>{" "}
                    {product.previousPrice && (
                      <span className="discounted-price">
                        <s>₹{product.previousPrice}</s>{" "}
                        <span className="discount-percentage">
                          {Math.round(
                            ((product.previousPrice - product.price) /
                              product.previousPrice) *
                              100
                          )}
                          % off
                        </span>
                      </span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-info me-2"
                      onClick={() => openModal(product)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <Link
                      to={`/editproduct/${product._id}`}
                      className="btn btn-primary me-2"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(product._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={isModalOpen} onHide={handleCloseModal} contentLabel="Product Details" className="modal" >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="text-bold font-monospace text-center">
              Product Details
            </h2>
          </Modal.Title>
        </Modal.Header>
        {selectedProduct && (
          <Modal.Body>
            <div className="container">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="ms-2 card-img-top DBeerListItem-img"
                  />
                </div>
                <div className="col-6">
                  <div>
                    <h2 className="m-4 mb-2 mt-0">{selectedProduct.name}</h2>
                  </div>
                  <div className="ms-4" style={{ fontStyle: "italic" }}>
                    {selectedProduct.description}
                  </div>
                  <div>
                    <h6 className="m-4 text-secondary" style={{ fontStyle: "italic" }}>
                      {selectedProduct.category}
                    </h6>
                  </div>
                  <div>
                    <h6 className="m-4 text-secondary" style={{ fontStyle: "italic" }}>
                      Sizes: {selectedProduct.sizes.join(", ")}
                    </h6>
                  </div>
                  <div>
                    <p className="card-text text-center m-4">
                      <strong >₹{selectedProduct.price}</strong>{" "}
                      {selectedProduct.previousPrice && (
                        <span className="discounted-price">
                          <s className="text-secondary">₹{selectedProduct.previousPrice}</s>{" "}
                          <span className="discount-percentage text-primary">
                            {Math.round(
                              ((selectedProduct.previousPrice - selectedProduct.price) /
                                selectedProduct.previousPrice) *
                                100
                            )}
                            % off
                          </span>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductList;
