import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, reducer] = useStateValue();

  return (
    <div className="header">
      <NavLink to="/">
        <img
          src="https://companieslogo.com/img/orig/AMZN_BIG-accd00da.png?t=1632523695"
          alt="logo"
          className="header__logo"
        />
      </NavLink>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <NavLink to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign IN</span>
          </div>
        </NavLink>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__shoppingBasket">
          <NavLink to="/checkout" className="header__shoppingBasketIcon">
            <ShoppingBasketIcon />
          </NavLink>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length || 0}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
