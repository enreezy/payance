import React, { useEffect } from "react";
import { Table, Tag, Space, Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/schedules";
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
    title: "Last name",
    dataIndex: "lastName",
    key: "lastName",
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

const Schedule: React.FC = () => {
  const state = useSelector((state: RootState) => state.schedule);
  const dispatch = useDispatch();

  const { getSchedules } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getSchedules();
  }, []);

  const newData = [];
  if (state.schedules && state.schedules?.data?.length > 0) {
    state.schedules.data.map((schedule: any, i: any) => {
      newData.push({
        id: schedule._id,
        key: i,
        firstName: schedule.member.firstName,
        lastName: schedule.member.lastName,
        timeIn: schedule.timeIn,
        timeOut: schedule.timeOut,
      });
    });
  }

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Schedule</Breadcrumb.Item>
      </Breadcrumb>
      <Link to="/schedules/create">
        <Button type="primary" style={{ float: "right", marginBottom: "15px" }}>
          Add Schedule
        </Button>
      </Link>

      <Table columns={columns} dataSource={newData} />
    </>
  );
};

export default Schedule;
