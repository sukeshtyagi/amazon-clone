import React,{useEffect} from "react";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Signout() {

  const [{}, dispatch] = useStateValue();


  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("userEmail");
    navigate("/login");

    dispatch({
      type: "SIGN_OUT",
      user: {},
    });

  }, []);

  return <></>;
}

export default Signout;
