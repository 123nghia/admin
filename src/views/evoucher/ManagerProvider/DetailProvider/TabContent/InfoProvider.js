import React from "react";

function InfoProvider({ detailInfoProvider }) {
  const { addressInfo, brandName, email, logo, phone, vendorName, website } =
    detailInfoProvider;
  console.log(detailInfoProvider);

  return (
    <div className="tabContentItem" style={styles.tabContentItem}>
      <p className="modal-label">
        Tên công ty:
        <span className="modal-detail">{vendorName}</span>
      </p>
      <p className="modal-label">
        Tên thương hiệu: <span className="modal-detail">{brandName}</span>
      </p>
      <p className="modal-label">
        Địa chỉ: <span className="modal-detail">{addressInfo}</span>
      </p>
      <p className="modal-label">
        Email: <span className="modal-detail">{email}</span>
      </p>
      <p className="modal-label">
        Số điện thoại: <span className="modal-detail">{phone}</span>
      </p>
      <p className="modal-label">
        Slug: <span className="modal-detail">{}</span>
      </p>
      <p className="modal-label">
        Website: <span className="modal-detail">{website}</span>
      </p>
      <p className="modal-label">
        Logo: <span className="modal-detail">{logo}</span>
      </p>
    </div>
  );
}

export default InfoProvider;

const styles = {
  tabContentItem: {
    borderRadius: "4px",
    marginBottom: "5px",
    border: "1px solid #ccc",
    padding: "20px 15px",
    position: "relative",
  },
};
