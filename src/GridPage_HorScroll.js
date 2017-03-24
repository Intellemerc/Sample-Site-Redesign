import React from 'react'
import {Table, Column, Cell} from 'fixed-data-table';
import {
    Card,
    CardText
} from 'material-ui/Card';
import dateFormat from 'dateformat'
import Dimensions from 'react-dimensions'
import Perf from 'react-addons-perf'


import dataList from './data'

var enhance = Dimensions({
    containerStyle: {
        height: 1600,
        width: 1700
    }
});

const ViewLinkCell = ({rowIndex, data, col, ...props}) => {
  return <Cell {...props}>
    <a style={{color: 'blue'}} onClick={() => alert('see List example for screen')}>View...</a>
  </Cell>
};
const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell style={{height: 25}}>
    a
  </Cell>
);
//{data[rowIndex][col]}
const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {dateFormat(data[rowIndex][col], 'm/dd/yy h:MM:ss TT')}
  </Cell>
);
//view bttn, username, clockin, clockout, total hours
class GridPage extends React.Component{
  componentDidUpdate() {
   Perf.stop()
    Perf.printInclusive()
    Perf.printWasted()
  }
  columnList = null;
  getColumns(){
    return [<Column key="ViewCell"
          cell={<ViewLinkCell data={dataList} col="Id" />}
          width={50}

        />,
        <Column key="CustomerCell"
          header={<Cell>Customer</Cell>}
          cell={<TextCell data={dataList} col="Customer"/>}
          width={100}
        />,
        <Column key="StatusCell"
              header={<Cell>Status</Cell>}
              cell={<TextCell data={dataList} col="Status"></TextCell>}
              width={100}
            />,
        <Column key="ServiceCell"
              header={<Cell>Service</Cell>}
              cell={<TextCell data={dataList} col="Service"></TextCell>}
              width={150}
            />,
          <Column key="CreatedCell"
            header={<Cell>Created</Cell>}
            cell={<DateCell data={dataList} col="Created"></DateCell>}
            width={100}
            flexGrow={1}/>,
            <Column key="LocationCell"
            header={<Cell>Location</Cell>}
            cell={<TextCell data={dataList} col="Location"></TextCell>}
            width={200}
            flexGrow={1}
          />,
          <Column key="AssignedCell"
            header={<Cell>Assigned</Cell>}
            cell={<TextCell data={dataList} col="Assigned"></TextCell>}
            width={150}
          />,
          <Column key="IdCell"
            header={<Cell>Order #</Cell>}
            cell={<TextCell data={dataList} col="Id"></TextCell>}
            width={150}
    />];

  }
  render(){
        
        const {containerWidth, containerHeight} = this.props;
        if(!this.columnList){
          this.columnList = this.getColumns()
        }
        return <div style={{padding: 15,height:'100vh'}}>
                <div>Grid Horizonal Scrolling</div>
                <br />
                <br />
                <Card style={{height: '100%'}} >
                  <CardText style={{padding: 0}}>
                    <Table
                      rowsCount={dataList.length}
                      rowHeight={25}
                      width={containerWidth - 30}
                      height={containerHeight - 30}
                      headerHeight={50}
                    >
                    { this.columnList }
                  </Table>
                </CardText>
              </Card>
        </div>
      }
}

export default enhance(GridPage);