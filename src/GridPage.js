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

const list = [
    {
        Id: 1,
        UserName: 'James',
        StartDate: new Date(),
        EndDate: new Date()
    },
    {
        Id: 2,
        UserName:'Bob',
        StartDate: new Date("2016-12-1 5:00"),
        EndDate: new Date("2016-7-12 5:00")
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
        StartDate: new Date("2016-1-1 5:00"),
        EndDate: new Date("2016-1-1 5:00")
    },
    {
        Id: 5,
        UserName:'Janet',
        StartDate: new Date(),
        EndDate: new Date("2016-2-1 5:00")
    },
    {
        Id: 6,
        UserName:'Jack',
        StartDate: new Date(),
        EndDate: new Date()
    }

]
let dataList = []
for(let i = 0; i < 1000; i++){
  dataList = [...dataList, ...list]
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
class GridPage extends React.Component{
  render(){
        const {containerWidth, containerHeight} = this.props;

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
                        width={50}

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
                        flexGrow={1}
                      />
                  </Table>
                </CardText>
              </Card>
        </div>
      }
}

export default enhance(GridPage);
