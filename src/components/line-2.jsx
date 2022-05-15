import React , {useEffect, useState}from "react";
// import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from "antd";
import { Line } from '@ant-design/plots';

const { Title } = Typography;

const LineChart = ({  CoinHistory, currentPrice, CoinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];
    // const [data, setData] = useState([]);
    

    // useEffect(()=>{
    //     CoinHistory?.data?.history.map(({price ,timestamp})=>{

    //   setData( prevarr => [...prevarr, {price : price , timestamp :timestamp}])
    // })

    // },[CoinHistory])

    const data = [
      { year: '1991', value: 3 },
      { year: '1993', value: 3.5 },
      { year: '1992', value: 4 },
      { year: '1995', value: 4.9 },
      { year: '1994', value: 5 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ];
  
    console.log(data)

    // for (let i = 0; i < CoinHistory?.data?.history?.length; i += 1) {
    //   coinPrice.push(CoinHistory?.data?.history[i].price);
    // }
  
    // for (let i = 0; i < CoinHistory?.data?.history?.length; i += 1) {
    //   coinTimestamp.push(new Date(CoinHistory?.data?.history[i].timestamp).toLocaleDateString());
    // }

    const config = {
      data,
      padding: 'auto',
      xField: 'year',
      yField: 'value',
      xAxis: {
        tickCount: 5,
      },
      // slider: {
      //   start: 0.1,
      //   end: 0.5,
      // },
    };

    // console.log ( 'PRICE' + coinPrice)
    
    // const data = {
    //   labels: coinTimestamp,
    //   datasets: [
    //     {
    //       label: 'Price In USD',
    //       data: coinPrice,
    //       fill: false,
    //       backgroundColor: '#0071bd',
    //       borderColor: '#0071bd',
    //     },
    //   ],
    // };
  
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
  
  
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {" "}
          {CoinName} price chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {" "}
            {CoinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            {" "}
            current {CoinName} price : $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line {...config} />
    </>
  );
};
export default LineChart;
