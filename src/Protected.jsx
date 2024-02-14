import React from "react";
import "./Protected.css";
import { useStateValue } from "./StateProvider";

function Protected(props) {
  const Component = props.cmp;
  const [{ user }] = useStateValue();
  console.log(user)

  return (
    <>
      <div className="protected">
        <h3>Protected</h3>
      </div>
      {user && <Component />}
    </>
  );
}

export default Protected;
