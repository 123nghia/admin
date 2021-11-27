import { freeSet } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
  CButton, CCol, CFormGroup, CInput, CLabel, CRow
} from '@coreui/react';
import 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import CreatableSelect from 'react-select/creatable';
import {
  Card,
  CardBody,
  CardHeader, Input
} from 'reactstrap';
import Constants from "../../../contants/contants";

deal_update_from.propTypes = {
  arrCategory: PropTypes.array,
  arrChooseCategory: PropTypes.array,
  arrOptionCategory: PropTypes.array,
  arrAllProductOfAllCategory: PropTypes.array,
  arrAllProductOfAllCategory_Temp: PropTypes.array,
  onRemoveCard: PropTypes.func,
  handleChangeCategory: PropTypes.func,
  addAllProduct: PropTypes.func,
  addProduct: PropTypes.func,
  decreaseProduct: PropTypes.func,
  totalDeal: PropTypes.func,
  pushCategory: PropTypes.func
}

deal_update_from.defaultProps = {
  arrCategory: [],
  arrChooseCategory: [],
  arrOptionCategory: [],
  arrAllProductChoosed: [],
  arrAllProductOfAllCategory: [],
  arrAllProductOfAllCategory_Temp: [],
  onRemoveCard: null,
  handleChangeCategory: null,
  addAllProduct: null,
  addProduct: null,
  decreaseProduct: null,
  totalDeal: null,
  pushCategory: null
};

function deal_update_from(props) {

  const {
    arrCategory,
    arrChooseCategory,
    arrOptionCategory,
    arrAllProductOfAllCategory,
    arrAllProductChoosed,
    arrAllProductOfAllCategory_Temp,
    onRemoveCard,
    handleChangeCategory,
    addAllProduct,
    addProduct,
    decreaseProduct,
    totalDeal,
    pushCategory
  } = props;

  const funcOnRemoveCard = (idBrand) => {
    if (onRemoveCard) {
      onRemoveCard(idBrand)
    }
  }

  const funcHandleChangeCategory = (e, idBrand) => {
    if (handleChangeCategory) {
      handleChangeCategory(e, idBrand)
    }
  }

  const funcAddAllProduct = (idCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed) => {
    if (addAllProduct) {
      addAllProduct(idCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed)
    }
  }

  const funcAddProduct = (idCategory, i_product, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed) => {
    if (addProduct) {
      addProduct(idCategory, i_product, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed)
    }
  }

  const funcDecreaseProduct = (idCategory, i_product, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed) => {
    if (decreaseProduct) {
      decreaseProduct(idCategory, i_product, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed)
    }
  }

  const funcTotalDeal = (e, idCategory, item_product, arrAllProductChoosed) => {
    if (totalDeal) {
      totalDeal(e, idCategory, item_product, arrAllProductChoosed)
    }
  }

  const funcPushCategory = (arrCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed, arrChooseCategory) => {
    if (pushCategory) {
      pushCategory(arrCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed, arrChooseCategory)
    }
  }

  return (
    <div>
      <CRow>
        <CCol md="5" lg="5" sm="12" xm="12" lx="5">
          <h3>
            <strong>Tạo dữ liệu cho banner</strong>
          </h3>
        </CCol>
        <CCol md="7" lg="7" sm="12" xm="12" lx="7">

        </CCol>
      </CRow>
      <div style={{ marginTop: 15 }}>
        {
          arrCategory.map((item, i) => {
            let idCategory = i;
            return (
              <Card style={{ margin: 20 }}>
                <CardHeader style={{ backgroundColor: '#339966', height: 50 }}>
                  <CButton size="sm" color="danger" style={{ float: 'right' }} onClick={() => { funcOnRemoveCard(idCategory) }}>X</CButton>
                </CardHeader>
                <CardBody>
                  <CRow style={{ margin: 20 }}>
                    <CCol md="3" lg="3" sm="12" xm="12" lx="3">
                      <CLabel>Chọn thương hiệu:</CLabel>
                    </CCol>
                    <CCol md="9" lg="9" sm="12" xm="12" lx="9">
                      <CreatableSelect
                        isClearable
                        value={arrChooseCategory[idCategory][0]}
                        onChange={(e) => { funcHandleChangeCategory(e, idCategory) }}
                        options={arrOptionCategory}
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md="6" lg="6" sm="12" xm="12" lx="6">

                      <Card>
                        <CardHeader style={{ backgroundColor: '#a9c2af' }}>
                          <CRow>
                            <CCol md="4" lg="4" sm="12" xm="12" lx="4">
                              Danh sách sản phẩm
                            </CCol>
                            <CCol md="5" lg="5" sm="12" xm="12" lx="5" style={{ display: 'inline-block' }}>
                              <Input style={{
                                width: "130px",
                                display: 'inline',
                              }} onChange={(e) => {

                              }} name="key" placeholder="Từ khóa" />
                              <CButton size='sm' color="info" className={"mb-1"} style={{ height: '35px', width: '35px' }} onClick={e => {

                              }}>
                                <CIcon content={freeSet.cilMagnifyingGlass}></CIcon>
                              </CButton>

                            </CCol>
                            <CCol md="3" lg="3" sm="12" xm="12" lx="3">
                              <CButton size='sm' color="info" style={{ height: '35px' }} onClick={() => {
                                funcAddAllProduct(idCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed)
                              }}>
                                Thêm tất cả
                              </CButton>
                            </CCol>
                          </CRow>
                        </CardHeader>
                        <CardBody style={{ height: 250, overflowY: 'scroll', backgroundColor: '#dfebe2' }}>
                          <CRow>
                            {
                              arrAllProductOfAllCategory[idCategory].map((item_product, i_product) => {
                                return (
                                  <CCol md="12" lg="12" sm="12" xm="12" lx="12">
                                    <CFormGroup variant="custom-checkbox" inline>
                                      <CButton size='sm' color="success" style={{ height: '30px', width: '40px', transform: 'translate(-50%, 50%)' }}
                                        onClick={() => { funcAddProduct(idCategory, i_product, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed) }}>
                                        <CIcon content={freeSet.cilPlus}></CIcon>
                                      </CButton>

                                      <CLabel style={{ margin: 10 }}>
                                        <CRow>
                                          <CCol md="9" lg="9" sm="12" xm="12" lx="9">
                                            <div><strong>Tên sp: </strong>{item_product.name}</div>
                                          </CCol>
                                          <CCol md="2" lg="2" sm="12" xm="12" lx="2">
                                            <img src={`${Constants.BASE_URL}/public/image_product/${item_product.image}`} width={"90px"} height={"110px"}
                                              style={{ border: '1px solid black', borderRadius: 5 }} />
                                          </CCol>
                                          <CCol md="1" lg="1" sm="12" xm="12" lx="1"></CCol>
                                        </CRow>
                                      </CLabel>
                                    </CFormGroup>
                                  </CCol>
                                )
                              })
                            }
                          </CRow>
                        </CardBody>
                      </Card>
                    </CCol>
                    <CCol md="6" lg="6" sm="12" xm="12" lx="6">
                      <Card>
                        <CardHeader style={{ backgroundColor: '#a9c2af', height: '65px' }}>
                          <CRow>
                            Danh sách sản phẩm đã chọn
                          </CRow>
                        </CardHeader>
                        <CardBody style={{ height: 250, overflowY: 'scroll', backgroundColor: '#dfebe2' }}>
                          <CRow>
                            {
                              arrAllProductOfAllCategory_Temp[idCategory].map((item_product, i_product) => {
                                return (
                                  <CCol md="12" lg="12" sm="12" xm="12" lx="12">
                                    <CFormGroup variant="custom-checkbox" inline>
                                      <CButton size='sm' color="danger" style={{ height: '30px', width: '40px', transform: 'translate(-50%, 50%)' }}
                                        onClick={() => { funcDecreaseProduct(idCategory, i_product, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed) }}>
                                        <CIcon content={freeSet.cilMinus}></CIcon>
                                      </CButton>
                                      <CLabel style={{ margin: 10 }}>
                                        <CRow>
                                          <CCol md="9" lg="9" sm="12" xm="12" lx="9">
                                            <div><strong>Tên sp: </strong>{item_product.name}</div>
                                            <CInput placeholder={"Số lượng deal"} type="number" style={{ marginBottom: 3 }}
                                              onChange={(e) => { funcTotalDeal(e.target.value, idCategory, item_product, arrAllProductChoosed) }} />
                                          </CCol>
                                          <CCol md="2" lg="2" sm="12" xm="12" lx="2">
                                            <img src={`${Constants.BASE_URL}/public/image_product/${item_product.image}`} width={"90px"} height={"110px"}
                                              style={{ border: '1px solid black', borderRadius: 5 }} />
                                          </CCol>
                                          <CCol md="1" lg="1" sm="12" xm="12" lx="1"></CCol>
                                        </CRow>
                                      </CLabel>
                                    </CFormGroup>
                                  </CCol>
                                )
                              })
                            }
                          </CRow>
                        </CardBody>

                      </Card>
                    </CCol>
                  </CRow>

                </CardBody>
              </Card>
            )
          })
        }
        <CButton block active variant="ghost" color="success" aria-pressed="true"
          onClick={() => { funcPushCategory(arrCategory, arrAllProductOfAllCategory, arrAllProductOfAllCategory_Temp, arrAllProductChoosed, arrChooseCategory) }}>
          Thêm mới
        </CButton>
      </div>
    </div>
  )
}


export default deal_update_from

