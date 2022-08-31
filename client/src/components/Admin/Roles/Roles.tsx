import React, { useEffect } from "react";
import { Table, Tag, Space, Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/roles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date Added",
    dataIndex: "date",
    key: "date",
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
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Role: React.FC = () => {
  const state = useSelector((state: RootState) => state.role);
  const dispatch = useDispatch();

  const { getRoles } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getRoles();
  }, []);

  const newData = [];
  if (state.roles && state.roles?.data?.length > 0) {
    state.roles.data.map((role: any, i: any) => {
      newData.push({
        id: role._id,
        key: i,
        name: role.name,
        date: role.dateAdded,
      });
    });
  }

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Roles</Breadcrumb.Item>
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

export default Role;
