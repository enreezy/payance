import React, { useEffect } from "react";
import { Table, Tag, Space, Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/attendances";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";

const columns = [
  {
    title: "Time In",
    dataIndex: "timeIn",
    key: "timeIn",
  },
  {
    title: "Time Out",
    dataIndex: "timeOut",
    key: "timeOut",
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
    title: "Actual Time In",
    dataIndex: "actualTimeIn",
    key: "actualTimeIn",
  },
  {
    title: "Actual Time Out",
    dataIndex: "actualTimeOut",
    key: "actualTimeOut",
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

const Attendance: React.FC = () => {
  const state = useSelector((state: RootState) => state.attendance);
  const dispatch = useDispatch();

  const { getAttendances } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getAttendances();
  }, []);

  const newData = [];
  if (state.attendances && state.attendances?.data?.length > 0) {
    state.attendances.data.map((attendance: any, i: any) => {
      newData.push({
        id: attendance._id,
        key: i,
        firstName: attendance.members.firstName,
        lastName: attendance.members.lastName,
        timeIn: attendance.schedule.timeIn,
        timeOut: attendance.schedule.timeOut,
        actualTimeIn: attendance.timeIn,
        actualTimeOut: attendance.timeOut,
      });
    });
  }

  console.log(state);
  console.log(newData);

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Attence</Breadcrumb.Item>
      </Breadcrumb>
      <Link to="/members/create">
        <Button type="primary" style={{ float: "right", marginBottom: "15px" }}>
          Enter New Attendance
        </Button>
      </Link>

      <Table columns={columns} dataSource={newData} />
    </>
  );
};

export default Attendance;
