import React from "react";
import { CFooter } from "@coreui/react";

const getDateNow = () => {
  return new Date().getFullYear();
};

const TheFooter = () => {
  return (
    <CFooter fixed={false} style={{ justifyContent: "center", gap: "0.3rem" }}>
      &copy; {getDateNow()}{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://deal24h.vn/"
        style={{ color: "rgb(70, 128, 255)", fontWeight: "bold" }}
      >
        TIKITECH
      </a>{" "}
      COPYRIGHT. ALL RIGHTS RESERVED.
    </CFooter>
  );
};

export default React.memo(TheFooter);
