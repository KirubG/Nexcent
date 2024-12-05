import React from "react";
import { styles } from "../../style";

const Sectionwrapper = (Component, id) =>
  function HOC() {
    return (
      <div className={` ${styles.paddingX} mx-auto z-0`}>
        <span className="hash-span" id={id}>
          &nbsp; &nbsp;
        </span>
        <Component />
      </div>
    );
  };

export default Sectionwrapper;
