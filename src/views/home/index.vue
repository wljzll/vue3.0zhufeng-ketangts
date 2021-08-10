<template>
  <div class="home">
    <!-- 首页头部 -->
    <HomeHeader
      :category="category"
      @setCurrentCategory="setCurrentCategory"
    ></HomeHeader>
    <div class="home-container" style="margin-top: 65px;">
      <!-- 轮播图 -->
      <HomeSwiper></HomeSwiper>
      <!-- 课程列表 -->
      <HomeList></HomeList>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import HomeHeader from "./home-header.vue";
import HomeSwiper from "./home-swiper.vue";
import HomeList from "./home-list.vue";
import { IGlobalState } from "@/store";
import { Store, useStore } from "vuex";
import { CATEGORY_TYPES } from "@/typings/home";
import * as Types from "@/store/actions-types";

// 将获取和修改category的功能封装到一个函数中
function useCategory(store: Store<IGlobalState>) {
  // 定义computed获取currentCategory
  let category = computed(() => store.state.home.currentCategory);

  // 提交commit
  function setCurrentCategory(category: CATEGORY_TYPES) {
    store.commit(`home/${Types.SET_CATEGORY}`, category);
  }

  return {
    category,
    setCurrentCategory,
  };
}

export default defineComponent({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeList,
  },
  setup() {
    let store = useStore<IGlobalState>();
    let { category, setCurrentCategory } = useCategory(store);
    return {
      category,
      setCurrentCategory,
    };
  },
});
</script>

<style>
</style>