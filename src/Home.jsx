import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://s.hdnux.com/photos/01/22/16/43/21555441/4/rawImage.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="TLS1601"
            title="The Lean Startup"
            image="https://rukminim2.flixcart.com/image/416/416/koudfgw0/regionalbooks/r/x/m/the-lean-startup-original-imag37egg7hyqpmx.jpeg?q=70&crop=false"
            price={16.01}
            rating={4}
          />
          <Product
            id="TII2023"
            title="The Intelligent Investor"
            image="https://m.media-amazon.com/images/I/91+t0Di07FL._SY425_.jpg"
            price={30.11}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="VS3011"
            title="Veer Savarkar"
            image="https://m.media-amazon.com/images/I/41ZnGXIV1QL._SY445_SX342_.jpg"
            price={16.01}
            rating={5}
          />
          <Product
            id="IB0904"
            title="India that is Bharat"
            image="https://m.media-amazon.com/images/I/51zUHE2fTOL._SY445_SX342_.jpg"
            price={1995}
            rating={5}
          />
          <Product
            id="7MS1695"
            title="7 Mindset For Success,Happiness and Fulfilment"
            image="https://m.media-amazon.com/images/I/41QI2g0S+7L._SY445_SX342_.jpg"
            price={30.11}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="TSMM2021"
            title="The Science of Mind Management"
            image="https://m.media-amazon.com/images/I/41rY50pAxKL._SY445_SX342_.jpg"
            price={30.11}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
