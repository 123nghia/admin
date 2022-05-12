import React from "react";

import FmdGoodSharpIcon from "@mui/icons-material/FmdGoodSharp";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Tag } from "antd";

function InfoEndUser(propsInfoUser) {
  console.log(
    "propsInfoUser",
    propsInfoUser.propsInfoUser[0]?.detailInformation
  );

  return (
    <div className="tabContentItem" style={styles.tabContentItem}>
      <div className="tabInfo-header">
        <div className="tabInfo-header__icon-logo">
          <PersonOutlineOutlinedIcon
            style={{ width: "100px", height: "100px", color: "#333332cc" }}
          />
          <span className="tabInfo-status">
            <Tag
              color={
                propsInfoUser.propsInfoUser[0]?.detailInformation?.status ===
                "A"
                  ? "default"
                  : "default"
              }
            >
              {propsInfoUser.propsInfoUser[0]?.detailInformation?.status === "A"
                ? "Hoạt động"
                : "Không hoạt động"}
            </Tag>
          </span>
        
        </div>

        <div className="tabInfo-header__title">
          <h3 className="tabInfo-header__name tabInfo-header__name--user">
            {propsInfoUser.propsInfoUser[0]?.detailInformation?.name
              ? propsInfoUser.propsInfoUser[0]?.detailInformation?.name
              : "Chưa có thông tin"}
          </h3>
        </div>
      </div>
      <div className="tabInfo-body tabInfo-body--center">
        <div className="tabInfo-body__contact tabInfo-body__contact--center">
          <h5 className="tabInfo-body__contact-title text-center">
            Thông tin liên hệ
          </h5>
          <ul className="tabInfo-body__contact-list">
            <li className="tabInfo-body__contact-item">
              <FmdGoodSharpIcon />
              <p className="tabInfo-body__contact-item-content">
                {propsInfoUser.propsInfoUser[0]?.detailInformation?.addressHome
                  ? propsInfoUser.propsInfoUser[0]?.detailInformation
                      ?.addressHome
                  : "Chưa có thông tin"}
              </p>
            </li>
            <li className="tabInfo-body__contact-item">
              <EmailIcon />
              <p className="tabInfo-body__contact-item-content">
                {propsInfoUser.propsInfoUser[0]?.detailInformation?.email
                  ? propsInfoUser.propsInfoUser[0]?.detailInformation?.email
                  : "Chưa có thông tin"}
              </p>
            </li>
            <li className="tabInfo-body__contact-item">
              <ContactPhoneIcon />
              <p className="tabInfo-body__contact-item-content">
                {propsInfoUser.propsInfoUser[0]?.detailInformation?.phone
                  ? propsInfoUser.propsInfoUser[0]?.detailInformation?.phone
                  : "Chưa có thông tin"}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="tabInfo-footer">
        <div className="tabInfo-footer__date">
          Ngày đăng ký:{" "}
          {new Date(
            propsInfoUser.propsInfoUser[0]?.detailInformation?.create_at
          ).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}

export default InfoEndUser;

const styles = {
  tabContentItem: {
    borderRadius: "4px",
    marginBottom: "5px",
    padding: "20px 15px",
    position: "relative",
    backgroundColor: "#cccccc29",
    border: "1px solid #ccc",
  },
};
