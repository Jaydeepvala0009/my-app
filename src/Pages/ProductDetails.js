import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  IoIosHeart,
  MdOutlineShoppingBag,
  FaStar,
  MdOutlineStarHalf,
  CiStar,
} from "../Assets/Icons/index";

const ProductDetails = () => {


  const [productData, setProductData] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  // eslint-disable-next-line
  const [selectedSize, setSelectedSize] = useState(null);
  const [displayedImage, setDisplayedImage] = useState(null);

  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("selectedProduct"));
    const storedDataHome = JSON.parse(
      localStorage.getItem("selectedProducthome")
    );
    const productType = localStorage.getItem("productType");

    if (productType === "myproduct") {
      if (storedData) {
        setProductData(storedData);
        setDisplayedImage(storedData.image);
      }
    } else if (productType === "myproducthome") {
      if (storedDataHome) {
        setProductData(storedDataHome);
        setDisplayedImage(storedDataHome.image);
      }
    }
  }, []);


  useEffect(() => {
    if (productData && selectedColor) {
      const selectedVariation = productData.variations.find(
        (variation) => variation.color === selectedColor
      );
      if (selectedVariation) {
        console.log("selectedVariation: ", selectedVariation);
        setDisplayedImage(selectedVariation.image);
      }
    }
  }, [selectedColor, productData]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  
  return (
    <>
      <Wrapper>
        {productData && (
          <section
            key={productData.id}
            className="container-fluid Main-Product-Section"
          >
            <h1>Product Details</h1>
            <section className="container-fluid Sub-Product-Section">
              <main className="row">
                <section className="Sub-Section-1 col-xl-7">
                  <main className="Main-Boxes">
                    <div className="Box">
                      <img
                        className="images"
                        src={displayedImage || productData.image}
                        alt="Product"
                      />
                      <img
                        className="images"
                        src={displayedImage || productData.image}
                        alt="Product"
                      />
                    </div>
                    <div className="Box">
                      <img
                        className="images"
                        src={displayedImage || productData.image}
                        alt="Product"
                      />
                      <img
                        className="images"
                        src={displayedImage || productData.image}
                        alt="Product"
                      />
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
                  <div className="Main-Colors-Box">
                    <h5>Colors</h5>
                    {productData.variations.map((variation) => (
                      <button
                        key={variation.color}
                        style={{
                          backgroundColor: variation.color,
                          margin: "5px",
                          width: "50px",
                          height: "30px",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleColorChange(variation.color)}
                      ></button>
                    ))}
                  </div>
                  <div className="Main-Size-Box">
                    <h5>Sizes</h5>
                    <div className="Sizes-Box">
                      {selectedColor &&
                        productData.variations
                          .find(
                            (variation) => variation.color === selectedColor
                          )
                          .sizes.map((size) => (
                            <button
                              key={size}
                              style={{
                                margin: "5px",
                                width: "50px",
                                height: "30px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                              }}
                              onClick={() => handleSizeChange(size)}
                              disabled={
                                !productData.variations
                                  .find(
                                    (variation) =>
                                      variation.color === selectedColor
                                  )
                                  .sizes.includes(size)
                              }
                            >
                              {size}
                            </button>
                          ))}
                    </div>
                  </div>
                  <button className="Button" type="button">
                    <button className="Button" type="button">
                      <MdOutlineShoppingBag className="icon" />
                      <h4>Add to Cart</h4>
                    </button>
                  </button>
                  <div className="Discription">
                    <div className="Rating">
                      <h4>(1000 revivews)</h4>
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

        .Main-Colors-Box {
          margin: 0px;
          text-align: start;
          margin: 0 auto;
          padding: 20px;

          .Color-Box {
            display: flex;
            text-align: start;
            gap: 35px;
          }

          .Main-Colors-Box {
            margin: 0 auto;
            padding: 20px;
          }

          .color-circle {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
            cursor: pointer;
          }

          .color-circle.selected {
            border: 2px solid black;
          }
        }

        .Main-Size-Box {
          justify-content: space-between;
          text-align: start;
          margin: 0 auto;
          padding: 20px;

          .Sizes-Box {
            display: flex;
            gap: 40px;
            .Size-Button {
              width: 50px;
              border: none;
            }
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
