import React, { useCallback } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as TitleSvg } from "../assets/svg/title.svg";
import { changeCollapsed } from './action';

const { Header } = Layout;

function MyHeader(props) {
  const { app: { collapsed }, onChangeCollapsed } = props;

  const toggle = useCallback(() => {
    onChangeCollapsed(!collapsed);
  }, [collapsed, onChangeCollapsed]);
  return (
    <Header className="myHeader">
      <div className="toggle">
        <div className="topMenuTitle">
          <TitleSvg />
          <div className="title">数据标注平台</div>
        </div>
        {
          collapsed ? <MenuUnfoldOutlined onClick={toggle} className="togleIcon" title="展开菜单" /> : <MenuFoldOutlined onClick={toggle} className="togleIcon" title="缩起菜单" />
        }
      </div>
    </Header>
  );
}

MyHeader.propTypes = {
  app: PropTypes.object.isRequired,
  onChangeCollapsed: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => ({
  onChangeCollapsed: (item) => {
    dispatch(changeCollapsed(item));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);
