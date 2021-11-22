import React, { useEffect, useRef } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PENDING } from "redux-promise-middleware";
import ImgItem from './ImgItem';

import { getData } from '../action';


const arr = [0, 1, 2, 3, 4];
function TaskContent({ onGetData, task }) {
  // console.log('task', task);
  const { dataList, status, totalNum } = task;
  const currentPage = useRef(1);

  useEffect(() => {
    onGetData({ id: 1, current: currentPage.current, pageSize: 15, pageNum: 1 });
  }, [onGetData]);

  const onScroll = (e) => {
    // console.log(e, e?.target, e?.target?.scrollTop);
    let { scrollTop = 0, scrollHeight = 0, clientHeight = 0 } = e?.target || {};
    console.log(scrollTop, scrollHeight, clientHeight);
    if (scrollTop > scrollHeight - clientHeight - 300 && status !== PENDING && dataList.length < totalNum) {
      currentPage.current += 1;
      onGetData({ id: 1, current: currentPage.current, pageSize: 15, pageNum: 1 });
    }
  };

  return (
    <>
      <div className="content" onScroll={onScroll}>
        {
          dataList?.length > 0 && dataList.map((item) => <ImgItem key={item.ID} item={item} />)
        }
        {
          arr.map(item => <div className="imgItemAfter" key={item} />)
        }
      </div>
    </>
  );
}

TaskContent.propTypes = {
  onGetData: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  task: state.task,
});

const mapDispatchToProps = dispatch => ({
  onGetData: (item, callback) => {
    dispatch(getData(item)).then(res => callback && callback(res.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TaskContent));
