import React from "react";
import "./Twitter.css";

function Twitter(props) {
  const { src } = props;

  return (
    <div className="twitter-1">
      <img className="vector-9" src={src} />
    </div>
  );
}

export default Twitter;
