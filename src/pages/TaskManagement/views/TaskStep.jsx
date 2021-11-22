import React from "react";
import { Steps } from 'antd';
import PropTypes from 'prop-types';

const { Step } = Steps;

function TaskStep({ current, taskStep }) {
  return (
    <Steps size="small" current={current} className="myStep">
      {taskStep?.map(item => <Step title={item.title} key={item.key} />)}
      {/* <Step title="基本信息" />
      <Step title="数据集" />
      <Step title="标注特征" />
      <Step title="工作薪酬" />
      <Step title="任务人员" /> */}
    </Steps>
  );
}

TaskStep.propTypes = {
  taskStep: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
};

export default React.memo(TaskStep);
