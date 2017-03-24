import React from 'react'
import {Table, Column, Cell} from 'fixed-data-table';
import {
    Card,
    CardText
} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import dateFormat from 'dateformat';
import Dimensions from 'react-dimensions';
import Perf from 'react-addons-perf'

import dataList from './data'
import OrderGridDetails from './OrderGridDetails';

var enhance = Dimensions({
    containerStyle: {
        height: 1600,
        width: '100%'
    }
});

const ViewLinkCell = ({rowIndex, data, col, ...props}) => {
  return <Cell {...props}>
    <a href="#" onClick={() => alert("Clicked View for " + rowIndex)}>View</a>
  </Cell>
};
const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props} style={{height: 25}}>
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
  componentDidUpdate() {
    Perf.stop()
    Perf.printInclusive()
    Perf.printWasted()
  }
  render(){
        const {containerWidth, containerHeight, displayMode} = this.props;
        let columnList = [<Column key="ViewCell"
          cell={<ViewLinkCell data={dataList} col="Id" />}
          width={50}

        />,
        <Column key="CustomerCell"
          header={<Cell>Customer</Cell>}
          cell={<TextCell data={dataList} col="Customer"/>}
          width={100}
          flexGrow={.5}
        />,
        <Column key="StatusCell"
              header={<Cell>Status</Cell>}
              cell={<TextCell data={dataList} col="Status"></TextCell>}
              width={100}
            />
        ];
        if(displayMode !== 'phone'){
          columnList = [...columnList, <Column key="ServiceCell"
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
            <Column key="OrderCell"
              header={<Cell>Order #</Cell>}
              cell={<TextCell data={dataList} col="Id"></TextCell>}
              width={150}
            />
          ]
        }

        return <div style={{padding: 15,height:'100vh'}}>
                <div>Grid List View</div>
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
                    {columnList}
                  </Table>
                </CardText>
              </Card>
        </div>
      }
}

const style = {
  padding: 15
};
const statusColor = {
  'Open': 'Green',
  'Closed': 'Red',
  'Pending': 'Orange',
}

const OrderCard = (props) => {
  const  {Customer, Service, Status, Location, Assigned} = props;
  return <Paper style={style}>
      <span style={{width: '70%', display: 'inline-block', fontWeight: 'bold'}}>{Customer}</span>
      <span style={{color: statusColor[Status], padding: '10px 0 0 0', width:"29%", display: 'inline-block', textAlign: 'right'}}>{Status}</span>
      <br />
      <span style={{padding: '10px 0 0 0', display: 'inline-block', width: '70%'}}>{Location}</span>
      <span style={{padding: '10px 0 0 0', display: 'inline-block', width: '29%', textAlign: 'right'}}>{Service}</span>
      <br />
      <span style={{padding: '10px 0 0 0', display: 'inline-block', width: '70%'}}>Assigned To: {Assigned}</span>
      <span style={{padding: '10px 0 0 0', display: 'inline-block', width: '29%', textAlign: 'right'}}><OrderGridDetails {...props} /></span>
  </Paper>;
};

class ListView extends React.Component {
  componentDidUpdate() {
    Perf.stop()
    Perf.printInclusive()
    Perf.printWasted()
  }
  render(){
    const listItems = dataList.map((itm, idx) => <OrderCard {...itm}  key={itm.Id}/>);
    return <div>{listItems}</div>;
  }
};
export default enhance((props) => {
    const {displayMode} = props;
    return displayMode === 'phone' ? <ListView {...props }></ListView> : <GridPage { ...props } />
});