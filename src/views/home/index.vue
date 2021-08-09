<template>
  <div class="home">
    {{category}}
    <!-- 首页头部 -->
    <HomeHeader></HomeHeader>
    <!-- 轮播图 -->
    <HomeSwiper></HomeSwiper>
    <!-- 课程列表 -->
    <HomeList></HomeList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import HomeHeader from "./home-header.vue";
import HomeSwiper from "./home-swiper.vue";
import HomeList from "./home-list.vue";
import { IGlobalState } from "@/store";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeList,
  },
  setup() {
    let store = useStore<IGlobalState>()
    let category = computed(() => {
      return store.state.home.currentCategory
    })
   return {
     category
   }
  }
});
</script>

<style>
</style>