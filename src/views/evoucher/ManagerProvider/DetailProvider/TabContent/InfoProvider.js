import React from "react";
import FmdGoodSharpIcon from "@mui/icons-material/FmdGoodSharp";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import WebIcon from "@mui/icons-material/Web";

function InfoProvider({ detailInfoProvider }) {
  const {
    addressInfo,
    brandName,
    email,
    logo,
    phone,
    vendorName,
    website,
    slug,
  } = detailInfoProvider;
  console.log(detailInfoProvider);

  return (
    <div className="tabContentItem" style={styles.tabContentItem}>
      <div className="tabInfo-header">
        <div className="tabInfo-header__logo">{/* <img src={logo} /> */}</div>
        <div className="tabInfo-header__title">
          <h3 className="tabInfo-header__name">
            {vendorName ? vendorName : "Chưa có thông tin"}
          </h3>
        </div>
      </div>
      <div className="tabInfo-body">
        <div className="tabInfo-body__contact">
          <h5 className="tabInfo-body__contact-title">Thông tin liên hệ</h5>
          <ul className="tabInfo-body__contact-list">
            <li className="tabInfo-body__contact-item">
              <FmdGoodSharpIcon />
              <p className="tabInfo-body__contact-item-content">
                {addressInfo ? addressInfo : "Chưa có thông tin"}
              </p>
            </li>
            <li className="tabInfo-body__contact-item">
              <EmailIcon />
              <p className="tabInfo-body__contact-item-content">
                {email ? email : "Chưa có thông tin"}
              </p>
            </li>
            <li className="tabInfo-body__contact-item">
              <ContactPhoneIcon />
              <p className="tabInfo-body__contact-item-content">
                {phone ? phone : "Chưa có thông tin"}
              </p>
            </li>
          </ul>
        </div>
        <div className="tabInfo-body__contact ml-3">
          <h5 className="tabInfo-body__contact-title">Liên kết</h5>
          <ul className="tabInfo-body__contact-list">
            <li className="tabInfo-body__contact-item">
              <WebIcon />
              <p className="tabInfo-body__contact-item-content">
                {website ? website : "Chưa có thông tin"}
              </p>
            </li>
            <li className="tabInfo-body__contact-item">
              <b>Slug</b>
              <p className="tabInfo-body__contact-item-content">
                {slug ? slug : "Chưa có thông tin"}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InfoProvider;

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
