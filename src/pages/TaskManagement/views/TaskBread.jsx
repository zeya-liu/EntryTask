import React from "react";
import { Breadcrumb } from "antd";

function TaskBread() {
  return (
    <div className="breadDiv">
      <div className="border" />
      <p className="borderTitle">新建任务</p>
      <Breadcrumb className="myBread">
        <Breadcrumb.Item>任务管理</Breadcrumb.Item>
        <Breadcrumb.Item>新建任务</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default React.memo(TaskBread);
