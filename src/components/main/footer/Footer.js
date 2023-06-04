import React from "react";
import Social from "../Resume/Social";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          style={{
            display: "flex",
            background: "black",
            color: "white",
            padding: 15,
            alignItems: "center",
            borderTop: 1,
            borderTopColor: "white",
          }}
        >
          <div style={{ flex: 2 }}>
            <h4> &copy; copyRight 2023 </h4>
          </div>
          <div style={{ flex: 2 }}>
            <Social />
          </div>
          <div style={{ flex: 2 }}>ZuDskyy</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
