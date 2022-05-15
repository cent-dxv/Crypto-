import React, { useState, useMemo, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loadder from "./loadder";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, error, isLoading } = useGetCryptosQuery(count);
  const [search, setsearch] = useState("");
  const [crypto, setcrypto] = useState([]);
  console.log(isLoading);
  console.log(search);

  useMemo(() => setsearch("csdc"), []);
  useEffect(() => {
    setcrypto(cryptosList?.data?.coins);
  }, [cryptosList]);

  useEffect(() => {
    search == NaN
      ? setcrypto(
          cryptosList?.data?.coins.filter((filter) =>
            filter.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
        )
      : setcrypto(cryptosList?.data?.coins);
  }, [search]);

  return (
    <>
      {console.log("search" + search)}
      {isLoading && <Loadder />}
      
      {!simplified && (
        <div className="search-crypto">
          <Input
            type="text"
            placeholder="search crypto curency"
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/CryptoCurrencies/${currency.uuid}`}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt={`${currency.name}`}
                  ></img>
                }
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
    </>
  );
};

export default React.memo(CryptoCurrencies);
