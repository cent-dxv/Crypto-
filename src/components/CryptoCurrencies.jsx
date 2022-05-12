import React, { useState ,useMemo } from "react";
import millify from "millify";
import {Link} from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const CryptoCurrencies = () => {
  const { data: cryptosList, error, isLoading } =  useGetCryptosQuery();
  const [cryptos, setcryptos] = useState(cryptosList?.data?.coins);
  console.log(cryptos);
  console.log(isLoading);

  return <>
  <Row gutter ={[32,32]} className = 'crypto-card-container'>

  { !isLoading && cryptosList?.data?.coins.map((currency) => (
    <Col xs= {24} sm ={12} lg ={6} className= 'crypto-card' key = {currency.uuid} >
    <Link to = {`/CryptoCurrencies/${currency.uuid}`} >
      <Card
      title = {`${currency.rank}.${currency.name}`}
      extra = {<img className="crypto-image" src = {currency.iconUrl} alt = {`${currency.name}`}></img>}
     hoverable
      >
      
      <p> price : {millify(currency.price)} </p>
      <p> Market Cap : {millify(currency.marketCap)} </p>
      <p> Daily Change : {millify(currency.change)} </p>

      </Card>
    </Link>

    </Col>
  ))}

  </Row>



  </>;
};

export default React.memo(CryptoCurrencies);
