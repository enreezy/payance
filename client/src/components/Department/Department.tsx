import React, { useEffect } from "react";
import { Table, Tag, Space, Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/departments";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";

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
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Department: React.FC = () => {
  const state = useSelector((state: RootState) => state.department);
  const dispatch = useDispatch();

  const { getDepartments } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getDepartments();
  }, []);

  const newData = [];
  if (state.departments && state.departments?.data?.length > 0) {
    state.departments.data.map((department: any, i: any) => {
      newData.push({
        id: department._id,
        key: i,
        name: department.name,
        date: department.dateAdded,
      });
    });
  }

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Departments</Breadcrumb.Item>
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

export default Department;
