import React, { Component } from 'react';

import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Input,
    ModalHeader, ModalBody, ModalFooter, Modal,
} from 'reactstrap';
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";

import { Select } from 'antd';

import {
    CBadge,
    CRow,
    CCol,
    CSelect,
    CButton,
    CFormGroup, CInputCheckbox, CLabel
} from '@coreui/react'

import Pagination from '@material-ui/lab/Pagination';
import 'moment-timezone';
import Constants from "./../../contants/contants";
import TextFieldGroup from "../../views/Common/TextFieldGroup";
import axios from 'axios'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import API_CONNECT from "../../functions/callAPI";
import { Box } from '@material-ui/core';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            salesSelector: [],
            saleList: [],
            data: [],
            key: '',
            keyRole: '',
            keyStatus: '',
            modalCom: false,
            dataApi: JSON.parse(localStorage.getItem('sales')) || [],

            action: 'new',
            Name: '',
            Email: '',
            Phone: '',
            Address: '',
            Company_Id: '',
            UserName: '',
            Password: '',
            Status: '',
            Title: '',
            SaleIds: '',
            LeadIds: '',
            Description: '',
            modalDelete: false,
            modalRole: false,
            arrPagination: [],
            indexPage: 0,
            dataCompany: [],
            dataRole: [],
            isLoading: false,
            token: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            userData: localStorage.getItem('user'),
            hidden: true,
            arrRoleSubAdmin: [],
            idChangeRole: "",
        };
    }
    async componentDidMount() {
        // this.getData();
        // this.getAllRole();
        await this.getAllSale();
        let arr = JSON.parse(localStorage.getItem('url'));

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].url == window.location.hash) {
                if (arr[i].isHidden == true) {
                    window.location.href = '#/'
                }
            }
        }
    };


    async getAllSale() {

        await axios.get(
            Constants.BASE_URL + Constants.GET_ALL_SALE,
        ).then(res => {

            this.setState({ saleList: res.data.data })
            console.log(res.data.data)
        })
    }
    async getAllRole() {
        const resRole = await axios({
            baseURL: Constants.BASE_URL,
            url: Constants.PLUGIN_LIST_ROLE,
            method: 'POST',
            headers: this.state.token
        });
        this.setState({ dataRole: resRole.data.data });
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

        this.setState({ arrPagination: arrTotal, data: arrTotal[this.state.indexPage] });
    }

    getData = async () => {
        const { userData } = this.state;
        console.log(userData)
        this.setState({ isLoading: true });
        const res = await API_CONNECT(Constants.LIST_SALE_GROUP, {
            SaleIds: JSON.parse(userData).sale_id,
            LeadIds: JSON.parse(userData).sale_id,

        }, this.state.token, "POST")

        let val = res.data;
        this.pagination(val);
        this.setState({ dataApi: val });

        let active = 0

        val.map(val => {
            if (val.Status == "Actived") {
                active = active + 1
            }
        })

        this.setState({ isLoading: false, totalActive: active });
        console.log("sales", JSON.parse(localStorage.getItem('sales')))
    }


    toggleModal(key) {
        if (key == 'new') {
            this.setState({
                modalCom: !this.state.modalCom,
                action: key,
                Title: '',
                Description: '',
                SaleIds: ''
            })
        }
    }

    onChange(key, val) {
        this.setState({ [key]: val })
    }

    handleChange = (value) => {
        this.setState({ salesSelector: value });
        // console.log(`selected ${value}`)
    }

    handleAddSale(saleInfo) {
        let active = 0;

        this.setState({ isLoading: true });

        const newDataApi = [...this.state.dataApi];

        console.log("newDataApi", newDataApi)

        newDataApi.push(saleInfo)

        this.setState({ dataApi: newDataApi })

        console.log(newDataApi)
        localStorage.setItem('sales', JSON.stringify(newDataApi));

        this.pagination(newDataApi);

        // console.log(this.state.dataApi)
        newDataApi.map(val => {
            if (val.Status == "Actived") {
                active = active + 1
            }
        })

        this.setState({ isLoading: false, totalActive: active });

    }
    async addUsers() {
        const { Description, Title, SaleIds, LeadIds, salesSelector } = this.state
        // if (Description == null || Description == ''
        //     || Title == null || Title == ''
        //     || SaleIds == null || SaleIds == '') {
        //     alert("Vui lòng nhập đầy đủ trường !!!");
        //     return
        // }

        const body = {
            Description,
            LeadIds,
            Title,
            SaleIds,
            saleGroup: salesSelector
        }
        this.setState({ isLoading: true });


        const res = await API_CONNECT(Constants.ADD_SALE_GROUP, body, "", "POST")

        if (res.is_success == true) {
            this.handleAddSale(body)
            // this.getData();
            this.setState({ modalCom: !this.state.modalCom });
            this.setState({
                errorMessage: ""
            })
        } else {
            // alert(res.message);
            this.setState({ isLoading: false });
        }
        if (res.status === 202) {

            this.setState({
                errorMessage: res.message
            });
            console.log(this.state.errorMessage)
        }
    }


    openUpdate(item) {
        const { dataApi } = this.state;


        const idxItem = dataApi.findIndex((data) => data.Title === item);

        this.setState({
            modalCom: !this.state.modalCom,
            action: "update",
            Title: dataApi[idxItem].Title,
            LeadIds: dataApi[idxItem].LeadIds,
            SaleIds: dataApi[idxItem].SaleIds,
            Description: dataApi[idxItem].Description,
        })


    }

    async updateUsers() {

        const { Title, SaleIds, LeadIds, Description, dataApi } = this.state
        console.log(Title, SaleIds, LeadIds, Description)

        const idxItem = dataApi.findIndex((data) => data.Title === Title);

        const newDataApi = [...dataApi]
        newDataApi.splice(idxItem, 1);
        newDataApi.push({ Title, SaleIds, LeadIds, Description });

        this.setState({ dataApi: newDataApi })
        this.setState({ modalCom: !this.state.modalCom })

        localStorage.setItem('sales', JSON.stringify(newDataApi));

        // if (Description == null || Description == ''
        //     || Title == null || Title == ''
        //     || SaleIds == null || SaleIds == '') {
        //     alert("Vui lòng nhập đầy đủ trường !!!");
        //     return
        // }
        // const body = {
        //     Description,
        //     LeadIds: SaleIds,
        //     Title,
        //     SaleIds,
        // }

        // this.setState({ isLoading: true });
        // const res = await API_CONNECT(Constants.UPDATE_SALE_GROUP, body, "", "POST")

        // if (res.is_success == true) {
        //     // this.getData();
        //     this.setState({ modalCom: !this.state.modalCom })
        // } else {
        //     alert(res.message);
        //     this.setState({ isLoading: false });
        // }
    }

    openDelete = (item) => {
        console.log(item)
        this.setState({
            modalDelete: !this.state.modalDelete,
            delete: item
        })
    }

    async delete() {
        this.setState({ isLoading: true });
        console.log(this.state.delete['_id'])
        const res = await API_CONNECT(Constants.DELETE_SALE_GROUP, {
            "id": this.state.delete['_id']
        }, "", "POST")

        if (res.is_success == true) {
            this.getData();
            this.setState({ modalDelete: !this.state.modalDelete, delete: null })
        } else {
            alert(res.message);
            this.setState({ isLoading: false });
        }

    }


    getBadge(status) {
        switch (status) {
            case 'Actived': return 'success'
            case 'Inactive': return 'secondary'
            case 'Locked': return 'warning'
            case 'Deactived': return 'danger'
            default: return 'primary'
        }
    }

    getLableRole(type) {
        switch (type) {
            case '0': return 'Quản lý soi da'
            case '1': return 'Quản lý trang điểm và tóc'
            case '2': return 'Quản lý người dùng'
        }
    }

    toggle(action = '') {
        this.setState({
            modal: !this.state.modal,
            image: '',
            url: '',
            isActive: false,
            isLoading: false,
            errors: {},
            action,
            position: 1,
            data: [],
            updated: '',
        });
    }

    inputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    goSearch() {
        this.getUsers();
    }

    async onChangeRole(item) {
        let body = {
            "user_id": item._id,
        }
        const res = await API_CONNECT(Constants.GET_ROLE_SUBADMIN, body, "", "POST")
        this.setState({ modalRole: !this.state.modalRole, arrRoleSubAdmin: res.data.sidebar_id, idChangeRole: item._id })
    }

    async onSaveRole() {
        const { arrRoleSubAdmin, idChangeRole } = this.state;
        let body = {
            "user_id": idChangeRole,
            "sidebar": arrRoleSubAdmin
        }

        const res = await API_CONNECT(Constants.ADD_ROLE_SUBADMIN, body, "", "POST")
        if (res.is_success == true) {
            this.getData();
            this.setState({ modalRole: !this.state.modalRole, arrRoleSubAdmin: [] })
        } else {
            alert(res.message);
            this.setState({ isLoading: false });
        }
    }

    handleChangeSaleIds = (value) => {
        this.setState({ SaleIds: value });
    }
    handleChangeLeadIds = (value) => {
        console.log(value)
        this.setState({ LeadIds: value });
    }

    render() {
        const { Option } = Select;
        const arrLevel = [

            {
                item: "1",
            },
            {
                item: "2",
            },
            {
                item: "3",
            },
        ];

        const { data, dataApi, key, action, arrPagination, arrRoleSubAdmin } = this.state;
        const { classes } = this.props;


        // console.log('dataApi', dataApi)

        if (!this.state.isLoading) {
            return (
                <div className="animated fadeIn">

                    <Row>
                        <Col>
                            <p style={styles.success}>{this.state.updated}</p>
                            <p style={styles.danger}>{this.state.deleted}</p>
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-align-justify title_header">
                                        Danh sách Nhóm Sales
                                    </i>


                                </CardHeader>
                                <CardBody>
                                    <div class="flex-center">
                                        <CButton
                                            color="info"
                                            style={{ marginBottom: "10px", marginRight: '10px' }}
                                            size="md"
                                            className="flex-center"
                                            onClick={e => this.toggleModal("new")}
                                        >
                                            <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                                            <p style={{ margin: "auto 0" }}>Thêm mới</p>
                                        </CButton>


                                    </div>
                                    <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="text-center">STT.</th>
                                                <th className="text-center">Tiêu đề</th>
                                                <th className="text-center">Nhóm sale</th>
                                                <th className="text-center">Nhóm trưởng</th>
                                                <th className="text-center">Mô tả</th>
                                                <th className="text-center">#</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td colSpan="9" hidden={this.state.hidden} className="text-center">Không tìm thấy dữ liệu</td>
                                            {
                                                dataApi !== undefined ?
                                                    dataApi.map((item, i) => {
                                                        console.log(item)
                                                        return (
                                                            <tr key={i}>
                                                                <td className="text-center">{i + 1}</td>
                                                                <td className="text-center">{item.Title}</td>
                                                                <td className="text-center">{item.SaleIds}</td>
                                                                <td className="text-center">{item.LeadIds}</td>
                                                                <td className="text-center">{item.Description}</td>
                                                                <td className="text-center">
                                                                    <CButton outline color="primary" size="sm" onClick={(e) => this.openUpdate(item.Title)} >Cập nhật</CButton>{' '}
                                                                    <CButton outline color="danger" size="sm" onClick={() => { this.openDelete(item) }}>Xoá</CButton>{' '}
                                                                    {/* <CButton outline color="success" size="sm" onClick={(e) => { this.onChangeRole(item) }}>Quyền</CButton> */}
                                                                </td>
                                                            </tr>
                                                        );
                                                    }) : ""
                                            }
                                        </tbody>
                                    </table>

                                </CardBody>
                            </Card>
                            <div style={{ float: 'right' }}>
                                <Pagination count={arrPagination.length} color="primary" onChange={(e, v) => {
                                    this.setState({ data: arrPagination[v - 1], indexPage: v - 1 })
                                }} />
                            </div>
                        </Col>
                    </Row>

                    <Modal isOpen={this.state.modalCom} className={this.props.className}>
                        <ModalHeader>{this.state.action == 'new' ? `Tạo mới` : `Cập nhật`}</ModalHeader>
                        <ModalBody>
                            <div className="text-center error_msg">
                                {this.state.errorMessage !== "" ? `${this.state.errorMessage} !!!` : null}

                            </div>

                            <TextFieldGroup
                                field="Title"
                                label="Tiêu đề"
                                value={this.state.Title}
                                placeholder={"Tiêu đề"}
                                // error={errors.title}
                                onChange={e => this.onChange("Title", e.target.value)}
                            // rows="5"
                            />


                            <CLabel>Nhóm sale</CLabel>
                            <Select
                                defaultValue={this.state.SaleIds}
                                onChange={this.handleChangeSaleIds}
                                placeholder="Chọn nhóm"
                                style={{ width: 200, marginBottom: 15 }}>
                                {this.state.saleList && this.state.saleList.map(opt => (
                                    <Option value={opt._id} key={opt._id}>{opt._id}</Option>
                                ))}
                            </Select>

                            <CLabel>Nhóm trưởng</CLabel>
                            <Select
                                defaultValue={this.state.LeadIds}
                                onChange={this.handleChangeLeadIds}
                                placeholder="Chọn nhóm trưởng"
                                style={{ width: 200, marginBottom: 15 }}>
                                {this.state.saleList && this.state.saleList.map(opt => (
                                    <Option value={opt.Name} key={opt._id}>{opt.Name}</Option>
                                ))}
                            </Select>

                            <TextFieldGroup
                                field="Description"
                                label="Mô tả"
                                value={this.state.Description}
                                placeholder={"Mô tả"}
                                onChange={e => this.onChange("Description", e.target.value)}
                            // rows="5"
                            />

                        </ModalBody>

                        <ModalFooter>
                            <CButton color="primary" onClick={e => { this.state.action === 'new' ? this.addUsers() : this.updateUsers() }} disabled={this.state.isLoading}>Lưu</CButton>{' '}
                            <CButton color="secondary" onClick={e => this.toggleModal("new")}>Đóng</CButton>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalRole} toggle={e => this.setState({ modalRole: !this.state.modalRole })} className={this.props.className}>
                        <ModalHeader toggle={e => this.setState({ modalRole: !this.state.modalRole })}>{`Phân quyền`}</ModalHeader>
                        <ModalBody>
                            {
                                ['0', '1', '2'].map((item, i) => {
                                    return (
                                        <CFormGroup variant="checkbox" className="checkbox">
                                            <CInputCheckbox
                                                id={item}
                                                defaultChecked={arrRoleSubAdmin.includes(item) == true ? true : false}
                                                name={item}
                                                value={item}
                                                onChange={(e) => {
                                                    if (e.target.checked == true) {
                                                        arrRoleSubAdmin.push(item);
                                                        this.setState({ arrRoleSubAdmin: arrRoleSubAdmin })
                                                    } else {
                                                        const index = (indx) => indx == item;
                                                        var currentIndex = arrRoleSubAdmin.findIndex(index)
                                                        arrRoleSubAdmin.splice(currentIndex, 1);
                                                        this.setState({ arrRoleSubAdmin: arrRoleSubAdmin })
                                                    }
                                                }}
                                            />
                                            <CLabel variant="checkbox" className="form-check-label" htmlFor={item}>{this.getLableRole(item)}</CLabel>
                                        </CFormGroup>
                                    );
                                })
                            }
                        </ModalBody>
                        <ModalFooter>
                            <CButton color="primary" onClick={e => { this.onSaveRole() }}>Lưu</CButton>{' '}
                            <CButton color="secondary" onClick={e => this.setState({ modalRole: !this.state.modalRole })}>Đóng</CButton>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
                        <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Xoá`}</ModalHeader>
                        <ModalBody>
                            <label htmlFor="tag">{`Bạn có chắc chắn xóa?`}</label>
                        </ModalBody>
                        <ModalFooter>
                            <CButton color="primary" onClick={e => this.delete()} disabled={this.state.isLoading}>Xoá</CButton>{' '}
                            <CButton color="secondary" onClick={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>Đóng</CButton>
                        </ModalFooter>
                    </Modal>
                </div >
            );
        }

        return (
            <div className="sweet-loading">
                <DotLoader css={override} size={50} color={"#123abc"} loading={this.state.isLoading} speedMultiplier={1.5} />
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

export default User;
