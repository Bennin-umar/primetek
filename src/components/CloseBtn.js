import React from "react";

const CloseBtn = ({ children }) => {
  return (
    <div
      className="text-dark"
      style={{
        padding: 20,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
};

export default CloseBtn;
