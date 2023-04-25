import { Component } from "react";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import { Button, FormGroup, Label,Input  } from "reactstrap";
import {
    CTextarea,
  } from "@coreui/react";
export default class Seo extends Component {
  SaveAllConfigWeb(value) {
    this.props.SaveAllConfigWeb(value);
  }
  setStateByName = (name, value) => {
    this.props.setStateByName(name, value);
  };
  onChangeImage=(e, name, name_link, name_show) =>{
    this.props.onChangeImage(e, name, name_link, name_show);
}

  render() {
    
    return (
      <>
        <div className="text-center">
          <Button
            variant="contained"
            color="success"
            onClick={() => this.SaveAllConfigWeb("seoInfo")}
          >
            Lưu thay đổi
          </Button>
        </div>
        <FormGroup>
    <Label for="exampleDate">
     Từ ngày
    </Label>
    <Input
      id="fromDate"
      name="fromDate"
      value={this.props.fromDate}
      placeholder="date placeholder"
      type="date"
      onChange={(e) => {
        this.setStateByName( "fromDate", e.target.value );
      }}
    />
  </FormGroup>
  <FormGroup>
  <Label for="datetio">
     Tới ngày
    </Label>
    <Input
      id="todate"
      name="todate"
      placeholder="Tới ngày"
      type="date"
      value={this.props.todate}
      onChange={(e) => {
        this.setStateByName( "todate", e.target.value );
      }}
    />
  </FormGroup>
    <FormGroup>
      <Label for="fromtime">
        Từ giờ
      </Label>
      <Input
        id="fromtime"
        name="fromtime"
        placeholder="time placeholder"
        type="time"
        value={this.props.fromtime}
        onChange={(e) => {
          this.setStateByName( "fromtime", e.target.value );
        }}
      />
    </FormGroup>
      <FormGroup>
        <Label>
          tới giờ
        </Label>
        <Input
          id="totime"
          name="totime"
          placeholder="time placeholder"
          type="time"
          value={this.props.totime}
          onChange={(e) => {
            this.setStateByName( "totime", e.target.value );
          }}
        />
      </FormGroup>
   

          
      <FormGroup>
    <Label >
      Độ tuổi tham gia game
    </Label>
    <Input
      name ="skinNumber"
      placeholder="Độ tuổi thamg gia game"
      type="number"
      value={this.props.skinNumber}
      onChange={(e) => {
        this.setStateByName( "skinNumber", e.target.value );
      }}
    />
  </FormGroup>
     


  <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="exampleSelect"
      name="statusGame"
      value={this.props.statusGame}
      onChange={(e) => {
        this.setStateByName( "statusGame", e.target.value );
      }}
      type="select"
    >
      <option value = "0" >
         Bật
      </option>
      <option value ="1">
        Tắt
      </option>
     
    </Input>
  </FormGroup>
        </>
    );
  }
}
