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
import Dimensions from 'react-dimensions'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var enhance = Dimensions({
    containerStyle: {
        height: '100%',
        width: '100%'
    }
});

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
for(let i = 0; i < 10; i++){
  dataList = [...dataList, ...dataList]
}
console.log(dataList.length);
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
const GridPage = ({containerWidth, containerHeight}) => {
        return <div style={{padding: 15}}>
                <div>Entries</div>
                <div style={{float: 'left'}}>Time Keeping</div>
                <br />
                <br />
                <Card >
                  <CardText style={{padding: 0}}>
                    <Table
                      rowsCount={dataList.length}
                      rowHeight={50}
                      width={containerWidth - 30}
                      height={containerHeight-30}
                      headerHeight={50}
                    >
                      <Column
                        cell={<ViewLinkCell data={dataList} col="Id" />}
                        width={75}
                        flexGrow={1}
                      />
                      <Column
                        header={<Cell>Name</Cell>}
                        cell={<TextCell data={dataList} col="UserName"/>}
                        width={200}
                      />
                      <Column
                        header={<Cell>Start Date</Cell>}
                        cell={<DateCell data={dataList} col="StartDate"></DateCell>}
                        width={200}
                      />
                      <Column
                        header={<Cell>End Date</Cell>}
                        cell={<DateCell data={dataList} col="EndDate"></DateCell>}
                        width={200}
                      />
                  </Table>
                </CardText>
              </Card>
        </div>
}

export default enhance(GridPage);
