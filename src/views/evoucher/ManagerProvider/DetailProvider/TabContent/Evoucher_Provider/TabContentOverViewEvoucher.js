function TabContentOverViewEvoucher({ listOverviewEvoucher }) {
  console.log("TabContentOverViewEvoucher", listOverviewEvoucher);
  return (
    <>
      <div className="tabContentItem" style={styles.tabContentItem}>
        Số lượng voucher
        <a
          href=""
          className="btn-link"
          style={styles.btnLink}
          onClick={(e) =>
            this.setState({ modalVoucher: !this.state.modalVoucher })
          }
        >
          {listOverviewEvoucher.totalVoucher}
        </a>
        <span
          className="detail"
          style={styles.detail}
          onClick={(e) =>
            this.setState({ modalVoucher: !this.state.modalVoucher })
          }
        >
          Xem chi tiết
        </span>
      </div>
      <div className="tabContentItem" style={styles.tabContentItem}>
        Số lượng voucher phát
        <a
          href=""
          className="btn-link"
          style={styles.btnLink}
          onClick={(e) =>
            this.setState({
              modalVoucherSent: !this.state.modalVoucherSent,
            })
          }
        >
          {listOverviewEvoucher.countedVoucher}
        </a>
        <span
          className="detail"
          style={styles.detail}
          onClick={(e) =>
            this.setState({
              modalVoucherSent: !this.state.modalVoucherSent,
            })
          }
        >
          Xem chi tiết
        </span>
      </div>
      <div className="tabContentItem" style={styles.tabContentItem}>
        Tỉ lệ hoàn thành
        <a href="#" className="btn-link" style={styles.btnLink}>
          {listOverviewEvoucher.rateCheckComplete}%
        </a>
      </div>
      <div className="tabContentItem" style={styles.tabContentItem}>
        Số lượng khách check in
        <a
          href=""
          className="btn-link"
          style={styles.btnLink}
          onClick={(e) =>
            this.setState({
              modalCusCheckIn: !this.state.modalCusCheckIn,
            })
          }
        >
          {listOverviewEvoucher.customerChecIN}
        </a>
        <span
          className="detail"
          style={styles.detail}
          onClick={(e) =>
            this.setState({
              modalCusCheckIn: !this.state.modalCusCheckIn,
            })
          }
        >
          Xem chi tiết
        </span>
      </div>
      <div className="tabContentItem" style={styles.tabContentItem}>
        Tỉ lệ khách check in
        <a href="#" className="btn-link" style={styles.btnLink}>
          {listOverviewEvoucher.rateCheckIn}%
        </a>
      </div>
    </>
  );
}

const styles = {
  tabContentItem: {
    borderRadius: "4px",
    marginBottom: "5px",
    border: "1px solid #ccc",
    padding: "20px 15px",
    position: "relative",
  },
  btnLink: {
    color: "#fff",
    backgroundColor: "#1890ff",
    padding: "3px 5px",
    marginLeft: "20px",
    fontSize: "16px",
    borderRadius: "3px",
  },
  detail: {
    fontSize: "12px",
    color: "#1890ff",
    position: "absolute",
    right: "10px",
    bottom: "13px",
    cursor: "pointer",
  },
};

export default TabContentOverViewEvoucher;
