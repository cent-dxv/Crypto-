import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Spacer } from "antd";
import {
  HomePage,
  Navbar,
  News,
  Exchanges,
  CryptoDetails,
  CryptoCurrencies,
} from "./components/";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main ">
        <Layout>
          <div className="routes">
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="News" element={<News />} />
              <Route path="Exchanges" element={<Exchanges />} />
              <Route path="CryptoDetails" element={<CryptoDetails />} />
              <Route path="CryptoCurrencies" element={<CryptoCurrencies />} />
              <Route
                path="CryptoCurrencies/:coinId"
                element={<CryptoDetails />}
              />
              <Route path="news" element={<News />} />
            </Routes>
        
      </div>
        </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          cryptovarce <br />
          all right reserved <br />
            create and developed by cent
        </Typography.Title>
        <span>
          <Link to="/"> home</Link>
          <Link to="CryptoCurrencies"> CryptoCurrencies</Link>
          <Link to="Exchanges"> Exchanges</Link>
          <Link to="News"> News</Link>
        </span>
      </div>  </div>
    </div>
  );
}

export default App;
