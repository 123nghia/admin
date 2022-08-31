import { Component } from "react";
import { CButton } from "@coreui/react";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";

export default class Banner1 extends Component {
  SaveAllConfigWeb(value) {
    this.props.SaveAllConfigWeb(value);
  };
  setStateByName = (name, value) => {
    this.props.setStateByName(name, value);
  };
  onChangeImage = (e, name, name_link, name_show) => {
    this.props.onChangeImage(e, name, name_link, name_show);
  };
  openFormAddInfoCompany=(value)=>{
    this.props.openFormAddInfoCompany(value);
  }
  openFormEditInfoCompany = (value, item, i) => {
    this.props.openFormEditInfoCompany(value, item, i);
  }
  deleteInfoCompany = (value, i) => {
    this.props.deleteInfoCompany(value, i);
  }
  render() {
    return (
      <>    
        <div class="flex-end mt-3">
          <CButton
            color="info"
            style={{ marginBottom: "10px" }}
            size="md"
            className="btn-main"
            onClick={() => this.openFormAddInfoCompany("1")}
          >
            <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
            <p style={{ margin: "auto 0" }}>Thêm mới</p>
          </CButton>
        </div>
        <div className="table__overflow">
          <table
            ble
            className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
          >
            <thead className="thead-light">
              <tr>
                <th className="text-center">STT.</th>
                <th className="text-center">Tiêu đề</th>
                <th className="text-center">Mô tả</th>
                <th className="text-center">Hình ảnh</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.infoCompany
                ? this.props.infoCompany.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td className="text-center">{i + 1}</td>
                        <td className="text-center">{item.title}</td>
                        <td className="text-center">{item.content}</td>
                        <td className="text-center">
                          <img
                            style={{maxHeight: '160px'}}
                            src={item.image}
                            alt=""
                          />
                        </td>
                        <td className="text-center">
                          <div className="flex">
                            <CButton
                              shape="rounded-pill"
                              variant="ghost"
                              color="info"
                              style={styles.mgl5}
                              size="md"
                              onClick={() =>
                                this.openFormEditInfoCompany("1", item, i)
                              }
                            >
                              <FiEdit3
                                style={styles.icon}
                                className="icon"
                                name="cilPencil"
                              />
                            </CButton>{" "}
                            <CButton
                              shape="rounded-pill"
                              variant="ghost"
                              color="danger"
                              style={styles.mgl5}
                              onClick={() => this.deleteInfoCompany("1", i)}
                            >
                              <BsTrash
                                style={styles.icon}
                                className="icon"
                                name="cilTrash"
                              />
                            </CButton>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
const styles = {
  mgl5: {
    marginLeft: "5px",
  },
};
