import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import SiderMenu from './compoent/SiderMenu';
import MyHeader from './compoent/MyHeader';
import TaskManagement from "./pages/TaskManagement/views/TaskManagement";
import NotFound from "./pages/NotFound";
import "./style/App.less";

const {Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <MyHeader />
        <Layout>
          <SiderMenu />
          <Content className="myContent">
            <Switch>
              <Route path="/" exact component={TaskManagement} />
              <Route path="/taskManagement" exact component={TaskManagement} />
              <Route path="/assignment" exact component={() => <div>我的任务</div>} />
              <Route path="/information" exact component={() => <div>项目数据管理</div>} />
              <Route path="/userManagement" exact component={() => <div>用户管理</div>} />
              <Route path="/statistic" exact component={() => <div>统计分析</div>} />
              <Route path="/*" exact component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
