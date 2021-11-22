import React from "react";
import { Button, Checkbox, Modal } from "antd";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { setCheckedAll } from '../action';


const { confirm } = Modal;

function TaskFoot({ setCurrent, taskStep, current, onSetCheckedAll, task }) {
  const { selected, checkedAll } = task;
  const { length: selectedLength } = selected;

  const onNext = () => {
    if (current === 1) {
      confirm({
        title: `您选中的数据集ID为[${selected?.toString()}]，一共${selectedLength}个，是否进入下一步`,
        onOk() {
          setCurrent(current + 1);
        },
        okText: '是',
        cancelText: '否',
      });
    } else if (current < taskStep.length - 1) {
      setCurrent(current + 1);
    }
  };

  const onPrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onChange = (e) => {
    // console.log(e, e?.target, e?.target?.checked);
    onSetCheckedAll(e?.target?.checked);
  };

  return (
    <div className="taskFoot">
      <div className="selectAll">
        {
          current === 1 && (
            <>
              <Checkbox checked={checkedAll} onChange={onChange} />
              <span className="selectText">全选</span>
              <span className="sclectSub">{selectedLength > 0 && `已选${selectedLength}个数据集`}</span>
            </>
          )
        }
      </div>
      <div className="footBtn">
        <Button className="leftBtn" onClick={onPrev}>
          {current <= 0 ? '取消' : `上一步：${taskStep[current - 1].title}`}
        </Button>
        <Button className="rightBtn" onClick={onNext}>
          {current >= taskStep.length - 1 ? '确认提交' : `下一步：${taskStep[current + 1].title}`}
        </Button>
      </div>
    </div>
  );
}

TaskFoot.propTypes = {
  taskStep: PropTypes.array.isRequired,
  setCurrent: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
  onSetCheckedAll: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  task: state.task,
});

const mapDispatchToProps = dispatch => ({
  onSetCheckedAll: (item) => {
    dispatch(setCheckedAll(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TaskFoot));