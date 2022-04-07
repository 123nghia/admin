import React from "react";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

function DotLoading() {
  return (
    <div className="sweet-loading">
      <DotLoader
        css={override}
        size={50}
        color={"#123abc"}
        speedMultiplier={1.5}
      />
    </div>
  );
}
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default DotLoading;
