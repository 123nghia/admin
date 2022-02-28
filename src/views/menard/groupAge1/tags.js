import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Select } from 'antd';

const OPTIONS = ['1-3', '4-5', 'Tất cả'];

export default class SelectWithHiddenSelectedOptions extends React.Component {
  state = {
    selectedItems: this.props.selectedItems,
  };

  handleChange = selectedItems => {
    this.setState({ selectedItems });
    this.props.setSelect(selectedItems);
  };

  render() {
    const { selectedItems } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Select
        mode="multiple"
        placeholder=""
        value={selectedItems}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    );
  }
}
