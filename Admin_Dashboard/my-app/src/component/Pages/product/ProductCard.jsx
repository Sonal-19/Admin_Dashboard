import React from 'react';
import './Product.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Maroon from "../../Images/Latest Maroon Bridal Lehenga Designs For 2022-23 Reception Brides.jpg"
import Grey from "../../Images/Brown net embroidered lehenga choli 1031.jpg"
import Pearl from "../../Images/Buy Light Thulian Pink Pearl Embroidered Organza Designer Lehenga Online.jpg"
import NavyBlue from "../../Images/Reception Ready with Nitika Gujral.jpg"

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const LatestProductsSlider = () => {
  const mockLatestProducts = [
    {
      _id: 1,
      image: Maroon,
      name: "Bridal Maroon Lehenga",
      category: "Women",
      sizes: ['S', 'M', 'L'],
      price: 1900,
      previousPrice: 2900
    },
    {
      _id: 2,
      image: Grey,
      name: "Grey Lehenga",
      category: "Women",
      sizes: ['S', 'M', 'L'],
      price: 1500,
      previousPrice: 2000
    },
    {
      _id: 3,
      image: Pearl,
      name: "Light Thulian Pink Lehenga",
      category: "Women",
      sizes: ['S', 'M', 'L'],
      price: 1800,
      previousPrice: 2200
    },
    {
      _id: 4,
      image: NavyBlue,
      name: "Navy Blue Lehenga",
      category: "Women",
      sizes: ['S', 'M', 'L'],
      price: 1700,
      previousPrice: 2100
    }
  ];

  return (
    <div style={{ position: 'relative' }} className="slider">
      <Slider {...settings} className="slide">
        {mockLatestProducts.map((product) => (
          <div key={product._id} className="cardL rounded bg-white border shadow m-5">
            <h2 className='m-2 text-bold font-monospace text-center' style={{ fontStyle: "italic" }} >Recent Products</h2>
            <div className='d-flex'>        
              <div className="image-side text-center ms-3">
                <img src={product.image} alt={product.name} className="card-img-top BeerListItem-imgL" />
              </div>
              <div className="info-side p-3 text-center ms-4">
                <h4 className="card-title text-bold text-center">{product.name}</h4>
                <h6 className="m-4 text-secondary" style={{ fontStyle: "italic" }}>Category: {product.category}</h6>
                <h6 className="m-4 text-secondary" style={{ fontStyle: "italic" }}>Sizes: {product.sizes.join(', ')}</h6>
                <p className="card-text text-center m-4">
                  <strong >₹{product.price}</strong>{" "}
                  <span className="discounted-price">
                    {product.previousPrice && (
                      <span>
                        <s className="text-secondary">₹{product.previousPrice}</s>{" "}
                        <span className="discount-percentage text-warning">
                          ({Math.round(((product.previousPrice - product.price) / product.previousPrice) * 100)}% off)
                        </span>
                      </span>
                    )}
                  </span>
                </p>
                <p className="card-text">
                  <Link to='/productlist'>Show More</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LatestProductsSlider;
