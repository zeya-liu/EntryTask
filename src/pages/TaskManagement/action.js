import { request } from '../../utils/request';
import { GET_DATA, DELETE_SELECTED, ADD_SELECTED, SELECTALL_SELECTED } from "./actionType";

export const getData = (item) => ({
  type: GET_DATA,
  payload: request({ url: `/v2/projects/${item.id}/datasets?PageNo=${item.current}&PageSize=${item.pageSize}&PageNum=${item.pageNum}`, method: 'GET' }),
});

export const addSelected = (addId) => ({
  type: ADD_SELECTED,
  addId
});

export const deleteSelected = (deleteId) => ({
  type: DELETE_SELECTED,
  deleteId
});

export const setCheckedAll = (checkedAll) => ({
  type: SELECTALL_SELECTED,
  checkedAll
});
