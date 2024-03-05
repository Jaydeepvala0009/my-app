import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../Redux/ProductSlice";
import { filterProducts } from "../Redux/ProductFilterSlice";
import FavoriteButton from "../Components/FavButton";

const Myproduct = () => {
  const dispatch = useDispatch();

  const { filteredProducts } = useSelector((state) => state.products);
  const handleFilter = (category) => {
    dispatch(filterProducts({ category }));
  };

  const handleProductClick = (selectedProduct) => {
    dispatch(setProduct(selectedProduct));
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    localStorage.setItem("productType", "myproduct");
  };

  return (
    <>
      <Wrapper>
        <section className="Main-Section container-fluid">
          <section className="Sub-Section-1 container-fluid">
            <nav className="navbar">
              <div className="Nav-Main">
                <div className="Main-Nav-Link">
                  <Link
                    className="nav-link"
                    to="#"
                    onClick={() => handleFilter("men")}
                  >
                    Men Products
                  </Link>
                  <Link
                    className="nav-link"
                    to="#"
                    onClick={() => handleFilter("Women")}
                  >
                    Women
                  </Link>
                  <Link
                    className="nav-link"
                    to="#"
                    onClick={() => handleFilter("Kids")}
                  >
                    Kids
                  </Link>
                  <Link className="nav-link">Sale</Link>
                </div>
              </div>
            </nav>
          </section>

          <section className="container-fluid Sub-Section-2">
            <section className="Section-1 row col-xl-12">
              <main className="Main-1 col-xl-3 col-lg-3 col-md-3">
                <div className="Box-1 Boxes mt-4">
                  <h4>New Arrivals</h4>
                  <Link to="#">View All</Link>
                  <br />
                  <Link to="#">Clothes</Link>
                  <br />
                  <Link to="#">Shoes And Accessories</Link>
                  <br />
                </div>
                <div className="Box-2 Boxes">
                  <h4>Member Exclusive Prices</h4>
                  <Link to="#">Shop Now</Link>
                </div>
                <div className="Box-3 Boxes">
                  <h4>Trending now</h4>
                  <Link to="#">Trending now</Link>
                </div>
                <div className="Box-4 Boxes">
                  <h4>Shop by Product</h4>
                  <Link to="#">T-shirts & Tops</Link>
                  <br />
                  <Link to="#">Multipacks</Link>
                  <br />
                  <Link to="#">Long Sleeve</Link>
                  <br />
                  <Link to="#">Trousers</Link>
                  <br />
                  <Link to="#">Premium Selection</Link>
                  <br />
                  <Link to="#">Sportswear</Link>
                  <br />
                  <Link to="#">Jeans</Link>
                  <br />
                  <Link to="#">Blazers & Suits</Link>
                  <br />
                  <Link to="#">Jackets & Coats</Link>
                  <br />
                </div>
              </main>
              <main className="Main-2 col-xl-9 col-lg-9 col-md-9">
                <div className="Section-2 row">
                  {filteredProducts.map((Product) => (
                    <div key={Product.id} className="card">
                      <NavLink
                        key={Product.id}
                        to={`/ProductDetails/${Product.id}`}
                        onClick={() => handleProductClick(Product)}
                        className=" navlink-no-decoration ml-3"
                      >
                        <img
                          src={Product.image}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body Card-text">
                          <h5 className="card-title mt-3">{Product.title}</h5>
                          <p className="card-text m-0">Rs.{Product.price}</p>
                        </div>
                      </NavLink>
                      <div className="favicon">
                        <FavoriteButton product={Product} />
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            </section>
          </section>
        </section>
      </Wrapper>
    </>
  );
};

export default Myproduct;

export const Wrapper = styled.section`
  .Main-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .Sub-Section-1 {
      .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        .Nav-Main {
          .Main-Nav-Link {
            display: flex;
            .nav-link {
              color: rgba(0, 0, 0, 0.5);
              margin-left: 50px;
              &:hover {
                color: rgba(0, 0, 0, 0.7);
              }
            }
          }
        }
      }
    }
    .Sub-Section-2 {
      margin-top: 40px;
      padding: 0px;
      .Boxes {
        text-align: start;
        margin-top: 30px;
      }
      .Section-1 {
        .Main-1 {
          .Boxes a {
            color: black;
          }
        }
        display: flex;
        justify-content: center;
        .Main-2 {
          .Section-2 {
            gap: 20px;
            .card {
              width: 30%;
              border: none;
              list-style: none;
              text-dacoration: none;
              .navlink-no-decoration {
                text-decoration: none;
              }
            }
            .card-img-top {
              width: 100%;
              height: 350px;
            }
            .Card-text {
              text-align: start;
              padding: 0px;
            }
            .favicon {
              position: absolute;
              bottom: 20%;
              right: 10px;
              font-size: 30px;
              color: black;
            }
            .Card-text {
              color: black;
            }
          }
        }
      }
    }
  }
`;
