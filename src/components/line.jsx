import React from "react";
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({  CoinHistory, currentPrice, CoinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];
  
    for (let i = 0; i < CoinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(CoinHistory?.data?.history[i].price);
    }
  
    for (let i = 0; i < CoinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(new Date(CoinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    console.log ( 'PRICE' + coinPrice)
    const data = {
      labels: coinTimestamp,
      datasets: [
        {
          label: 'Price In USD',
          data: coinPrice,
          fill: false,
          backgroundColor: '#0071bd',
          borderColor: '#0071bd',
        },
      ],
    };
  
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
      {/* <Line data={data} options={options} /> */}
    </>
  );
};
export default LineChart;
