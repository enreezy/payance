import React, { useEffect } from "react";
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
import { Link } from "react-router-dom";
import { Select } from "antd";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/members";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";

const { Option } = Select;

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
  const state = useSelector((state: RootState) => state.member);
  const dispatch = useDispatch();

  const { getMembers } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getMembers();
  }, []);

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Schedules</Breadcrumb.Item>
        <Breadcrumb.Item>Add Schedules</Breadcrumb.Item>
      </Breadcrumb>
      <Card title="Schedule Details">
        <Form
          layout="vertical"
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Row justify="start" gutter={30}>
            <Col span={6}>
              <Form.Item
                name={["schedule", "timeIn"]}
                label="Time In"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name={["schedule", "timeOut"]}
                label="Time Out"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name={["schedule", "memberId"]}
                label="Member"
                rules={[{ required: true }]}
              >
                <Select style={{ width: 200 }}>
                  {state?.members?.data?.map((member, index) => (
                    <Option value={member._id} key={index}>
                      {member.firstName} {member.lastName}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Space>
              <Link to="/members">
                <Button type="primary" htmlType="submit" ghost>
                  Back
                </Button>
              </Link>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default CreateMember;
