import styled from "styled-components";

export const Wrapper = styled.section`
  .Main-Navbar {
    .navbar {
      .Shop-icon {
        font-size: 50px;
        color: #a11967;
      }
      .Search-icon {
        color: black;
      }
      .fa-icon {
        font-size: 28px;
        color: #a11967;
      }
    }
    .navbar-brand {
      display: flex;
    }
    .Main-ul {
      .nav-item {
        margin: 10px;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .collapse {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
  @media only screen and (max-width: 992px) {
    .Main-ul {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;
