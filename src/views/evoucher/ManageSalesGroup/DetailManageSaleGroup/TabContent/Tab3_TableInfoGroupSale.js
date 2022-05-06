import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

function InfoGroupSale() {
  return (
    <div className="tabContentItem" style={styles.tabContentItem}>
      <div className="tabInfo-header">
        <div className="tabInfo-header__icon-logo">
          <PeopleAltOutlinedIcon
            style={{ width: "80px", height: "80px", color: "#333332cc" }}
          />
        </div>
        <div className="tabInfo-header__title">
          <h3 className="tabInfo-header__name tabInfo-header__name--group-sale">
            Tên nhóm
          </h3>
        </div>
      </div>
      <p className="leader-group-sale">Trưởng nhóm: Nguyễn Văn A</p>
      <h5 className="total-member text-center total-campaign--group-sale">
        Tổng chiến dịch tham gia: <span>100</span>
      </h5>
      <div className="tabInfo-body">
        <div className="tabInfo-body__contact">
          <h5 className="tabInfo-body__contact-title">Thông tin liên hệ</h5>
          <ul className="tabInfo-body__contact-list">
            <li className="tabInfo-body__contact-item">
              <EmailIcon />
              <p className="tabInfo-body__contact-item-content"></p>
            </li>
            <li className="tabInfo-body__contact-item">
              <ContactPhoneIcon />
              <p className="tabInfo-body__contact-item-content"></p>
            </li>
          </ul>
        </div>
      </div>
      <div className="tabInfo-footer">
        <div className="tabInfo-footer__date">
          Ngày tạo nhóm: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}

export default InfoGroupSale;

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
