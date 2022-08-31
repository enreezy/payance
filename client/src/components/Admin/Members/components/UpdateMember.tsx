import React, { useEffect, useState } from "react";
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
  Select,
  DatePicker,
  notification,
} from "antd";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as rolesActionCreators from "../../../../actions/roles";
import * as departmentActionCreators from "../../../../actions/departments";
import * as memberActionCreators from "../../../../actions/members";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../reducers";
import moment from "moment";
const { Option } = Select;
import { LoadingOutlined } from "@ant-design/icons";

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

const UpdateMember: React.FC = (props: any) => {
  const roloState = useSelector((state: RootState) => state.role);
  const departmentState = useSelector((state: RootState) => state.department);
  const memberState = useSelector((state: RootState) => state.member);
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { getRoles } = bindActionCreators(rolesActionCreators, dispatch);
  const { getDepartments } = bindActionCreators(
    departmentActionCreators,
    dispatch
  );
  const { addMember, getMemberById } = bindActionCreators(
    memberActionCreators,
    dispatch
  );
  useEffect(() => {
    getRoles();
    getDepartments();
    if (props.location?.state?.id) {
      getMemberById(props.location.state.id);
      setLoading(false);
    }
  }, []);

  console.log(memberState.members.data);

  const onFinish = (values: any) => {
    const timestamp = moment(values.member.birth._d).format("X");
    const body = values.member;
    body.birth = timestamp;
    addMember(body);
    openNotificationWithIcon("success");
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Member Added",
      description: "New Member Added Successfully!",
    });
  };

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Members</Breadcrumb.Item>
        <Breadcrumb.Item>Add member</Breadcrumb.Item>
      </Breadcrumb>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <Card title="Member Details">
          <Form
            layout="vertical"
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            initialValues={{ firstName: memberState.members.data.firstName }}
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
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="start" gutter={30}>
              <Col span={6}>
                <Form.Item
                  name={["member", "birth"]}
                  label="Birth Date"
                  rules={[{ required: true }]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name={["member", "website"]} label="Website">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name={["member", "introduction"]}
                  label="Introduction"
                >
                  <Input.TextArea />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="start" gutter={30}>
              <Col span={6}>
                <Form.Item
                  name={["member", "roleId"]}
                  label="Role"
                  rules={[{ required: true }]}
                >
                  <Select>
                    {roloState?.roles?.data?.map((role, index) => (
                      <Option value={role._id} key={index}>
                        {role.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name={["member", "departmentId"]}
                  label="Department"
                  rules={[{ required: true }]}
                >
                  <Select>
                    {departmentState?.departments?.data?.map(
                      (department, index) => (
                        <Option value={department._id} key={index}>
                          {department.name}
                        </Option>
                      )
                    )}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="start" gutter={30}>
              <Col span={6}>
                <Form.Item
                  name={["member", "address"]}
                  label="Location"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name={["member", "contact"]}
                  label="Contact"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Space>
                <Link to="/members">
                  <Button type="primary" ghost>
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
      )}
    </>
  );
};

export default UpdateMember;
