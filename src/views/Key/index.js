import React, { Component } from 'react';

import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Table, Button, Input,
    ModalHeader, ModalBody, ModalFooter, Modal,
    Alert
} from 'reactstrap';
import 'moment-timezone';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextArea from "../Common/TextArea";
import TextFieldGroup from "../Common/TextFieldGroup";
import Pagination from "react-js-pagination";
import axios from 'axios'
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            key: '',
            activePage: 1,
            page: 1,
            itemsCount: 0,
            limit: 20,
            totalActive: 0,
            modalCom: false,
            viewingUser: {},
            communities: [],
            updated: '',
            dataApi: [],
            action: 'new',
            Name: '',
            Company_Id: '',
            Type_Key: '',
            Start_Date: new Date(),
            End_Date: new Date(),
            Status: '',
            Value: '',
            modalDelete: false,
            delete: null,
            dataCompany: [],
            currentCompany: '',
            dataTypeKey: [],
            currentTypeKey: '',
            arrPagination: [],
            indexPage: 0
        };
    }
    async componentDidMount() {
        this.getData()
    }

    pagination(dataApi) {
        var i, j, temparray, chunk = 5;
        var arrTotal = [];
        for (i = 0, j = dataApi.length; i < j; i += chunk) {
            temparray = dataApi.slice(i, i + chunk);
            arrTotal.push(temparray);
        }
        this.setState({ arrPagination: arrTotal, data: arrTotal[0] });
    }

    getData = async () => {
        this.setState({ isLoading: true });
        const res = await axios({
            baseURL: 'http://thanhvien.applamdep.com',
            url: '/api/list-key',
            method: 'GET',
        });

        this.pagination(res.data.data);
        this.setState({ dataApi: res.data.data });

        let active = 0

        res.data.data.map(val => {
            if (val.Status == "Actived") {
                active = active + 1
            }
        })

        this.setState({ isLoading: false, totalActive: active });
    }

    searchKey(key) {
        const { indexPage } = this.state;
        this.setState({ key: key })

        if (key != '') {
            let d = []
            this.state.dataApi.map(val => {
                if (val.Name.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {
                    d.push(val)
                }
            })
            let active = 0

            d.map(val => {
                if (val.Status == "Actived") {
                    active = active + 1
                }
            })

            this.setState({ data: d, totalActive: active })
        } else {
            let active = 0

            this.state.dataApi.map(val => {
                if (val.Status == "Actived") {
                    active = active + 1
                }
            })

            this.setState({ data: this.state.arrPagination[indexPage], totalActive: active })
        }
    }

    async toggleModal(key) {
        await this.getCompanyData()
        await this.getTypeKeyData()
        if (key == 'new') {
            this.setState({
                modalCom: !this.state.modalCom,
                action: key,
                Name: '',
                Company_Id: '',
                Type_Key: '',
                Start_Date: new Date(),
                End_Date: new Date(),
                Value: ''
            })
        }
    }

    onChange(key, val) {
        this.setState({ [key]: val })
    }

    async addUser() {
        const { Name, Company_Id, Type_Key, Start_Date, End_Date, Value } = this.state

        if (Name == null || Name == '') {
            alert("Please fill in all the requirements");
            return
        }

        const body = {
            Name: Name,
            Company_Id: Company_Id,
            Type_Key: Type_Key,
            Start_Date: Start_Date,
            End_Date: End_Date,
            Value: Value
        }

        this.setState({ isLoading: true });
        const res = await axios({
            baseURL: 'http://thanhvien.applamdep.com/',
            url: '/api/add-key',
            method: 'PUT',
            data: body
        });

        if (res.data.is_success == true) {
            this.getData();
            this.setState({ modalCom: !this.state.modalCom })
        } else {
            alert(res.data.message);
            this.setState({ isLoading: false });
        }
    }

    async openUpdate(item) {
        await this.getCompanyData(item.Company_Id)
        await this.getTypeKeyData(item.Type_Key)

        this.setState({
            modalCom: !this.state.modalCom,
            action: "update",
            Name: item.Name,
            Company_Id: item.Company_Id,
            Type_Key: item.Type_Key,
            Start_Date: item.Start_Date,
            End_Date: item.End_Date,
            Value: item.Value,
            id: item['_id'],
            Status: item.Status
        })
    }

    async updateUser() {
        const { Name, Company_Id, Type_Key, Start_Date, End_Date, Value, Status } = this.state

        if (Name == null || Name == '') {
            alert("Please fill in all the requirements");
            return
        }

        const body = {
            Name: Name,
            Company_Id: Company_Id,
            Type_Key: Type_Key,
            Start_Date: Start_Date,
            End_Date: End_Date,
            Value: Value,
            id: this.state.id,
            Status: Status
        }

        this.setState({ isLoading: true });
        const res = await axios({
            baseURL: 'http://thanhvien.applamdep.com',
            url: '/api/update-key',
            method: 'POST',
            data: body
        });

        if (res.data.is_success == true) {
            this.getData();
            this.setState({ modalCom: !this.state.modalCom })
        } else {
            alert(res.data.message);
            this.setState({ isLoading: false });
        }
    }

    openDelete = (item) => {
        this.setState({
            modalDelete: !this.state.modalDelete,
            delete: item
        })
    }

    async delete() {
        this.setState({ isLoading: true });
        const res = await axios({
            baseURL: 'http://thanhvien.applamdep.com',
            url: '/api/delete-key',
            method: 'DELETE',
            data: {
                "id": this.state.delete['_id']
            }
        });

        if (res.data.is_success == true) {
            this.getData();
            this.setState({ modalDelete: !this.state.modalDelete, delete: null })
        } else {
            alert(res.data.message);
            this.setState({ isLoading: false });
        }

    }

    getUsers(page = 1) {
        const limit = this.state.limit;
        const key = this.state.key || '';
        const fetchData = {
            method: 'GET',
            headers: headers
        };
        fetch(global.BASE_URL + '/admin/users?key=' + key + '&page=' + page + '&limit=' + limit, fetchData).then(users => {
            users.json().then(result => {
                this.setState({
                    data: result.data,
                    itemsCount: result.total,
                    activePage: page,
                    totalActive: result.totalActive,
                    updated: '',
                });
            })
        }).catch(console.log);
    }

    async getCompanyData(id) {
        const resCompany = await axios({
            baseURL: 'http://thanhvien.applamdep.com',
            url: '/api/list-company',
            method: 'GET',
        });

        if (id != '' || id != undefined) {
            const currentC = await axios({
                baseURL: 'http://thanhvien.applamdep.com',
                url: '/api/list-company?id=' + id,
                method: 'GET',
            });
            if (currentC.data.data != null || currentC.data.data != undefined) {
                this.setState({ currentCompany: currentC.data.data.Name });
            }
        }
        this.setState({ dataCompany: resCompany.data.data });
    }

    async getTypeKeyData(id) {
        const resType = await axios({
            baseURL: 'http://thanhvien.applamdep.com',
            url: '/api/list-typekey',
            method: 'GET',
        });

        if (id != '' || id != undefined) {
            const currentTypeKey = await axios({
                baseURL: 'http://thanhvien.applamdep.com',
                url: '/api/list-typekey?id=' + id,
                method: 'GET',
            });
            if (currentTypeKey.data.data != null || currentTypeKey.data.data != undefined) {
                this.setState({ currentTypeKey: currentTypeKey.data.data.Name });
            }
        }
        this.setState({ dataTypeKey: resType.data.data });
    }

    inputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { data, key, viewingUser, communities, dataCompany,
            currentCompany, dataTypeKey, currentTypeKey, action, arrPagination, indexPage } = this.state;

        if (!this.state.isLoading) {
            return (
                <div className="animated fadeIn">
                    <Row>
                        <Col>
                            <p style={styles.success}>{this.state.updated}</p>
                            <p style={styles.danger}>{this.state.deleted}</p>
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-align-justify"></i> USERS (Total: {this.state.data != undefined || this.state.data != null ? 
                                        this.state.data.length : 0}, Active: {this.state.totalActive}, Page: {this.state.indexPage + 1})
                                    <div style={styles.tags}>
                                        <div>
                                            <Input style={styles.searchInput} onChange={(e) => this.searchKey(e.target.value)} name="key" value={key} placeholder="Search" />
                                            <Button outline color="primary" style={styles.floatRight} size="sm" onClick={async e => await this.toggleModal("new")}>Add</Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th style={styles.wa10}>No.</th>
                                                <th style={styles.wh12}>Name</th>
                                                <th style={styles.wh12}>Company ID</th>
                                                <th style={styles.wh12}>Type Key</th>
                                                <th style={styles.wh12}>Start Date</th>
                                                <th style={styles.wh12}>End Date</th>
                                                <th style={styles.wh12}>Value</th>
                                                <th style={styles.wh12}>Status</th>
                                                <th style={styles.w5}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data != undefined ?
                                                data.map((item, i) => {
                                                    return (
                                                        <tr key={i} style={styles.row}>
                                                            <td style={styles.wa10}>{i + 1}</td>
                                                            <td style={styles.wh12}>{item.Name}</td>
                                                            <td style={styles.wh12}>{item.Company_Id}</td>
                                                            <td style={styles.wh12}>{item.Type_Key}</td>
                                                            <td style={styles.wh12}>
                                                                {(new Date(item.Start_Date)).toLocaleDateString() + ' ' + (new Date(item.Start_Date)).toLocaleTimeString()}
                                                            </td>
                                                            <td style={styles.wh12}>
                                                                {(new Date(item.End_Date)).toLocaleDateString() + ' ' + (new Date(item.End_Date)).toLocaleTimeString()}
                                                            </td>
                                                            <td style={styles.wh12}>{item.Value}</td>
                                                            <td style={styles.wh12}>{item.Status}</td>
                                                            <td style={styles.w5}>
                                                                <Button style={styles.mgl5} outline color="primary" size="sm" onClick={async (e) => await this.openUpdate(item)} >Update</Button>{' '}
                                                                <Button outline color="danger" size="sm" onClick={(e) => { this.openDelete(item) }}>Delete</Button>
                                                            </td>
                                                        </tr>
                                                    );
                                                }) : ""
                                            }
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                            {
                                arrPagination.length == 1 ? "" :
                                    <div style={{ float: 'right', marginRight: '10px', padding: '10px' }}>
                                        <tr style={styles.row}>
                                            {
                                                arrPagination.map((item, i) => {
                                                    return (
                                                        <td>
                                                            <Button style={styles.pagination} color={i == indexPage ? 'primary' : 'danger'} onClick={e => { this.setState({ data: arrPagination[i], indexPage: i }) }}>{i + 1}</Button>
                                                        </td>
                                                    );
                                                })
                                            }
                                        </tr>
                                    </div>
                            }
                        </Col>
                    </Row>

                    <Modal isOpen={this.state.modalCom} className={this.props.className}>
                        <ModalHeader>{this.state.action == 'new' ? `Create` : `Update`}</ModalHeader>
                        
                        <ModalBody>
                            <TextFieldGroup
                                field="Name"
                                label="Name"
                                value={this.state.Name}
                                placeholder={"Name"}
                                // error={errors.title}
                                onChange={e => this.onChange("Name", e.target.value)}
                            // rows="5"
                            />

                            <div>
                                <label style={styles.flexLabel} htmlFor="tag">Company:    </label>
                                <select style={styles.flexOption} name="Company_Id" onChange={e => this.onChange("Company_Id", e.target.value)}>
                                    <option value={this.state.Company_Id}>-----</option>
                                    {
                                        dataCompany.map((item, i) => {
                                            if (item.Name == currentCompany) {
                                                return (
                                                    <option selected value={item._id}>{item.Name}</option>
                                                );
                                            } else {
                                                return (
                                                    <option value={item._id}>{item.Name}</option>
                                                );
                                            }
                                        })
                                    }
                                </select>
                            </div>

                            <div>
                                <label style={styles.flexLabel} htmlFor="tag">Type Key:    </label>
                                <select style={styles.flexOption} name="Type_Key" onChange={e => this.onChange("Type_Key", e.target.value)}>
                                    <option value={this.state.Type_Key}>-----</option>
                                    {
                                        dataTypeKey.map((item, i) => {
                                            if (item.Name == currentTypeKey) {
                                                return (
                                                    <option selected value={item._id}>{item.Name}</option>
                                                );
                                            } else {
                                                return (
                                                    <option value={item._id}>{item.Name}</option>
                                                );
                                            }
                                        })
                                    }
                                </select>
                            </div>

                            <div style={styles.datePicker}>
                                <label>Start Date:  </label>
                                <DatePicker selected={new Date(this.state.Start_Date)} onChange={(date) => this.setState({ Start_Date: date })} />
                            </div>

                            <div style={styles.datePicker}>
                                <label>End Date:  </label>
                                <DatePicker selected={new Date(this.state.End_Date)} onChange={(date) => this.setState({ End_Date: date })} />
                            </div>

                            <TextFieldGroup
                                field="Value"
                                label="Value"
                                value={this.state.Value}
                                placeholder={"Value"}
                                // error={errors.title}
                                onChange={e => this.onChange("Value", e.target.value)}
                            // rows="5"
                            />
                            {
                                action == 'new' ? "" : <div>
                                    <label style={styles.flexLabel} htmlFor="tag">Status:</label>
                                    <select style={styles.flexOption} name="Status" onChange={e => this.onChange("Status", e.target.value)}>
                                        <option value={this.state.Status}>{this.state.Status == '' ? ` - - - - - - - - - - ` : this.state.Status}</option>
                                        <option value={'Actived'}>Actived</option>
                                        <option value={'Locked'}>Locked</option>
                                        <option value={'Deactived'}>Deactived</option>
                                    </select>
                                </div>
                            }


                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={e => { this.state.action === 'new' ? this.addUser() : this.updateUser() }} disabled={this.state.isLoading}>Save</Button>{' '}
                            <Button color="secondary" onClick={e => this.toggleModal("new")}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalDelete} toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })} className={this.props.className}>
                        <ModalHeader toggle={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>{`Delete`}</ModalHeader>
                        <ModalBody>
                            <label htmlFor="tag">{`Do you want to delete user "${this.state.delete ? this.state.delete.Email : ''}" ?`}</label>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={e => this.delete()} disabled={this.state.isLoading}>Delete</Button>{' '}
                            <Button color="secondary" onClick={e => this.setState({ modalDelete: !this.state.modalDelete, delete: null })}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            );
        }
        return (
            <div id="page-loading">
                <div className="three-balls">
                    <div className="ball ball1"></div>
                    <div className="ball ball2"></div>
                    <div className="ball ball3"></div>
                </div>
            </div>
        );
    }
}

const styles = {
    datePicker: {
        marginBottom: 20
    },
    wa10: {
        width: "5%",
        float: "left",
        height: "80px"
    },
    pagination: {
        marginRight: '5px'
    },
    flexLabel: {
        width: 100
    },
    flexOption: {
        width: 300
    },
    a: {
        textDecoration: 'none'
    },
    floatRight: {
        float: "right",
        marginTop: '3px'
    },
    spinner: {
        width: "30px"
    },
    center: {
        textAlign: "center"
    },
    tbody: {
        height: "380px",
        overflowY: "auto"
    },
    wh12: {
        width: "10%",
        float: "left",
        height: "80px"
    },
    wh15: {
        width: "15%",
        float: "left",
        height: "80px"
    },
    w5: {
        width: "20%",
        float: "left",
        height: "80px"
    },
    row: {
        float: "left",
        width: "100%"
    },
    success: {
        color: 'green'
    },
    danger: {
        color: 'red'
    },
    mgl5: {
        marginLeft: '5px'
    },
    tags: {
        float: "right",
        marginRight: "5px",
        width: "250px"
    },
    searchInput: {
        width: "190px",
        display: 'inline-block',
    },
    userActive: {
        color: 'green'
    },
    userPending: {
        color: 'red'
    },
    nagemonNameCol: {
        width: '328px'
    },
    image: {
        width: '100px',
        height: '100px',
        borderRadius: '99999px'
    },
    mgl5: {
        marginBottom: '0px'
    }
}

export default Users;
