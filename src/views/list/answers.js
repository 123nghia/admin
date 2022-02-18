import React, { Component } from "react";
import CIcon from "@coreui/icons-react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  

  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
} from "reactstrap";

import { CButton,CTextarea ,CRow, CCol } from "@coreui/react";

import API_CONNECT from "../../functions/callAPI";
import Pagination from "@material-ui/lab/Pagination";
import "moment-timezone";
import Constants from "../../contants/contants";
import TextFieldGroup from "../Common/TextFieldGroup";
import axios from "axios";
import md5 from "md5";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");

class EndUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: "",
      totalActive: 0,
      modalCom: false,
      updated: "",
      dataApi: [],
      hidden: false,
      action: "new",
      email: "",
      username: "",
      actionQues: "new",
      phone: "",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      type: localStorage.getItem("type"),
      user: localStorage.getItem("user"),
      isLoading: false,
      openHomeItem: false,
      dataQues: [
        {
          name : "Phong",
          number : "0356",
          answer1 : "A",
          answer2 : "B"
        },
        {
          name : "Phong",
          number : "0356",
          answer1 : "A",
          answer2 : "B"
        },
      ],
      modalQues: false,
      actionAddAnswer: "new",
      idUpdateCurrent: null,
      dataQuesChoose: [],
      objectQues: [],
      keyQues: "",
      answer3: false,
      answerQues2: "",
      answerQues3: "",
      answerQues4: "",

      keyQues3: "",
      keyQues4: "",

      keyQues2: "",
    };
  }

  async componentDidMount() {
    this.getDataQues();
    const { type } = this.state;

    // this.getData();

    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url == window.location.hash) {
        if (arr[i].isHidden == true) {
          window.location.href = "#/";
        }
      }
    }
  }

   pagination(dataApi) {
    var i, j, temparray, chunk = 5;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (arrTotal.length == 0) {
      this.setState({
        hidden: false
      })
    } else {
      this.setState({
        hidden: true
      })
    }

    this.setState({ arrPagination: arrTotal, data: arrTotal[0] });
  }
  async getDataQues() {
  
    var baseUrlapi = Constants.BASE_URL;
    var port = Constants.GET_ANSWERS_CUSTOMER;
    let url = baseUrlapi + port;
    await axios.get(url).then((res) => {
      console.log(res);
      let val = res.data.data
      this.pagination(val);
      this.setState({ dataApi: val });

      let active = 0;

      this.setState({ isLoading: false, totalActive: active });
      this.setState({
        dataQues: res.data.data,
      });
    });
  }
  getData = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_END_USER,
      method: "POST",
    }).then((res) => {
      console.log("end user", res.data.data);

      let val = res.data.data;
      this.pagination(val);
      this.setState({ dataApi: val });

      let active = 0;

      this.setState({ isLoading: false, totalActive: active });
    });
  };

  searchKey() {
    const { indexPage, key } = this.state;
    // this.setState({ key: key })

    if (key != "") {
      let d = [];
      this.state.dataApi.map((val) => {
        if (
          val.email.toLocaleUpperCase().includes(key.toLocaleUpperCase()) ||
          val.phone.toLocaleUpperCase().includes(key.toLocaleUpperCase())
        ) {
          d.push(val);
        }
      });
      let active = 0;

      d.map((val) => {
        if (val.Status == "Actived") {
          active = active + 1;
        }
      });

      this.setState({ data: d, totalActive: active });
    } else {
      let active = 0;

      this.state.dataApi.map((val) => {
        if (val.Status == "Actived") {
          active = active + 1;
        }
      });

      this.setState({
        data: this.state.arrPagination[indexPage],
        totalActive: active,
      });
    }
  }

  actionSearch(e, name_action) {
    this.setState(
      {
        [name_action]: e.target.value,
      },
      () => {
        this.searchKey();
      }
    );
  }

  resetSearch() {
    this.setState(
      {
        key: "",
      },
      () => {
        this.searchKey();
      }
    );
  }

  onChange(key, val) {
    this.setState({ [key]: val });
  }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      email: item.email,
      phone: item.phone,
      username: item.username,
      id: item["_id"],
    });
  }

  async updateUser() {
    const { email, phone, password, username } = this.state;

    if (
      email == null ||
      email == "" ||
      phone == null ||
      phone == "" ||
      username == null ||
      username == ""
    ) {
      alert("Hãy nhập đầy đủ trường !!!");
      return;
    }

    const body = {
      email: email,
      phone: phone,
      username: username,
      id: this.state.id,
    };

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_END_USER,
      method: "POST",
      data: body,
    });

    if (res.status == 200) {
      this.getData();

      this.setState({ modalCom: !this.state.modalCom });
    } else {
      alert("Cập nhật thất bại");
      this.setState({ isLoading: false });
    }
  }

  openDelete = (item) => {
    this.setState({
      modalDelete: !this.state.modalDelete,
      id: item._id,
    });
  };

  async delete() {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.DELETE_END_USER,
      method: "POST",
      data: {
        id: this.state.id,
      },
    });

    if (res.status == 200) {
      this.getData();

      this.setState({ modalDelete: !this.state.modalDelete, delete: null });
    } else {
      alert("Xóa sản phẩm thất bại");
      this.setState({ isLoading: false });
    }
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  getBadge(status) {
    switch (status) {
      case "Actived":
        return "success";
      case "Inactive":
        return "secondary";
      case "Locked":
        return "warning";
      case "Deactived":
        return "danger";
      default:
        return "primary";
    }
  }
 
  openAddQuestion() {
    const { dataQues } = this.state;
    if (dataQues && dataQues.length > 1) {
      alert("Đã vượt quá mức câu hỏi cho phép");
    } else {
      this.setState({
        actionQues: "new",
        modalQues: true,
        dataQuesChoose: [],
      });
    }
  }

  async addQuess() {
    const { titleQues, answerQues,answerQues2,answerQues3,answerQues4,keyQues4,
      keyQues,keyQues2,keyQues3, objectQues } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let copy;
    if (objectQues === null) {
      copy = [];
    } else {
      copy = objectQues;
    }
    if(answerQues !== ""){
      copy.push({ value: answerQues, key: keyQues });

    }
    if(answerQues2 !== ""){
      copy.push({ value: answerQues2, key: keyQues2 });

    }
    if(answerQues3 !== ""){
      copy.push({ value: answerQues3, key: keyQues3 });

    }   
    if(answerQues4 !== ""){
      copy.push({ value: answerQues4, key: keyQues4 });

    }  
    let url = baseUrlapi + "api/question/add";
    await axios
      .post(url, {
        questionTitle: titleQues,
        questionAnswer: copy,
      })
      .then((res) => {
        this.getDataQues();
        this.setState({ modalQues: false });
      });
  }
  OpenupdateQues(data,i) {
    const {dataQues} = this.state
    this.setState({
      actionQues: "edit",
      modalQues: true,
      titleQues: data.QuestionTitle,
      idUpdateCurrent: data._id,
      dataQuesChoose: data,
      objectQues: dataQues[i].QuestionAnswer,

     

    },()=>{
      console.log(this.state.objectQues)
    if(this.state.objectQues.length===1){
      this.setState({
        answerQues : this.state.objectQues[0].value,
        keyQues : this.state.objectQues[0].key,
      })
    }
    else if(this.state.objectQues.length===2){
      this.setState({
        answerQues : this.state.objectQues[0].value,
        answerQues2 : this.state.objectQues[1].value,
        keyQues : this.state.objectQues[0].key,
        keyQues2 : this.state.objectQues[1].key,
        
      })
    }
    else if(this.state.objectQues.length===3){
      this.setState({
        answerQues : this.state.objectQues[0].value,
        answerQues2 : this.state.objectQues[1].value,
        keyQues : this.state.objectQues[0].key,
        answerQues3 : this.state.objectQues[2].value,

        keyQues2 : this.state.objectQues[1].key,
        keyQues3 : this.state.objectQues[2].key,
        
      })
    }
    else{
      this.setState({
        answerQues : this.state.objectQues[0].value,
        answerQues2 : this.state.objectQues[1].value,
        answerQues3 : this.state.objectQues[2].value,
        answerQues4 : this.state.objectQues[3].value,

        keyQues : this.state.objectQues[0].key,
        keyQues2 : this.state.objectQues[1].key,
        keyQues3 : this.state.objectQues[2].key,
        keyQues4 : this.state.objectQues[3].key,


      })
    }
    });
    
  }
  async updateQues() {
    const { titleQues, answerQues,answerQues2,answerQues3,answerQues4,keyQues4,
      keyQues,keyQues2,keyQues3, objectQues, idUpdateCurrent } =
      this.state;
    let copy = [];

    if(answerQues !== ""){
      copy.push({ value: answerQues, key: keyQues });

    }
    if(answerQues2 !== ""){
      copy.push({ value: answerQues2, key: keyQues2 });

    }
    if(answerQues3 !== ""){
      copy.push({ value: answerQues3, key: keyQues3 });

    }  
    if(answerQues4 !== ""){
      copy.push({ value: answerQues4, key: keyQues4 });

    }  
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/question/update";
    await axios
      .post(url, {
        questionTitle: titleQues,
        questionAnswer: copy,
        id: idUpdateCurrent,
      })
      .then((res) => {
        this.getDataQues();
        this.setState({ modalQues: false });
      });
  }
  async deleteQues(item) {
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/question/delete";
    await axios
      .post(url, {
        id: item._id,
      })
      .then((res) => {
        this.getDataQues();
      });
  }
  async addAnswer() {
    const { idUpdateCurrent, objectQues,
      answerQues,answerQues2,answerQues3,answerQues4,
      keyQues,keyQues2,keyQues3,keyQues4
    } = this.state;

    let copy;
    if (objectQues === null) {
      copy = [];
    } else {
      copy = objectQues;
    }
       

    


    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/question/addAnswer";
    await axios
      .post(url, {
        QuestionAnswer: copy,
        id: idUpdateCurrent,
      })
      .then((res) => {
        this.getDataQues();
        this.setState({ modalQues: false });
      });
  }
  OpenaddAnswer(item) {
    this.setState({
      actionAddAnswer: "new",
      modalAddAnswer: true,
      idUpdateCurrent: item._id,
      objectQues: item.QuestionAnswer,
      answer3 : false,
      answerQues: "",
      answerQues2: "",
      answerQues3: "",
      answerQues4: "",
      keyQues4 : "",

      keyQues2 : "",
      keyQues3 : "",
      keyQues : "",
    });
  }
  addAnswer3 = () => {
    if (this.state.answer3) {
      alert("Đáp án tối đa là 3");
    } else {
      this.setState({
        answer3: true,
      });
    }
  };
  async removeVoucher(item){
    var baseUrlapi = Constants.BASE_URL;
    let port = Constants.DELETE_ANSWERS_CUSTOMER
    let url = baseUrlapi + port;
      await axios.post(url,{
        id : item._id
      }).then((res) => {
        this.getDataQues();
      });
  }
  render() {
    const {
      answer3,
      answerQues2,
      keyQues3,
      keyQues2,
      answerQues3,
      data,
      arrPagination,
      answerQues,
      keyQues,
      key,
      openHomeItem,
      answerQues4,
      keyQues4,

      actionAddAnswer,
      dataQuesChoose,
      dataQues,
      modalQues,
    } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <div>
            {/* <div class="text-center">
              <CButton
                outline
                color="info"
                size="ld"
                onClick={() => this.openAddQuestion()}
              >
               
                Thêm mới câu hỏi
              </CButton>{" "}
            </div> */}
            <table
                                ble
                                className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
                              >
                                <thead className="thead-light">
                                  <tr>
                                    <th className="text-center">STT.</th>
                                    <th className="text-center">Tên khách hàng</th>
                                    <th className="text-center">Số điện thoại</th>
                                    <th className="text-center">Câu hỏi</th>
                                    <th className="text-center">Câu trả lời</th>
                                    <th className="text-center">#</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {dataQues &&
                                    dataQues.length > 0
                                    ? dataQues.map((child, i) => {
                                        return (
                                          <tr key={i}>
                                            <td className="text-center">
                                              {i + 1}
                                            </td>
                                            <td className="text-center">
                                              {child.fullName}
                                            </td>
                                            <td className="text-center">
                                              {child.phone}
                                            </td>
                                            <td className="text-center">
                                              {child.questionTitle}
                                            </td>
                                            <td className="text-center">
                                              {child.answerId}
                                            </td>
                                            <td>
                                        
                                  <CButton outline color="danger" size="sm" onClick={(e) => { this.removeVoucher(child) }}>
                                    <CIcon name="cilTrash" />
                                  </CButton>
                                            </td>
                                          </tr>
                                        );
                                      })
                                    : null}
                                </tbody>
                              </table>
                              <div style={{ float: 'right' }}>
                <Pagination count={arrPagination.length} color="primary" onChange={(e, v) => {
                  this.setState({ dataQues: arrPagination[v - 1], indexPage: v - 1 })
                }} />
              </div>
          </div>

          <Modal isOpen={this.state.modalQues} className={this.props.className}>
            <ModalHeader>
              {this.state.actionQues == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="titleQues"
                label="Tiêu đề câu hỏi"
                value={this.state.titleQues}
                placeholder={""}
                // error={errors.title}
                onChange={(e) => this.setState({ titleQues: e.target.value })}
                // rows="5"
              />

              <div className="text-center">
              <label>Đáp án 1</label>
              </div>
              <CTextarea
               field="answerQues"
                label="Nội dung"
                value={answerQues}
                placeholder={""}
                // error={errors.title}
                onChange={(e) => this.setState({ answerQues: e.target.value })}
                rows="3"

              />
            
              <TextFieldGroup
                field="keyQues"
                label="Mã"
                value={keyQues}
                placeholder={""}
                // error={errors.title}
                onChange={(e) => this.setState({ keyQues: e.target.value })}
              />
              <div className="text-center">

              <label>Đáp án 2</label>
              </div>
              <CTextarea
               field="answerQues2"
                label="Nội dung"
                value={answerQues2}
                placeholder={""}
                // error={errors.title}
                onChange={(e) => this.setState({ answerQues2: e.target.value })}

                rows="3"

              />
             
              <TextFieldGroup
                field="keyQues2"
                label="Mã"
                value={keyQues2}
                placeholder={""}
                // error={errors.title}
                onChange={(e) => this.setState({ keyQues2: e.target.value })}
              />
              <div className="text-center">

<label>Đáp án 3</label>
</div>
<CTextarea
          field="answerQues3"
  label="Nội dung"
  value={answerQues3}
  placeholder={""}
  // error={errors.title}
  onChange={(e) => this.setState({ answerQues3: e.target.value })}

                rows="3"

              />

<TextFieldGroup
  field="keyQues3"
  label="Mã"
  value={keyQues3}
  placeholder={""}
  // error={errors.title}
  onChange={(e) => this.setState({ keyQues3: e.target.value })}
/>
             
              <div className="text-center">

                  <label>Đáp án 4</label>
                  </div>
                  <CTextarea
   field="answerQues4"
                    label="Nội dung"
                    value={answerQues4}
                    placeholder={""}
                    // error={errors.title}
                    onChange={(e) =>
                      this.setState({ answerQues4: e.target.value })
                    }

                rows="3"

              />
                 
                  <TextFieldGroup
                    field="keyQues4"
                    label="Mã"
                    value={keyQues4}
                    placeholder={""}
                    // error={errors.title}
                    onChange={(e) =>
                      this.setState({ keyQues4: e.target.value })
                    }
                  />
               
              
              {/* <CButton
                color="primary"
                onClick={(e) => {
                  this.addAnswer4();
                }}
                disabled={this.state.isLoading}
              >
                Thêm đáp án
              </CButton>{" "} */}
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.actionQues === "new"
                    ? this.addQuess()
                    : this.updateQues();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({ modalQues: !this.state.modalQues })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>

          <Modal
            isOpen={this.state.modalAddAnswer}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.actionAddAnswer == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="answerQues"
                label="Câu trả lời"
                value={this.state.answerQues}
                placeholder={""}
                // error={errors.title}
                onChange={(e) => this.setState({ answerQues: e.target.value })}
                // rows="5"
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.actionAddAnswer === "new"
                    ? this.addAnswer()
                    : this.updateQues();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({ modalAddAnswer: !this.state.modalAddAnswer })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>
              {this.state.action == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="username"
                label="Tên đăng nhập"
                value={this.state.username}
                placeholder={"Tên đăng nhập"}
                // error={errors.title}
                onChange={(e) => this.onChange("username", e.target.value)}
                // rows="5"
              />

              <TextFieldGroup
                field="name"
                label="Email"
                value={this.state.email}
                placeholder={"Email"}
                type={"email"}
                // error={errors.title}
                onChange={(e) => this.onChange("email", e.target.value)}
                // rows="5"
              />

              <TextFieldGroup
                field="phone"
                label="Số điện thoại"
                value={this.state.phone}
                placeholder={"Số điện thoại"}
                // error={errors.title}
                onChange={(e) => this.onChange("phone", e.target.value)}
                // rows="5"
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.action === "new"
                    ? this.addRoles()
                    : this.updateUser();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({ modalCom: !this.state.modalCom })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>

          <Modal
            isOpen={this.state.modalDelete}
            toggle={(e) =>
              this.setState({
                modalDelete: !this.state.modalDelete,
                delete: null,
              })
            }
            className={this.props.className}
          >
            <ModalHeader
              toggle={(e) =>
                this.setState({
                  modalDelete: !this.state.modalDelete,
                  delete: null,
                })
              }
            >{`Xoá`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Xác nhận xóa !!!`}</label>
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => this.delete()}
                disabled={this.state.isLoading}
              >
                Xoá
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({
                    modalDelete: !this.state.modalDelete,
                    delete: null,
                  })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
    return (
      <div className="sweet-loading">
        <DotLoader
          css={override}
          size={50}
          color={"#123abc"}
          loading={this.state.isLoading}
          speedMultiplier={1.5}
        />
      </div>
    );
  }
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const styles = {
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
    width: "190px",
    display: "inline-block",
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

export default EndUser;
