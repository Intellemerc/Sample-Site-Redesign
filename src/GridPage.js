import React from 'react'
import {Table, Column, Cell} from 'fixed-data-table';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import dateFormat from 'dateformat'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


let dataList = [
    {
        Id: 1,
        UserName: 'James',
        StartDate: new Date(),
        EndDate: new Date()
    },
    {
        Id: 2,
        UserName:'Bob',
        StartDate: new Date(),
        EndDate: new Date()
    },
    {
        Id: 3,
        UserName:'John',
        StartDate: new Date(),
        EndDate: new Date()
    },
    {
        Id: 4,
        UserName:'Jill',
        StartDate: new Date(),
        EndDate: new Date()
    },
    {
        Id: 5,
        UserName:'Janet',
        StartDate: new Date(),
        EndDate: new Date()
    },
    {
        Id: 6,
        UserName:'Jack',
        StartDate: new Date(),
        EndDate: new Date()
    }

]
dataList = [
  ...dataList,
  ...dataList,
  ...dataList,
  ...dataList
]

const containerStyle = {
    height: '100%',
    width: '100%',
    padding: 10
}
const cardStyle = {
    flex: .8,
    minWidth: 450,
    maxWidth: 650,
    padding: 10
}

const ViewLinkCell = ({rowIndex, data, col, ...props}) => {
  const url = '/fakeRowData/' + data[rowIndex][col];
  return <Cell {...props}>
    <a href={url}>View</a>
  </Cell>
};
const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>
);
const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {dateFormat(data[rowIndex][col], 'm/dd/yy h:MM:ss TT')}
  </Cell>
);
//view bttn, username, clockin, clockout, total hours
class GridPage extends React.Component {
    constructor(){
      super();
      this.state = {
        value: 0
      }
    }
    render() {
        return <div style={{padding: 15}}>
                <div>Entries</div>
                <div style={{float: 'left'}}>Time Keeping</div>
                <div style={{float:'right', padding: 10}}>
                <SelectField value={this.state.value} onChange={this.handleChange}>
                  <MenuItem value={1} primaryText="All Users" />
                  <MenuItem value={2} primaryText="Every Night" />
                  <MenuItem value={3} primaryText="Weeknights" />
                  <MenuItem value={4} primaryText="Weekends" />
                  <MenuItem value={5} primaryText="Weekly" />
                </SelectField>
                </div>
                <br />
                <br />
                <Card >
                  <CardText style={{padding: 0}}>
                    <Table

                      rowsCount={dataList.length}
                      rowHeight={50}
                      width={550}
                      height={500}
                      headerHeight={50}
                    >
                      <Column
                        cell={<ViewLinkCell data={dataList} col="Id" />}
                        width={150}
                        flexGrow={1}
                      />
                      <Column
                        header={<Cell>Name</Cell>}
                        cell={<TextCell data={dataList} col="UserName"/>}
                        width={200}
                      />
                      <Column
                        header={<Cell>Start Date</Cell>}
                        cell={<DateCell data={dataList} col="StartDate">Basic content 3</DateCell>}
                        width={200}
                      />
                      <Column
                        header={<Cell>End Date</Cell>}
                        cell={<DateCell data={dataList} col="EndDate">Basic content 3</DateCell>}
                        width={200}
                      />
                  </Table>
                </CardText>
              </Card>
        </div>
    }
}

export default GridPage;
