import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../Style/Navcss";

import {
  AiOutlineShopping,
  FaRegHeart,
  IoSearch,
  MdOutlineShoppingBag,
} from "../Assets/Icons/index";



const Navbar = () => {
  return (
    <>
      <Wrapper>
        <section className="Main-Navbar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              <h1>Shop Now</h1>
              <AiOutlineShopping className="Shop-icon" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav Main-ul">
                <li className="nav-item">
                  <Link className="nav-link" to="Myproduct">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="FindStore">
                    Find a Store
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="CustomerService">
                    Customer Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Sign In
                  </Link>
                </li>
              </ul>
              <form className="form-inline Search-Bar Icons">
                <Link className="nav-link" to="Favourites">
                  <FaRegHeart className="fa-icon" />
                </Link>
                <Link className="nav-link" to="Cart">
                  <MdOutlineShoppingBag className="fa-icon" />
                </Link>
                <Link className="nav-link" to="#">
                  <IoSearch className="Search-icon fa-icon" />
                </Link>
              </form>
            </div>
          </nav>
        </section>
      </Wrapper>
    </>
  );
};

export default Navbar;
