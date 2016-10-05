import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

const SelectExample = ({value, handleChange}) => <SelectField value={value} onChange={handleChange} >
    <MenuItem value={1} primaryText="Never"/>
    <MenuItem value={2} primaryText="Every Night"/>
    <MenuItem value={3} primaryText="Weeknights"/>
    <MenuItem value={4} primaryText="Weekends"/>
    <MenuItem value={5} primaryText="Weekly"/>
</SelectField>;

const style = {
  padding:5,
  margin: 10,
  height: 300
}

class FormPage extends React.Component{
  constructor(){
    super();

    this.state = {
      selectValue: 1
    }

    this.onSelectExampleChange = this.onSelectExampleChange.bind(this);
  }
  onSelectExampleChange = (event, index, value) => this.setState({selectValue: value});
  render(){
    const {selectValue} = this.state;
    return <Card style={style} >
              <CardHeader title='Sample Form'></CardHeader>
              <CardText>
                <SelectExample value={selectValue} title="test" floatingLabelText="Test" handleChange={this.onSelectExampleChange}/>
                <br />
                <TextField
                  hintText="Hint Text"
                  errorText="This field is required"
                />
                <br />
                <TextField/>
              </CardText>
          </Card>
  }
}

export default FormPage;
