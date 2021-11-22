import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import { GET_DATA, DELETE_SELECTED, ADD_SELECTED, SELECTALL_SELECTED } from "./actionType";
// {
//   ID: "imgId1",
//   Name: "name1",
//   Thumbnail: "url",
//   ImagesNum: "imagesNum1",
// }, {
//   ID: "imgId2",
//   Name: "name2",
//   Thumbnail: "url",
//   ImagesNum: "imagesNum2",
// }, {
//   ID: "imgId3",
//   Name: "name3",
//   Thumbnail: "url",
//   ImagesNum: "imagesNum3",
// }
const reducer = (
  state = {
    status: PENDING,
    dataList: [],
    selected: [],
    checkedAll: false,
    totalNum: 0,
  },
  action
) => {
  // console.log('action', action);
  switch (action.type) {
    case SELECTALL_SELECTED: {
      let isAll = action.checkedAll;
      if (!isAll) {
        state.dataList?.forEach((i) => i.checked = false);
      }
      return {
        ...state,
        checkedAll: isAll,
        selected: isAll ? state.dataList?.map((i) => {
          i.checked = true;
          return i.ID;
        }) : [],
      };
    }

    case ADD_SELECTED: {
      let arr = [...state.selected, action.addId];
      state.dataList?.forEach((i) => {
        if (i.ID === action.addId) {
          i.checked = true;
        }
      });
      return {
        ...state,
        checkedAll: arr.length === state.dataList.length,
        selected: arr,
      };
    }

    case DELETE_SELECTED: {
      state.dataList?.forEach((i) => {
        if (i.ID === action.deleteId) {
          i.checked = false;
        }
      });
      return {
        ...state,
        checkedAll: false,
        selected: state.selected?.filter((i) => i !== action.deleteId),
      };
    }

    case `${GET_DATA}_${PENDING}`: {
      return {
        ...state,
        status: PENDING,
      };
    }
    case `${GET_DATA}_${FULFILLED}`: {
      console.log('action.payload', action.payload);
      let arr = action.payload?.Datasets || [];
      let allArr = [...state.dataList, ...arr];
      let { length: allLength } = allArr;
      let m = new Map();
      for (let i = 0; i < allLength; i += 1) {
        let item = allArr[i];
        if (m.has(item.ID)) {
          item.checked = m.get(item.ID).checked; // 获取最新的数据，使用旧的checked状态
        }
        m.set(item.ID, item);
      }
      let newArr = [...m.values()];
      console.log('m', m, state.dataList, newArr);
      return {
        ...state,
        status: FULFILLED,
        dataList: newArr,
        checkedAll: newArr.length === state.selected.length,
        totalNum: action.payload?.TotalNum || 0,
      };
    }
    case `${GET_DATA}_${REJECTED}`: {
      return {
        ...state,
        status: REJECTED,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
