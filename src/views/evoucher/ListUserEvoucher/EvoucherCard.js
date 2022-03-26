import React from "react";
import Box from "@mui/material/Box";
import backgroundVoucher from "./../../../assets/img/background-voucher.jpg_.webp";

function EvoucherCard() {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "row",
        flexShrink: 0,
        alignContent: "flex-start",
        borderWidth: "0vw",
        borderStyle: "solid",
        borderColor: "black",
        margin: "0vw 12px 0vw 0vw",
        padding: "0vw",
        minWidth: "0vw",
        width: "340px",
        height: "172px",
        borderRadius: "18px",
        overflow: "hidden",
      }}
    >
      <img
        src={backgroundVoucher}
        alt={backgroundVoucher}
        style={{
          width: "340px",
          height: "172px",
          position: "absolute",
          left: "0vw",
          top: "0vw",
          objecFit: "contain",
        }}
      />
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          flexShrink: 0,
          placeContent: "flex-start center",
          borderWidth: "0vw",
          borderStyle: "solid",
          borderColor: "black",
          margin: "0vw",
          padding: "15px 0vw",
          minWidth: "0vw",
          width: 102,
          height: 172,
          alignItems: "center",
        }}
      >
        <img
          placeholder="//laz-img-cdn.alicdn.com/tfs/TB19HoKqQzoK1RjSZFlXXai4VXa-64-64.png"
          src="https://vn-test-11.slatic.net/shop/d5e177df16697b8a0fcc805642353223.jpeg_2200x2200q75.jpg_.webp"
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            border: "1px solid rgb(254, 73, 96)",
            backgroundColor: "rgb(255, 255, 255)",
            objectFit: "contain",
          }}
          alt="https://vn-test-11.slatic.net/shop/d5e177df16697b8a0fcc805642353223.jpeg_2200x2200q75.jpg_.webp"
        />
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            position: "relative",
            flexDirection: "column",
            flexShrink: 0,
            alignContent: "flex-start",
            borderWidth: "0vw",
            borderStyle: "solid",
            borderColor: "black",
            margin: "0vw",
            padding: "12px 2px 0vw",
            minWidth: "0vw",
            width: 108,
          }}
        >
          <span
            numberoflines={2}
            style={{
              borderWidth: 0,
              borderStyle: "solid",
              borderColor: "black",
              position: "relative",
              boxSizing: "border-box",
              display: "-webkit-box",
              flexDirection: "column",
              alignContent: "flex-start",
              flexShrink: 0,
              fontSize: 14,
              whiteSpace: "pre-wrap",
              color: "rgb(254, 73, 96)",
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontFamily: "NotoSans-Regular",
              MozBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            Pretty Valley Store
          </span>
        </div>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          flexShrink: 0,
          placeContent: "flex-start",
          borderWidth: "0vw",
          borderStyle: "solid",
          borderColor: "black",
          margin: "0vw",
          padding: "0vw 10px",
          minWidth: "0vw",
          width: 242,
          height: 172,
          alignItems: "flex-start",
        }}
      >
        <img
          src="//gw.alicdn.com/imgextra/i1/O1CN01GsPouz1YtdDrcOPFK_!!6000000003117-2-tps-138-42.png_140x10000.jpg"
          style={{
            width: 138,
            height: 42,
            position: "absolute",
            bottom: 13,
            left: 10,
            objectFit: "contain",
          }}
          alt=""
        />

        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            position: "relative",
            flexDirection: "row",
            flexShrink: 0,
            alignContent: "flex-start",
            borderWidth: "0vw",
            borderStyle: "solid",
            borderColor: "black",
            margin: "0vw",
            padding: "0vw",
            minWidth: "0vw",
          }}
        >
          <span
            className="text"
            style={{
              borderWidth: 0,
              borderStyle: "solid",
              borderColor: "black",
              position: "relative",
              boxSizing: "border-box",
              display: "block",
              flexDirection: "column",
              alignContent: "flex-start",
              flexShrink: 0,
              fontSize: 30,
              whiteSpace: "pre-wrap",
              fontWeight: 600,
              fontFamily: "NotoSans-SemiBold",
              color: "rgb(254, 73, 96)",
            }}
          >
            10
          </span>
          <span
            className="text"
            style={{
              borderWidth: 0,
              borderStyle: "solid",
              borderColor: "black",
              position: "relative",
              boxSizing: "border-box",
              display: "block",
              flexDirection: "column",
              alignContent: "flex-start",
              flexShrink: 0,
              fontSize: 20,
              whiteSpace: "pre-wrap",
              fontWeight: 600,
              marginRight: 4,
              marginTop: 10,
              fontFamily: "NotoSans-SemiBold",
              color: "rgb(254, 73, 96)",
            }}
          >
            %OFF
          </span>
        </div>
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            position: "relative",
            flexDirection: "column",
            flexShrink: 0,
            alignContent: "flex-start",
            borderWidth: "0vw",
            borderStyle: "solid",
            borderColor: "black",
            margin: "0vw",
            padding: "0vw",
            minWidth: "0vw",
          }}
        >
          <span
            className="text"
            style={{
              borderWidth: 0,
              borderStyle: "solid",
              borderColor: "black",
              position: "relative",
              display: "block",
              textAlign: "left",
              flexShrink: 0,
              fontSize: "22px",
              whiteSpace: "no-wrap",
              fontWeight: 400,
              fontFamily: "NotoSans-Regular",
              textOverflow: "ellipsis",
              color: "rgb(254, 73, 96)",
              width: "222px",
              lineHeight: "24px",
              overflow: "hidden",
            }}
          >
            29-29 thg 3,2022
          </span>
        </div>
      </div>
    </Box>
  );
}

export default EvoucherCard;
