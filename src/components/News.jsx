import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptosQuery } from "../services/cryptoApi";

import {
  useGetNewsQuery,
  useGetPokemonByNameQuery,
} from "../services/cryptoNewsapi";
import Loadder from './loadder'

const News = ({ simplified }) => {
  const [NewsCategory, setNewsCategory] = useState('Cryptocurency');
  const { data: cryptoNews, isLoading } = useGetNewsQuery({
    newsCategory:NewsCategory,
    count: simplified ? 6 : 12,
  });
  const { data, error } = useGetCryptosQuery(100);
  const { Text, Title } = Typography;
  const { Option } = Select;
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  return (
    <Row gutter={[24, 24]}>
      
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {isLoading && <Loadder />}
      {cryptoNews?.value.map((news, index) => (
        <Col key={index} xs={24} sm={12} lg={8} sapn={24}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={5}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl}
                  alt={news?.name}
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>

              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
