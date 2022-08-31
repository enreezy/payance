import React, { useEffect } from "react";
import { Table, Tag, Space, Breadcrumb, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/members";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";

interface Department {
  name: String;
}

interface Role {
  name: String;
}

const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "id",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Department",
    key: "department",
    dataIndex: "department",
    render: (department?: any[]) => (
      <>
        {department?.map((tag: Department, i: any) => {
          let color = Object.keys(tag).length > 5 ? "geekblue" : "green";
          if (tag.name === "IT") {
            color = "green";
          } else {
            color = "volcano";
          }
          return (
            <Tag color={color} key={i}>
              {tag.name.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
    render: (role: any[]) => (
      <>
        {role?.map((tag: Role, i: any) => {
          let color = Object.keys(tag).length > 5 ? "geekblue" : "green";
          if (tag.name === "IT") {
            color = "green";
          } else {
            color = "volcano";
          }
          return (
            <Tag color={color} key={i}>
              {tag.name.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (
      text: any,
      record: {
        name:
          | boolean
          | React.ReactChild
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined;
      }
    ) => (
      <Space size="middle">
        <Link
          to={{
            pathname: "/members/edit",
            state: {
              id: text.id,
            },
          }}
        >
          Edit
        </Link>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Members: React.FC = () => {
  const state = useSelector((state: RootState) => state.member);
  const dispatch = useDispatch();
  const location = useLocation();

  const { getMembers } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getMembers();
  }, []);

  const newData = [];
  if (state.members && state.members?.data?.length > 0) {
    state.members.data.map((member: any, i: any) => {
      newData.push({
        id: member._id,
        key: i,
        firstName: member.firstName,
        lastName: member.lastName,
        address: member.address,
        department: member.department,
        role: member.role,
      });
    });
  }

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Members</Breadcrumb.Item>
      </Breadcrumb>
      <Link to="/members/create">
        <Button type="primary" style={{ float: "right", marginBottom: "15px" }}>
          Add Member
        </Button>
      </Link>

      <Table columns={columns} dataSource={newData} />
    </>
  );
};

export default Members;
