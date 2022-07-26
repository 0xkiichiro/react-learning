import React, { memo } from "react";
import cw from "../assets/cw_logo.png";

//! react memo allows us to not render unneccessary parts when we wrap them around
//! first usage:
// const Header = React.memo(({ img }) => {
//   console.log("Rendering: Header Comp.");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="cw"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });

//! second usage:
const Header = ({ img }) => {
  console.log("Rendering: Header Comp.");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};
export default memo(Header);
