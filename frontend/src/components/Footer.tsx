import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComp: React.FC = () => (
  <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
    Babbel Email Guesser ©2022 Created by Arslan Ali
  </Footer>
);

export default FooterComp;
