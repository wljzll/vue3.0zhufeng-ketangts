import { CATEGORY_TYPES, IHomeState } from "@/typings/home"; // 导入接口和枚举
import { Module } from "vuex";
import { IGlobalState } from "..";
import * as Types from '../actions-types'; // 导入action-types

const state: IHomeState = {
    currentCategory: CATEGORY_TYPES.ALL,
    sliders: [],
    lessons: {
        hasMore: true, // 有没有更多数据
        loading: false, // 默认没有正在加载
        offset: 0,
        limit: 5,
        list: [] // 当前已经显示到页面的课程有哪些
    }
}

// Module里的参数：1) 自己的状态 2) 全局的状态
const home: Module<IHomeState, IGlobalState> = {
    namespaced: true,
    state,
    mutations: {
      [Types.SET_CATEGORY](state, payload:CATEGORY_TYPES) {
         state.currentCategory = payload;
      }
    }
}
export default home;