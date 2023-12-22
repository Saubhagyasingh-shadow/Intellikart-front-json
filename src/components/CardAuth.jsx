
import React from "react";

const CardAuth = ({ children, className }) => {
  return (
    <div className={`rounded-md shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
};

export default CardAuth;
