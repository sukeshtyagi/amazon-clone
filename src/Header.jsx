import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }] = useStateValue();
  console.log("Header re-rendered with user:", user.email);
  return (
    <div className="header">
      <NavLink to="/">
        <img
          src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
          alt="logo"
          className="header__logo"
        />
      </NavLink>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <NavLink to="/login">
            <div className="header__option__signIn">
              {user.email ? (
                <>
                  <span className="header__optionLineOne">
                    Hello {user.email}
                  </span>
                  <span className="header__optionLineTwo">Sign Out</span>
                </>
              ) : (
                <>
                  <span className="header__optionLineOne">Hello Guest</span>
                  <span className="header__optionLineTwo">Sign IN</span>
                </>
              )}
            </div>
          </NavLink>
        </div>

        <NavLink to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </NavLink>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <NavLink to="/checkout" className="header__shoppingBasketIcon">
          <div className="header__shoppingBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length || 0}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
