import React from 'react'
import {Table, Column, Cell} from 'fixed-data-table';
import dateFormat from 'dateformat'
import Dimensions from 'react-dimensions'
import dataList from './data'

var enhance = Dimensions({
    containerStyle: {
        height: '100%',
        width: '100%'
    }
});


const ViewLinkCell = ({rowIndex, data, col, ...props}) => {
  return <Cell>
    <a style={{color: 'blue'}} onClick={() => alert('see List example for screen')}>View...</a>
  </Cell>
};
const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell >
    {data[rowIndex][col]}
  </Cell>
);
const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell >
    {dateFormat(data[rowIndex][col], 'm/dd/yy h:MM:ss TT')}
  </Cell>
);
//view bttn, username, clockin, clockout, total hours
class GridPage extends React.Component{
  // componentDidUpdate() {
  //   Perf.stop()
  //   Perf.printInclusive()
  //   Perf.printWasted()
  // }

  render(){
        const {containerWidth, displayMode} = this.props;
        let columnList = [
                          <Column key="ViewCell"
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
          columnList = [...columnList, <Column  key="ServiceCell"
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
            />
          ]
        }

        return <div style={{height:'100%', width: '100%'}}>
                <div>Grid Reduce Columns</div>
                <Table
                  rowsCount={dataList.length}
                  rowHeight={25}
                  width={containerWidth - 35}
                  height={1600}
                  headerHeight={50}>
                {columnList}
              </Table>
            </div>;
      }
}

export default enhance(GridPage);
