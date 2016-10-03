import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ReactStock from 'react-stockcharts'
import BarChart from './Charts/bar'
import StackBar from './Charts/StackedBar'


const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 50
}
const cardStyle = {
  flex:.8,
  minWidth: 450,
  maxWidth: 650,
  padding: 10
}

const data=[
  { 'x': 'Apple', 'y': 10 },
    { 'x': 'Banana', 'y': 15 },
    { 'x': 'Strawberry', 'y': 20 },
    { 'x': 'Lemon', 'y': 25 }
]
const stackBarData = [
    { 'x': 'Apple', 'y1': 10, 'y2': 5, 'y3': 15, 'y4': 10 },
    { 'x': 'Banana', 'y1': 15, 'y2': 10, 'y3': 5, 'y4': 10 },
    { 'x': 'Strawberry', 'y1': 20, 'y2': 15, 'y3': 5, 'y4': 10 },
    { 'x': 'Lemon', 'y1': 25, 'y2': 20, 'y3': 5, 'y4': 10 },
    { 'x': 'Cherry', 'y1': 30, 'y2': 25, 'y3': 10, 'y4': 10 },
    { 'x': 'Peach', 'y1': 35, 'y2': 30, 'y3': 15, 'y4': 10 }
]
export default class App extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <Card style={cardStyle}>
          <CardHeader title='Card Header'></CardHeader>
          <BarChart data={data} type="hybrid"/>
        </Card>
        <Card style={cardStyle}>
          <CardHeader title='Card Header'></CardHeader>
          <StackBar data={stackBarData} type="hybrid"/>
        </Card>
        <Card style={cardStyle}>
          <CardHeader title='Card Header'></CardHeader>
          <BarChart data={data} type="hybrid"/>
        </Card>
        <Card style={cardStyle}>
          <CardHeader title='Card Header'></CardHeader>
          <StackBar data={stackBarData} type="hybrid"/>
        </Card>
      </div>
    );
  }
}
