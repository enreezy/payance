import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Breadcrumb,
  Card,
  Row,
  Col,
  Space,
} from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const CreateMember: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Members</Breadcrumb.Item>
        <Breadcrumb.Item>Add member</Breadcrumb.Item>
      </Breadcrumb>
      <Card title="Member Details">
        <Form
          layout="vertical"
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Row justify="start" gutter={30}>
            <Col span={6}>
              <Form.Item
                name={["member", "firstName"]}
                label="First Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name={["member", "lastName"]}
                label="Last Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name={["member", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="start" gutter={30}>
            <Col span={6}>
              <Form.Item name={["member", "birth"]} label="Birth Date">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name={["member", "website"]} label="Website">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name={["member", "introduction"]} label="Introduction">
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="start" gutter={30}>
            <Col span={6}>
              <Form.Item name={["member", "Location"]} label="Location">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name={["member", "contact"]} label="Contact">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default CreateMember;
