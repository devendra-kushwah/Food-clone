import React, { useState } from "react";
import { MainHeader } from "./style";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Menu } from "@styled-icons/ionicons-outline/Menu";
import { Container, Badge } from "react-bootstrap";
import Navigation from "./Navigation";
import ErrorBoundary from "../../Components/ErrorBoundary";
import { ShoppingCart } from "@styled-icons/feather/ShoppingCart";

const Header = (props) => {
  const { qtyCount } = props;
  const [menu, setMenu] = useState(false);

  if (menu) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <MainHeader className="header fixed-top">
      <div className="navbar navigation">
        <Container>
          <div className="brand d-flex align-items-center">
            <NavLink className="navbar-brand" to="/">
              {/* <img src={`/eagles1.png`} alt="theagles" /> */}
              Lorem Logo
            </NavLink>
          </div>
          {/* <SearchBar data="data" /> */}
          {/* <span className="cart position-relative">
            <ShoppingCart size="30" />{" "}
            <span className="total-qty position-absolute">{qtyCount}</span>
          </span> */}

          {/* <div className="menu">
            <button>
              <Menu size="50" onClick={() => setMenu(true)} />
            </button>
            {menu && (
              <div
                onClick={() => setMenu(false)}
                className="overlay fixed-top text-hide"
              >
                overlay
              </div>
            )}
            <Navigation
              className={menu ? "open" : ""}
              closemenu={() => setMenu(false)}
            />
          </div> */}
        </Container>
      </div>
    </MainHeader>
  );
};

export default ErrorBoundary(Header);
