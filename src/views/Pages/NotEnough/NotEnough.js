import { CButton, CLabel, CSelect, CTextarea, CRow, CCol } from "@coreui/react";

const goHome = ()=>{
    window.location.href = "/"
}
export default function NotEnough() {
  return (
    <>
      <div className="text-center">
        <h1>Không đủ quyền để truy cập trang này, hãy quay lại</h1>
        <CButton
          className="mt-3"
          shape="rounded-pill"
          variant=""
          color="info"
          style={styles.mgl5}
          size="lg"
          onClick={goHome}
        >
          Về trang chủ
        </CButton>
      </div>
    </>
  );
}

const styles = {
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
  },
  pagination: {
    marginRight: "5px",
  },
  flexLabel: {
    width: 100,
  },
  flexOption: {
    width: 300,
  },
  a: {
    textDecoration: "none",
  },
  floatRight: {
    float: "right",
    marginTop: "3px",
  },
  spinner: {
    width: "30px",
  },
  center: {
    textAlign: "center",
  },
  tbody: {
    height: "380px",
    overflowY: "auto",
  },
  wh25: {
    width: "25%",
    float: "left",
    height: "80px",
  },
  w5: {
    width: "15%",
    float: "left",
    height: "80px",
  },
  wa10: {
    width: "5%",
    float: "left",
    height: "80px",
  },
  row: {
    float: "left",
    width: "100%",
  },
  success: {
    color: "green",
  },
  danger: {
    color: "red",
  },
  mgl5: {
    marginLeft: "5px",
  },
  tags: {
    float: "right",
    marginRight: "5px",
  },
  searchInput: {
    width: "250px",
    display: "inline-block",
    marginRight: "5px",
  },
  userActive: {
    color: "green",
  },
  userPending: {
    color: "red",
  },
  nagemonNameCol: {
    width: "328px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "99999px",
  },
};
