import { PUT_COLLAPSED } from "./actionType";
// import { request } from '../utils/request';

export const changeCollapsed = (value) => ({
  type: PUT_COLLAPSED,
  value,
  // payload: request({ url: 'http://10.82.14.206:8888/v2/projects/1/datasets?PageNo=1&PageSize=10&PageNum=2', method: 'GET' }),
});
