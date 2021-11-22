import React, { useCallback, useState } from "react";
import { Button, Input, Menu, message, Modal, Layout } from "antd";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import {
  UnorderedListOutlined, // ContactsOutlined, PieChartOutlined, BarChartOutlined, ScheduleOutlined, UserSwitchOutlined,
} from "@ant-design/icons";
import PropTypes from 'prop-types';
import { siderLists } from "../utils/config";


const { Sider } = Layout;

function SiderMenu(props) {
  // console.log('props', props);
  const { location = {}, app: { collapsed } } = props;

  const [list, setList] = useState(() => {
    const json = localStorage.getItem("siderLists");
    try {
      return json ? JSON.parse(json) : siderLists;
    } catch (error) {
      return siderLists;
    }
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState("");

  const doSet = useCallback(() => {
    if (list?.length > 0) {
      let { length } = list;
      for (let i = 0; i < length; i += 1) {
        if (list[i]?.value === text) {
          return true;
        }
      }
    }
    return false;
  }, [list, text]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // console.log("text", text, list);
    if (!text || !text.trim()) {
      message.info('请先输入类别名称');
      return;
    }
    if (doSet()) {
      message.info('类别名称不能重复，请重新输入');
      setText("");
      return;
    }
    let arr = [...list];
    arr.push({ key: Math.random(), value: text });
    setList(arr);
    localStorage.setItem('siderLists', JSON.stringify(arr));
    setIsModalVisible(false);
    setText("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setText("");
  };

  const onChangeText = (e) => {
    let value = e?.target?.value || '';
    // console.log('value', value, value?.slice(0, 10));
    // if (value.length > 12) {
    //   message.info('不能超过10个字符');
    // }
    setText(value);
  };

  return (
    <Sider className="mySider" theme="light" width={324} trigger={null} collapsible collapsed={collapsed}>
      <Menu
        className="siderMenu"
        theme="light"
        mode="inline"
        defaultSelectedKeys={[location.pathname?.slice(1) || list?.[2]?.key]}
      >
        {list && list.length > 0 &&
          list.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon ? <img src={`./assets/svg/${item.icon}.svg`} alt="icon" /> : <UnorderedListOutlined />}
            >
              <Link to={`/${item.key}`}>{item.value}</Link>
            </Menu.Item>
          ))}
      </Menu>
      <Button className="addSider" onClick={showModal}>
        新增类别
      </Button>
      <Modal
        title="新增类别"
        maskClosable={false}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        <Input
          placeholder="请输入类别名称"
          value={text}
          onChange={onChangeText}
          maxLength={10}
        />
      </Modal>
    </Sider>
  );
}

SiderMenu.propTypes = {
  location: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  app: state.app,
});

// const mapDispatchToProps = dispatch => ({
//   onChangeCollapsed: (item) => {
//     dispatch(changeCollapsed(item));
//   },
// });
export default connect(mapStateToProps)(withRouter(SiderMenu));
