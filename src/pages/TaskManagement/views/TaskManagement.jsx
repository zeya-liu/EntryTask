import React, { useState } from "react";
import TaskBread from "./TaskBread";
import TaskStep from './TaskStep';
import TaskContent from './TaskContent';
import TaskFoot from "./TaskFoot";

import '../TaskManagement.less';

function TaskManagement() {
  const [current, setCurrent] = useState(1);

  const taskStep = [{
    title: '基本信息',
    content: <div className="content">基本信息...</div>,
    key: 0,
  }, {
    title: '数据集',
    content: <TaskContent />,
    key: 1,
  }, {
    title: '标注特征',
    content: <div className="content">标注特征...</div>,
    key: 2,
  }, {
    title: '工作薪酬',
    content: <div className="content">工作薪酬...</div>,
    key: 3,
  }, {
    title: '任务人员',
    content: <div className="content">任务人员...</div>,
    key: 4,
  }];
  
  return (
    <div className="taskManagement">
      <TaskBread />
      <div className="taskContent">
        <TaskStep taskStep={taskStep} current={current} />
        {/* <TaskContent /> */}
        {
          taskStep[current]?.content
        }
        <TaskFoot taskStep={taskStep} current={current} setCurrent={setCurrent} />
      </div>
    </div>
  );
}

export default TaskManagement;
