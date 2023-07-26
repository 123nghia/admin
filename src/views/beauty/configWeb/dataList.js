import { Component } from "react";
import CIcon from '@coreui/icons-react';
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import { Button } from "reactstrap";
import {
  CButton
} from '@coreui/react'

export default class Voucher extends Component {
  SaveAllConfigWeb(value) {
    this.props.SaveAllConfigWeb(value);
  }
  setStateByName = (name, value) => {
    this.props.setStateByName(name, value);
  };
  getstatusItem = (status)=> {
    if(status =="1")
    {
      return "Hoạt động";
    }
    return "Không hoạt động";
  }
  render() {
    return (
      <>
      
       
        <div class="flex-a-center config-box-border">
        
        <table  className="table table-hover table-outline mb-0  d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      <th className="text-center">Tên công ty</th>
                      <th className="text-center">Điểm mỗi lươt soi</th>
                      <th className="text-center">Điểm tối đa	</th>
                         
                      <th className="text-center">Trạng thái</th>
                      <th className="text-center">Danh sách</th>
                      <th className="text-center">Chỉnh sửa</th>
                          </tr>
                  </thead>
                  <tbody>
             
                    {
                      this.props.dataListBeauty.map((item, i) => {
                    
                        var x =  this.props.dataCompany.find(x => x._id ===  item.companyId);

                        const dataCompany = this.props.dataCompany;
              
                        var compnayName ="";
                        if(x)
                        {
                          compnayName  = x.Name;
                        }
                        return (
                              <tr >
                                      <td className="text-center">1 </td>
                                      <td className="text-center">{compnayName}</td>
                                      <td className="text-center">{item.score}</td>
                                      <td className="text-center">{item.scoreMax}</td>
                                      <td className="text-center">{this.getstatusItem(item.status)}</td>
                                        
                                      <td className="text-center">
                                          <CButton outline color="primary" ><CIcon name="cil-magnifying-glass" /> Xem chi tiết</CButton>
                                      </td>
                                      <td className="text-center">
                                          <CButton outline color="primary" ><CIcon name="cis-update" /> Sửa</CButton>
                                      
                                      </td>
                            </tr>
                        )

                      })
                     }
                            
                 
                  </tbody>

                </table>
         
        </div>
       
        
      </>
    );
  }
}
