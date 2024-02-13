import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { MenBlack14 } from "../Assets/Images/index";

import {
  IoIosHeart,
  MdDelete,
  MdPayment,
  RiSecurePaymentFill,
  FaCreditCard,
} from "../Assets/Icons/index";

const Cart = () => {
  return (
    <>
      <Wrapper>
        <section className="container-fluid Main-Section text-center mt-5">
          <h1>Shopping bag</h1>
          <main className="Sub-Section row mt-5 col-xl-12">
            <section className="Sub-Section-1 col-xl-7">
              <div className="Main-Box">
                <div className="Sub row">
                  <div className="Image-Box">
                    <img className="img" src={MenBlack14} alt="" />
                  </div>
                  <div className="Sub-1">
                    <div className="Content-1 row">
                      <div className="Tittle">
                        <h5>Oversized Fit Printed hoodie</h5>
                        <p>Rs.2,999.00</p>
                      </div>
                      <div className="Delete-Icon">
                        <MdDelete />
                      </div>
                    </div>
                    <div className="Product-Detail-Boxes row">
                      <div className="Product-Details">
                        <p>Pro.no.</p>
                        <p>Colour: </p>
                      </div>
                      <div className="Product-Details">
                        <p>01</p>
                        <p>Blue </p>
                      </div>
                      <div className="Product-Details">
                        <p>Size:</p>
                        <p>Total:</p>
                      </div>
                      <div className="Product-Details">
                        <p>M</p>
                        <p>Rs. 1999.00</p>
                      </div>
                    </div>
                    <div className="Contenr-2 row">
                      <Link className="Fav-Box">
                        <IoIosHeart />
                      </Link>
                      <span className="Drop-Box">
                        <select className="Select">
                          <option value="option1"> 1 </option>
                          <option value="option2"> 2 </option>
                          <option value="option3"> 3 </option>
                          <option value="option4"> 4 </option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="Sub-Section-2 col-xl-5">
              <main className="Content-1">
                <div className="Title">
                  <h5>Discounts</h5>
                  <h5>
                    <Link>Apply discount</Link>
                  </h5>
                </div>

                <form>
                  <div className="Form-Group">
                    <h6>Log in to use your personal offers!</h6>
                    <div className="Check-out-button mt-4">
                      <input className="Button" type="button" value="Login" />
                    </div>
                  </div>
                </form>
                <hr />

                <div className="Total-Order">
                  <h6>Order Value</h6>
                  <h6>0.00</h6>
                </div>
                <div className="Total-Order">
                  <h6>Delivery</h6>
                  <h6>FREE</h6>
                </div>
                <hr />
                <div className="Total-Order">
                  <h6>Total</h6>
                  <h6>Rs.0,000</h6>
                </div>
                <input
                  className="Button"
                  type="button"
                  value="Continue to checkout"
                />
                <div className="Cash-Section">
                  <ul className="Dis p-0">
                    <span>
                      <h6>
                        <Link className="text-dark">Cash on Delivery</Link>
                      </h6>
                    </span>
                    <li>
                      <MdPayment className="icon-size" />
                    </li>
                    <li>
                      <RiSecurePaymentFill className="icon-size" />
                    </li>
                  </ul>
                  <ul className="Dis p-0">
                    <span>
                      <h6>EMI</h6>
                    </span>
                    <li>
                      <FaCreditCard className="icon-size" />
                      &nbsp;&nbsp;Credit Card
                    </li>
                    <li>
                      <FaCreditCard className="icon-size" />
                      &nbsp;&nbsp;Debit Card
                    </li>
                  </ul>
                  <p className="Dis">
                    Prices and delivery costs are not confirmed until you've
                    reached the checkout.
                    <br />
                    15 days free returns. Read more about return and refund
                    policy.
                    <br />
                    Customers would receive an SMS/WhatsApp notifications
                    regarding deliveries on the registered phone number.
                  </p>
                  <div className="Check-out-button mt-4">
                    <input
                      className="Button"
                      type="button"
                      value="Delivery and return options"
                    />
                  </div>
                </div>
              </main>
            </section>
          </main>
        </section>
      </Wrapper>
    </>
  );
};

export default Cart;

export const Wrapper = styled.section`
  .Main-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .Sub-Section {
      .Sub-Section-1 {
        .Main-Box {
          margin-right: 0px;
          margin-left: 0px;
          background-color: #faf9f8;

          .Sub {
            gap: 10px;
            .Image-Box {
              width: 20%;
              .img {
                width: 100%;
              }
            }
            .Sub-1 {
              .Content-1 {
                margin-left: 5px;
                padding: 5px;
                .Tittle {
                  text-align: start;
                }
                .Delete-Icon {
                  position: absolute;
                  right: 50px;
                  font-size: 20px;
                }
              }
              .Product-Detail-Boxes {
                margin-left: 5px;
                text-align: start;
                gap: 80px;
                .Product-Details {
                  margin-left: 5px;

                  p {
                    margin: 0px;
                  }
                }
              }
              .Contenr-2 {
                margin-left: 12px;
                margin-top: 20px;
                gap: 20px;

                .Fav-Box {
                  width: 100px;
                  height: 50px;
                  font-size: 30px;
                  border: 1.5px solid rgba(0, 0, 0, 0.7);
                  display: grid;
                  place-items: center;
                  color: black;
                }
                .Drop-Box {
                  width: 100px;
                  height: 50px;
                  border: 1.5px solid rgba(0, 0, 0, 0.7);
                }
                .Select {
                  width: 100%;
                  height: 47px;
                  border: none;
                }
              }
            }
          }
        }
      }
      .Sub-Section-2 {
        background-color: #faf9f8;
        .Content-1 {
          .Title {
            display: flex;
            justify-content: space-between;
            a {
              color: black;
            }
          }
          .Form-Group {
            margin-top: 20px;
          }
          .Total-Order {
            display: flex;
            justify-content: space-between;
          }
          .Button {
            width: 100%;
            height: 50px;
            border-radius: 0px;
            border-color: black;
            background-color: black;
            border: none;
            color: white;
          }
          .Cash-Section {
            margin-top: 20px;
            ul li {
              list-style: none;
              line-decoration: none;
            }
            .Dis {
              text-align: start;
              font-size: 13px;
            }
            .icon-size {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
`;
