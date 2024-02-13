import styled from "styled-components";

export const Wrapper = styled.section`
  .Main-Section {
    .Sub-Content-1 {
      margin-top: 40px;
    }
    .Sub-Content-2 {
      margin-top: 20px;

      .Main-Box {
        width: 100%;
        height: 800px;
        position: relative;
        background-color: red;
      }
      .Content-1 {
        position: absolute;
        top: 60%;
        right: 35%;
        color: white;
        text-align: center;

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
        }
        .navlink-no-decoration {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
`;
