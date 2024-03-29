import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProduct } from "../Redux/ProductSlice";
import { Product } from "../Assets/JasonFile/index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../Assets/ReactMaterial";
import { Wrapper } from "../Style/Homecss";
import {
  BackFullimg1,
  Bagroungimg1,
  Bagroungimg2,
  Bagroungimg3,
  Bagroungimg4,
  Bagroungimg5,
  Bagroungimg6,
  Bagroungimg7,
} from "../Assets/Images/index";
import FavoriteButton from "../Components/FavButton";

const Home = () => {
  const dispatch = useDispatch();

  const handleProductClick = (selectedProduct) => {
    dispatch(setProduct(selectedProduct));
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    localStorage.setItem("productType", "myproduct");
  };

  return (
    <>
      <Wrapper>
        <section className="container-fluid Main-Section p-0">
          <section className="container-fluid Sub-Content-1">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Bagroungimg1} className="d-block" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Bagroungimg2} className="d-block" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Bagroungimg3} className="d-block" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Bagroungimg4} className="d-block" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Bagroungimg5} className="d-block" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Bagroungimg6} className="d-block" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Bagroungimg7} className="d-block" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-target="#carouselExampleCaptions"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-target="#carouselExampleCaptions"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </section>

          <section className="Sub-Content-2 container-fluid">
            <div className="Main-Box">
              <img className="img" src={BackFullimg1} alt="" />
              <div className="Content-1">
                <h1>Season of love</h1>
                <h4>New lovely favs for your lil ones!</h4>
                <button className="Button-1">Shop Now</button>
              </div>
            </div>
          </section>

          <section className="container-fluid Sub-Content-3">
            <div className="Slider">
              <Slider {...settings}>
                {Product.map((product) => (
                  <div>
                    <NavLink
                      key={product.id}
                      to={`/ProductDetails/${product.id}`}
                      onClick={(e) => {
                        handleProductClick(product);
                      }}
                      className="card border-0 navlink-no-decoration carocard"
                    >
                      <div>
                        <img
                          src={product.image}
                          style={{ width: "100%", height: "250px" }}
                          className="card-img-top"
                          alt="..."
                        />

                        <div className="card-body text-center p-0 mt-1">
                          <h6 className="card-title h6">{product.title}</h6>
                          <p className="card-text p">{product.price}</p>
                        </div>
                      </div>
                    </NavLink>
                    <div className="Favicon">
                      <FavoriteButton product={product} />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        </section>
      </Wrapper>
    </>
  );
};

export default Home;
