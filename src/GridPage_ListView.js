import React from 'react'
import {Table, Column, Cell} from 'fixed-data-table';
import Paper from 'material-ui/Paper';
import dateFormat from 'dateformat';
import Dimensions from 'react-dimensions';
//import Perf from 'react-addons-perf'

import dataList from './data'
import OrderGridDetails from './OrderGridDetails';

var enhance = Dimensions({
    containerStyle: {
        height: 1600,
        width: '100%'
    }
});

const ViewLinkCell = ({rowIndex, data, col, ...props}) => {
  return <Cell>
    <OrderGridDetails {...props} />
  </Cell>
};
const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell>
    {data[rowIndex][col]}
  </Cell>
);
const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell>
    {dateFormat(data[rowIndex][col], 'm/dd/yy h:MM:ss TT')}
  </Cell>
);
//view bttn, username, clockin, clockout, total hours
const GridPage = enhance(class GridPage extends React.Component{
  // componentDidUpdate() {
  //   Perf.stop()
  //   Perf.printInclusive()
  //   Perf.printWasted()
  // }
  shouldComponentUpdate(nextProps, nextState){
    const {containerWidth, } = this.props;
    const {containerWidth: nextContainerWidth }= nextProps;
    if(containerWidth !== nextContainerWidth){
      return true;
    }
    return false;
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
        if(displayMode !== 'tablet' || displayMode !== 'phone'){
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
                <Table
                  rowsCount={dataList.length}
                  rowHeight={25}
                  width={containerWidth - 30}
                  height={containerHeight - 30}
                  headerHeight={50}
                >
                {columnList}
              </Table>
        </div>
      }
});

const style = {
  padding: 15
};
const statusColor = {
  'Open': 'Green',
  'Closed': 'lightgray',
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

const listItems = dataList.map((itm, idx) => <OrderCard {...itm}  key={itm.Id}/>);
const ListView = enhance(class ListView extends React.Component {
  // componentDidMount() {
  //   Perf.stop()
  //   Perf.printInclusive()
  //   Perf.printWasted()
  // }
  shouldComponentUpdate(nextProps, nextState){
    const {containerWidth} = this.props;
    const {containerWidth: nextContainerWidth } = nextProps;
    if(containerWidth !== nextContainerWidth){
      return true;
    }
    return false;
  }
  render(){
    return <div>{listItems}</div>;
  }
});
export default (props) => {
    const {displayMode} = props;
    return displayMode === 'tablet' || displayMode === 'phone' ? <ListView {...props }></ListView> : <GridPage { ...props } />
};