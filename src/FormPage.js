import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';

const SelectExample = ({value, handleChange}) => <SelectField value={value} onChange={handleChange} >
    <MenuItem value={1} primaryText="Never"/>
    <MenuItem value={2} primaryText="Every Night"/>
    <MenuItem value={3} primaryText="Weeknights"/>
    <MenuItem value={4} primaryText="Weekends"/>
    <MenuItem value={5} primaryText="Weekly"/>
</SelectField>;


class FormPage extends React.Component{
  constructor(){
    super();

    this.state = {
      selectValue: 1
    }

    this.onSelectExampleChange = this.onSelectExampleChange.bind(this);
  }
  onSelectExampleChange = (event, index, value) => this.setState({selectValue});
  render(){
    const {selectValue} = this.state;
    return <div>
      <SelectExample value={selectValue} handleChange={this.onSelectExampleChange}/>
    </div>
  }
}

export default FormPage;
