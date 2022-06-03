
function TabContentOverViewEvoucher({ dataStatistic }) {

  return (
    <>
      <div className="tabContentItem" style={styles.tabContentItem}>
        Số lượng voucher phát
        <a
          href="javascript:void(0)"
          className="btn-link"
          style={styles.btnLink}
          
        >
          {dataStatistic?.voucherCounted}
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
        Số lượng khách check in
        <a
          href="javascript:void(0)"
          className="btn-link"
          style={styles.btnLink}
       
        >
          {dataStatistic?.voucherCheckin}
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
        <a href="javascript:void(0)" className="btn-link" style={styles.btnLink}>
          {dataStatistic?.rateCheckin}
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
