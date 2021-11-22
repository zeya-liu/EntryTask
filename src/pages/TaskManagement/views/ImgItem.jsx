import React, { useCallback } from "react";
import { Checkbox } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setCheckedAll, deleteSelected, addSelected } from '../action';

function ImgItem(props) {
  const {
    item: {
      ID: imgId,
      Name: name,
      Thumbnail: url,
      ImagesNum: imagesNum,
      checked,
    },
    onDeleteSelected,
    onAddSelected,
  } = props;

  const onChangeChecked = useCallback(() => {
    if (!checked) {
      onAddSelected(imgId);
    } else {
      onDeleteSelected(imgId);
    }
  }, [checked, imgId, onAddSelected, onDeleteSelected]);

  return (
    <div className="imgItem" key={imgId} onClick={onChangeChecked}>
      <div className="imgDiv">
        <img className="imgs" alt="图" src={url} />
        <span className="imgNum">{`共${imagesNum}张`}</span>
      </div>
      <p className="imgName">{name + '-----' + imgId}</p>
      <Checkbox className="imgCheck" checked={checked} />
    </div>
  );
};

ImgItem.propTypes = {
  onSetCheckedAll: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  onDeleteSelected: PropTypes.func.isRequired,
  onAddSelected: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  task: state.task,
});

const mapDispatchToProps = dispatch => ({
  onSetCheckedAll: (item) => {
    dispatch(setCheckedAll(item));
  },
  onDeleteSelected: (item) => {
    dispatch(deleteSelected(item));
  },
  onAddSelected: (item) => {
    dispatch(addSelected(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ImgItem));