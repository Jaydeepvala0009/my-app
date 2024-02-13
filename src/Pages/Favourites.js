import React, { useState } from "react";
import styled from "styled-components";

import { AiOutlineShopping, MdDelete } from "../Assets/Icons/index";

const Favourites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const removeFav = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <Wrapper>
        <section className="Main-Section container-fluid">
          <h1>Favourites</h1>
          <main className="Sub-Section">
            <div className="Items-Count">
              <h4>0 Items</h4>
            </div>
            <section className="container-fluid Main-Card-Component">
              <div className="Main-Card row">
                {favorites.map((favorites, id) => (
                  <div key={id} className="Card">
                    <div>
                      <img src={favorites.image} alt="..." />
                    </div>
                    <div className="Card-Body">
                      <p className="card-title">{favorites.title}</p>
                      <p className="card-title">Rs.{favorites.price}</p>
                      <p className="card-title">Color :{favorites.color}</p>
                      <div className="Size-List">
                        <select className="Select">
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="extra-large">Extra Large</option>
                        </select>
                      </div>
                      <button type="button" className="Card-Button">
                        <AiOutlineShopping className="Icon" />
                        Add
                      </button>
                      <div className="Delete-Fav" onClick={() => removeFav(id)}>
                        <MdDelete />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </section>
      </Wrapper>
    </>
  );
};

export default Favourites;

export const Wrapper = styled.section`
  .Main-Section {
    text-align: center;
    margin-top: 20px;
    .Sub-Section {
      .Items-Count {
        display: flex;
        justify-content: flex-end;
        opacity: 0.8;
        margin-right: 20px;
      }
      .Main-Card-Component {
        .Main-Card {
          gap: 10px;
          img {
            width: 100%;
            height: 350px;
          }
          .Card {
            margin-top: 20px;
            width: 24%;
            border: none;
            background-color: #faf9f8;
          }
          .Card-Body {
            position: relative;
            text-align: start;
            p {
              margin: 0px;
            }
            .Size-List {
              margin-top: 20px;
              .Select {
                width: 100%;
                border: 1.5px solid rgba(0, 0, 0, 0.7);
                padding: 15px;
              }
            }
            .Card-Button {
              width: 100%;
              height: 57px;
              border: none;
              background-color: black;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 20px;
              color: white;
              .Icon {
                font-size: 30px;
                color: white;
              }
            }
            .Delete-Fav {
              position: absolute;
              font-size: 30px;
              top: -25%;
              right: 10px;
            }
          }
        }
      }
    }
  }
`;
