import React from "react";
import { Layout } from "antd";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
