import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  IoIosHeart,
  MdOutlineShoppingBag,
  FaStar,
  MdOutlineStarHalf,
  CiStar,
} from "../Assets/Icons/index";

const ProductDetails = () => {
  const [productData, setProductData] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  
  useEffect(() => {
    if (
      productData &&
      productData.variations &&
      productData.variations.length > 0
    ) {
      const defaultVariation = productData.variations[0];
      setSelectedVariation(defaultVariation);
      setSelectedSize(defaultVariation.sizes[0]);
    }
  }, [productData]);

  const handleVariationSelect = (variation) => {
    setSelectedVariation(variation);
    setSelectedSize(variation.sizes[0]);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  console.log("selectedSize: ", selectedSize);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("selectedProduct"));
    const storedDataHome = JSON.parse(
      localStorage.getItem("selectedProducthome")
    );
    const productType = localStorage.getItem("productType");

    if (productType === "myproduct") {
      if (storedData) {
        setProductData(storedData);
      }
    } else if (productType === "myproducthome") {
      if (storedDataHome) {
        setProductData(storedDataHome);
      }
    }
  }, []);

  return (
    <>
      <Wrapper>
        {selectedVariation && (
          <section
            key={selectedVariation.id}
            className="container-fluid Main-Product-Section"
          >
            <h1>Product Details</h1>
            <section className="container-fluid Sub-Product-Section">
              <main className="row">
                <section className="Sub-Section-1 col-xl-7">
                  <main className="Main-Boxes">
                    <div className="Box">
                      {loading ? (
                        <Skeleton width={300} height={345} />
                      ) : (
                        <img
                          className="images"
                          src={selectedVariation.image}
                          alt="Product"
                        />
                      )}
                      {loading ? (
                        <Skeleton width={300} height={345} />
                      ) : (
                        <img
                          className="images"
                          src={selectedVariation.image}
                          alt="Product"
                        />
                      )}
                    </div>
                    <div className="Box">
                      {loading ? (
                        <Skeleton width={300} height={345} />
                      ) : (
                        <img
                          className="images"
                          src={selectedVariation.image}
                          alt="Product"
                        />
                      )}
                      {loading ? (
                        <Skeleton width={300} height={345} />
                      ) : (
                        <img
                          className="images"
                          src={selectedVariation.image}
                          alt="Product"
                        />
                      )}
                    </div>
                  </main>
                </section>

                <section className="Sub-Section-2 col-xl-5">
                  <div className="Main-Dis row">
                    <div className="Dis">
                      <h5>{productData.title}</h5>
                      <p>MRP inclusive of all taxes</p>
                      <h6>Rs.{productData.price}</h6>
                    </div>
                    <div>
                      <h5>
                        <Link>
                          <IoIosHeart className="Fav-icon" />
                        </Link>
                      </h5>
                    </div>
                  </div>

                  <div className="Main-ColorSize-Box">
                    <div className="Main-Colors">
                      <h3>{selectedVariation.color}</h3>
                      <div className="Colors">
                        {productData &&
                          productData.variations &&
                          productData.variations.map((variation, index) => (
                            <button
                              className={`ColorSize-Button ${
                                variation === selectedVariation
                                  ? "selected"
                                  : ""
                              }`}
                              key={index}
                              onClick={() => handleVariationSelect(variation)}
                            >
                              {variation.color}
                            </button>
                          ))}
                      </div>
                    </div>
                    <div className="Main-Sizes">
                      <h4>Sizes:</h4>
                      <h3>{selectedVariation.size}</h3>
                      <div className="Size">
                        {selectedVariation.sizes.map((size) => (
                          <div key={size}>
                            <button
                              className={`ColorSize-Button ${
                                size === selectedSize ? "selected" : ""
                              }`}
                              onClick={() => handleSizeSelect(size)}
                            >
                              {size}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="Button" type="button">
                    <MdOutlineShoppingBag className="icon" />
                    <h4>Add to Cart</h4>
                  </button>
                  <div className="Discription">
                    <div className="Rating">
                      <h4>(1000 revivews)</h4>
                      <h6 className="mt-3">Rate : {productData.rating.rate}</h6>
                      <span>
                        <FaStar />
                        <FaStar />
                        <MdOutlineStarHalf />
                        <CiStar />
                        <CiStar />
                      </span>
                    </div>
                    <div className="Product-Detals mt-3">
                      <h4>Description</h4>
                      <p>{productData.description}</p>
                    </div>
                  </div>
                </section>
              </main>
            </section>
          </section>
        )}
      </Wrapper>
    </>
  );
};

export default ProductDetails;

export const Wrapper = styled.section`
  .Main-Product-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      margin-top: 30px;
    }
    .Sub-Product-Section {
      margin-top: 30px;

      .Sub-Section-1 {
        .Main-Boxes {
          width: 100%;

          .Box {
            width: 90%;
            height: 350px;
            display: flex;
            gap: 20px;
            margin-top: 20px;

            .images {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .Sub-Section-2 {
        .Main-Dis {
          justify-content: space-between;
          text-align: start;
          margin: 0 auto;
          padding: 20px;

          .Fav-icon {
            font-size: 40px;
            color: black;
          }
        }
        .Main-ColorSize-Box {
          justify-content: space-between;
          text-align: start;
          margin: 0 auto;
          padding: 20px;
          .Main-Colors {
            text-align: start;
            .Colors {
              display: flex;
              flex-direction: row;
              gap: 20px;
            }
          }
          .Main-Sizes {
            text-align: start;
            margin-top: 20px;
            .Size {
              display: flex;
              gap: 20px;
            }
          }
          .ColorSize-Button {
            width: 80px;
            height: 30px;
            margin-top: 20px;
            border: none;
            background-color: white;
            border: 1.5px solid rgba(0, 0, 0, 0.6);
          }
          .selected {
            background-color: black;
            color: white;
          }
        }
        .Button {
          width: 95%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0px;
          background-color: black;
          border: none;
          color: white;
          margin-left: 15px;
          margin-top: 30px;

          font-size: 20px;
          gap: 5px;

          .icon {
            font-size: 30px;
            color: white;
          }
        }

        .Discription {
          text-align: start;
          margin-top: 40px;
          padding: 15px;
        }
      }
    }
  }
`;
