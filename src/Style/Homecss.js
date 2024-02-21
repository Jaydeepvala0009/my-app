import styled from "styled-components";

export const Wrapper = styled.section`
  .Main-Section {
    .Sub-Content-1 {
      margin-top: 40px;
      .carousel {
        .carousel-inner {
          .carousel-item {
            img {
              width: 100%;
              height: 500px;
            }
          }
        }
      }
    }
    .Sub-Content-2 {
      margin-top: 20px;

      .Main-Box {
        width: 100%;
        height: 800px;
        position: relative;
        display: grid;
        place-items: center;
        z-index: 1;
        .img {
          width: 100%;
          height: 800px;
        }
      }
      .Content-1 {
        position: absolute;
        color: white;
        text-align: center;
        margin-top: 40%;

        .Button-1 {
          width: 45%;
          height: 50px;
          border: none;
          font-size: 20px;
          font-weight: bold;
          margin-top: 30px;
        }
      }
    }
    .Sub-Content-3 {
      margin-top: 20px;
      .Slider {
        .carocard:focus {
          outline: none;
        }
        .Favicon {
          position: relative;
          bottom: 100px;
          left: 10px;
          font-size: 20px;
          .active {
            color: red;
          }
        }
        .navlink-no-decoration {
          text-decoration: none;
          color: black;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .Main-Section {
      .Sub-Content-1 {
        .carousel {
          .carousel-inner {
            .carousel-item {
              img {
                height: 300px;
              }
            }
          }
        }
      }
      .Sub-Content-2 {
        .Main-Box {
          height: 600px;
          .img {
            height: 600px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .Main-Section {
      .Sub-Content-1 {
        margin-top: 40px;
        .carousel {
          .carousel-inner {
            .carousel-item {
              img {
                height: 250px;
              }
            }
          }
        }
      }
      .Sub-Content-2 {
        .Main-Box {
          height: 500px;
          .img {
            height: 500px;
          }
        }
        .Content-1 {
          margin-top: 50%;
          h1 {
            font-size: 30px;
          }
          h4 {
            font-size: 20px;
          }

          .Button-1 {
            height: 50px;
            font-size: 20px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .Main-Section {
      .Sub-Content-2 {
        .Main-Box {
          height: 400px;
          .img {
            height: 400px;
          }
        }
        .Content-1 {
          margin-top: 60%;
          h1 {
            font-size: 20px;
          }
          h4 {
            font-size: 15px;
          }

          .Button-1 {
            height: 50px;
            font-size: 15px;
            margin-top: 10px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 370px) {
    .Main-Section {
      .Sub-Content-1 {
        .carousel {
          .carousel-inner {
            .carousel-item {
              img {
                height: 200px;
              }
            }
          }
        }
      }
      .Sub-Content-2 {
        .Main-Box {
          height: 300px;
          .img {
            height: 300px;
          }
        }
        .Content-1 {
          margin-top: 40%;
          h1 {
            font-size: 15px;
          }
          h4 {
            font-size: 10px;
          }

          .Button-1 {
            height: 40px;
            font-size: 10px;
          }
        }
      }
    }
  }
`;
