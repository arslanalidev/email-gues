import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Button,
  Spin,
  Descriptions,
  notification,
  Space,
  Divider,
  List,
  Typography,
} from "antd";

import { generateEmail } from "../services/emailService";

const { Content } = Layout;

const ContentComp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<
    string | { emailOne: string; emailTwo: string }
  >("");

  const [form] = Form.useForm();

  const onFinish = async (values: { name: string; domain: string }) => {
    const trimValues = {
      name: values.name.trim(),
      domain: values.domain.trim(),
    };
    try {
      setLoading(true);
      const { email } = (await generateEmail(trimValues)) as unknown as {
        email: string | { emailOne: string; emailTwo: string };
      };
      setEmail(email);
      notification.success({ message: "Email generated successfully" });
      form.resetFields();
    } catch (err) {
      notification.error({ message: "Some Error Occurred" });
    } finally {
      setLoading(false);
    }
  };

  const onReset = () => {
    form.resetFields();
    setEmail("");
  };

  return (
    <Layout>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64, backgroundColor: "white" }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: "50vh" }}
        >
          <Spin spinning={loading}>
            <Row justify="center">
              <Col md={10} xl={6} span={24}>
                <Form
                  form={form}
                  name="basic"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please input full name!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Domain"
                    name="domain"
                    rules={[
                      { required: true, message: "Please input Domain!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item>
                    <Space>
                      <Button type="primary" block htmlType="submit">
                        Submit
                      </Button>
                      <Button block onClick={onReset}>
                        Reset
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            <Row justify="center">
              <Col md={10} xl={6} span={24}>
                {email ? (
                  <Descriptions title="Email" layout="horizontal" bordered>
                    {typeof email === "object" ? (
                      <>
                        <Descriptions.Item label="Email 1" span={3}>
                          {email.emailOne}
                        </Descriptions.Item>
                        <Descriptions.Item label="Email 2" span={3}>
                          {email.emailTwo}
                        </Descriptions.Item>
                      </>
                    ) : (
                      <Descriptions.Item label="Email">
                        {email}
                      </Descriptions.Item>
                    )}
                  </Descriptions>
                ) : null}
              </Col>
            </Row>
          </Spin>
        </div>
        <Divider orientation="left">Notes</Divider>
        <List
          bordered
          dataSource={[
            "You should enter the first name and last name correctly",
            "Domain name must be in this format example.com, google.com or linkedin.com etc.",
            "If we already have some organization data then one email will be generated for you with same format which is same on our side",
            "If we don't have the organization previous data set then two emails will be generated for you.",
          ]}
          renderItem={(item, index) => (
            <List.Item>
              <Typography.Text mark>{index + 1}</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default ContentComp;
