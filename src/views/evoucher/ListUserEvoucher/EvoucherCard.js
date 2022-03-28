import React, { useState } from "react";
import Box from "@mui/material/Box";
import backgroundVoucher from "./../../../assets/img/background-voucher.jpg_.webp";
import { Form, Space } from "antd";
import { CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import IframeModal from "../../../views/components/Iframe";
import Constants from "../../../contants/contants";
import { Timeline } from "antd";
import { SmileOutlined } from "@ant-design/icons";

function EvoucherCard({ detailUserVoucher }) {
  const { voucherCode, voucher, branch, skinHistory, create_at } =
    detailUserVoucher;

  const [idHistory, setIdHistory] = useState("");
  const [toggleHistory, setToggleHistory] = useState(false);

  function closeModal() {
    setToggleHistory(!toggleHistory);
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Mã voucher</h1>
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
          fontFamily: "Noto Sans",
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
            src="https://evoucher-api.applamdep.com/image_brand/logo24h.png"
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              border: "1px solid rgb(254, 73, 96)",
              backgroundColor: "rgb(255, 255, 255)",
              objectFit: "contain",
            }}
            alt="https://evoucher-api.applamdep.com/image_brand/logo24h.png"
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
                color: "rgb(10, 148, 244)",
                textAlign: "center",
                overflow: "hidden",
                textOverflow: "ellipsis",
                MozBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {branch}
              Seoul Spa
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
            justifyContent: "center",
          }}
        >
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

              fontWeight: 600,
              color: "rgb(10, 148, 244)",
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
              }}
            >
              {voucher[0].content}
            </span>
            {/* <span
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
            }}
          >
            %OFF
          </span> */}
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
                textOverflow: "ellipsis",
                color: "rgb(10, 148, 244)",
                width: "222px",
                lineHeight: "24px",
                overflow: "hidden",
                marginTop: "1.25rem",
              }}
            >
              {voucherCode}
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
                fontSize: "0.8rem",
                whiteSpace: "no-wrap",
                fontWeight: 400,
                textOverflow: "ellipsis",
                color: "rgb(10, 148, 244)",
                width: "222px",
                lineHeight: "24px",
                overflow: "hidden",
              }}
            >
              {voucher[0].from} {voucher[0].to}
              28-29 thg 3,2022
            </span>
          </div>
        </div>
      </Box>
      <h1 style={{ marginTop: "3rem" }}>
        Ngày soi da:
        <CButton
          shape="rounded-pill"
          variant="outline"
          color="info"
          size="md"
          style={{ marginLeft: "1rem" }}
          onClick={(e) => {
            setIdHistory(skinHistory);
            setToggleHistory(!toggleHistory);
          }}
        >
          {new Date(create_at).toLocaleDateString()}{" "}
          <CIcon name="cil-magnifying-glass" />
        </CButton>
      </h1>
      <IframeModal
        toggleView={toggleHistory}
        link={Constants.BASE_URL_HISTORY_SKIN + idHistory}
        closeModal={closeModal}
      />
    </Box>
  );
}

export default EvoucherCard;
