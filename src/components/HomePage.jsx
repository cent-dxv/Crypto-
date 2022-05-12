import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import {
  useGetCryptosQuery,
  useGetPokemonByNameQuery,
} from "../services/cryptoApi";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";

const { Title } = Typography;

const Homepage = () => {
  const { data, error, isLoading } = useGetCryptosQuery();
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

 const globalstatus = data ? data?.data?.stats : ''

//  console.log(" data " + data && data);
//  console.log(" is fetching .." + isLoading);
//  console.log(" is error .." + error);

  return (
    <>
      <Title level={2} className="heading">
        {" "}
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Cryptocurrencies"
            value={globalstatus.total}
          />{" "}
        </Col>

        <Col span={12}>
          {" "}
          <Statistic
            title="Total Market"
            value={globalstatus.totalMarkets}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Exchange"
            value={globalstatus.totalExchanges}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total 24h Volume"
            value={globalstatus.total24hVolume}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Market Cap"
            value={globalstatus.totalMarketCap}
          />{" "}
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2}>Top 10 crypto currency in the world</Title>{" "}
        <Title level={3} className="show-more">
          {" "}
          <Link to="CryptoCurrencies">show more </Link>
        </Title>{" "}
      </div>
      <CryptoCurrencies simplified/>
      <Title level={2}> Letest Crypto News</Title>
      <Title level={3} className="show-more">
        {" "}
        <Link to="News">more news </Link>
      </Title>{" "}
      <News simplified/>
    </>
  );
};

export default Homepage;
