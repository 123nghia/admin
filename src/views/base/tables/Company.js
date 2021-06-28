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
import Constants from "./../../../contants/contants";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import axios from 'axios'
let headers = new Headers();
const auth = localStorage.getItem('auth');
headers.append('Authorization', 'Bearer ' + auth);
headers.append('Content-Type', 'application/json');
class Company extends Component {
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
            Email: '',
            Phone: '',
            Fax: 'Nam',
            Address: '',
            Website: '',
            Code: '',
            Status: '',
            modalDelete: false,
            delete: null,
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
        this.setState({ arrPagination: arrTotal, data: arrTotal[this.state.indexPage] });
    }

    getData = async () => {
        this.setState({ isLoading: true });
        const res = await axios({
            baseURL: Constants.BASE_URL,
            url: Constants.LIST_COMPANY,
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
                if (val.Name.toLocaleUpperCase().includes(key.toLocaleUpperCase()) || val.Email.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {
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

    toggleModal(key) {
        if (key == 'new') {
            this.setState({
                modalCom: !this.state.modalCom,
                action: key,
                Name: '',
                Email: '',
                Phone: '',
                Fax: '',
                Address: '',
                Website: '',
                Code: ''
            })
        }
    }

    onChange(key, val) {
        this.setState({ [key]: val })
    }

    async addCompany() {
        const { Email, Name, Phone, Fax, Address, Website, Code } = this.state

        if (Email == null || Email == ''
            || Name == null || Name == ''
            || Phone == null || Phone == ''
            || Address == null || Address == ''
            || Code == null || Code == '') {
            alert("Please fill in all the requirements");
            return
        }

        const body = {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Fax: Fax,
            Address: Address,
            Website: Website,
            Code: Code
        }

        this.setState({ isLoading: true });
        const res = await axios({
            baseURL: Constants.BASE_URL,
            url: Constants.ADD_COMPANY,
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

    openUpdate(item) {

        this.setState({
            modalCom: !this.state.modalCom,
            action: "update",
            Name: item.Name,
            Email: item.Email,
            Phone: item.Phone,
            Fax: item.Fax,
            Address: item.Address,
            Website: item.Website,
            Code: item.Code,
            id: item['_id'],
            Status: item.Status
        })
    }

    async updateCompany() {
        const { Email, Name, Phone, Fax, Address, Website, Code, Status } = this.state

        if (Email == null || Email == ''
            || Name == null || Name == ''
            || Phone == null || Phone == ''
            || Address == null || Address == '') {
            alert("Please fill in all the requirements");
            return
        }

        const body = {
            Name: Name,
            Email: Email,
            Phone: Phone,
            Fax: Fax,
            Address: Address,
            Website: Website,
            Code: Code,
            Status: Status,
            id: this.state.id
        }

        this.setState({ isLoading: true });
        const res = await axios({
            baseURL: Constants.BASE_URL,
            url: Constants.UPDATE_COMPANY,
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
            baseURL: Constants.BASE_URL,
            url: Constants.DELETE_COMPANY,
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
    async handlePageChange(pageNumber) {
        this.getUsers(pageNumber);
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
    toggleChannel() {

    }
    execUpdateCommunity(user) {

    }
    setUserCommunityAdmin(address, communityId, admin = true) {
    }
    render() {
        const { data, key, viewingUser, communities, action, arrPagination, indexPage } = this.state;
        if (!this.state.isLoading) {
            return (
                <div className="animated fadeIn">
                    <Row>
                        <Col>
                            <p style={styles.success}>{this.state.updated}</p>
                            <p style={styles.danger}>{this.state.deleted}</p>
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-align-justify"></i> COMPANY (Total: {this.state.data != undefined || this.state.data != null ?
                                        this.state.data.length : 0}, Active: {this.state.totalActive}, Page: {this.state.indexPage + 1})
                                    <div style={styles.tags}>
                                        <div>
                                            <Input style={styles.searchInput} onChange={(e) => this.searchKey(e.target.value)} name="key" value={key} placeholder="Search" />
                                            <Button outline color="primary" style={styles.floatRight} size="sm" onClick={e => this.toggleModal("new")}>Add</Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th style={styles.wa10}>No.</th>
                                                <th style={styles.wh12}>Name</th>
                                                <th style={styles.wh15}>Email</th>
                                                <th style={styles.wh12}>Phone</th>
                                                <th style={styles.wh12}>Fax</th>
                                                <th style={styles.wh15}>Address</th>
                                                <th style={styles.wh12}>Website</th>
                                                <th style={styles.wh12}>Code</th>
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
                                                            <td style={styles.wh15}>{item.Email}</td>
                                                            <td style={styles.wh12}>{item.Phone}</td>
                                                            <td style={styles.wh12}>{item.Fax}</td>
                                                            <td style={styles.wh15}>{item.Address}</td>
                                                            <td style={styles.wh12}>{item.Website}</td>
                                                            <td style={styles.wh12}>{item.Code}</td>
                                                            <td style={styles.wh12}>{item.Status}</td>
                                                            <td style={styles.w5}>
                                                                <Button outline color="primary" size="sm" onClick={(e) => this.openUpdate(item)} >Update</Button>{' '}
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
                                field="Email"
                                label="Email"
                                value={this.state.Email}
                                placeholder={"Emal"}
                                // error={errors.title}
                                onChange={e => this.onChange("Email", e.target.value)}
                            // rows="5"
                            />
                            <TextFieldGroup
                                field="Name"
                                label="Name"
                                value={this.state.Name}
                                placeholder={"Company Name"}
                                // error={errors.title}
                                onChange={e => this.onChange("Name", e.target.value)}
                            // rows="5"
                            />

                            <TextFieldGroup
                                field="Phone"
                                label="Phone"
                                value={this.state.Phone}
                                placeholder={"Phone"}
                                onChange={e => this.onChange("Phone", e.target.value)}
                            // rows="5"
                            />

                            <TextFieldGroup
                                field="Fax"
                                label="Fax"
                                value={this.state.Fax}
                                placeholder={"Fax"}
                                // error={errors.title}
                                onChange={e => this.onChange("Fax", e.target.value)}
                            // rows="5"
                            />

                            <TextFieldGroup
                                field="Address"
                                label="Address"
                                value={this.state.Address}
                                placeholder={"Address"}
                                // error={errors.title}
                                onChange={e => this.onChange("Address", e.target.value)}
                            // rows="5"
                            />

                            <TextFieldGroup
                                field="Website"
                                label="Website"
                                value={this.state.Website}
                                placeholder={"Website"}
                                // error={errors.title}
                                onChange={e => this.onChange("Website", e.target.value)}
                            // rows="5"
                            />

                            <TextFieldGroup
                                field="Code"
                                label="Code"
                                value={this.state.Code}
                                placeholder={"Code"}
                                // error={errors.title}
                                onChange={e => this.onChange("Code", e.target.value)}
                            // rows="5"
                            />
                            {
                                action == 'new' ? "" : <div>
                                    <label style={styles.flexLabel} htmlFor="tag">Status    </label>
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
                            <Button color="primary" onClick={e => { this.state.action === 'new' ? this.addCompany() : this.updateCompany() }} disabled={this.state.isLoading}>Save</Button>{' '}
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
                </div >
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
        width: "8%",
        float: "left",
        height: "80px"
    },
    wh15: {
        width: "13%",
        float: "left",
        height: "80px"
    },
    w5: {
        width: "12%",
        float: "left",
        height: "80px"
    },
    wa10: {
        width: "5%",
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
        marginBottom: '5px'
    }
}

export default Company;
