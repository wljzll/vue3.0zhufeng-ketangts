<template>
  <div class="home-header">
    <img src="@/assets/logo.png" alt="" />
    <!-- 以前的v-model等于 input事件 + value -->
    <van-dropdown-menu>
      <!-- <van-dropdown-item v-model="state.value1" :options="option1" /> -->
      <van-dropdown-item :modelValue="category" :options="options" @change="change"/>
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import { CATEGORY_TYPES } from "@/typings/home";
import { defineComponent, PropType, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    category: {
      type: Number as PropType<CATEGORY_TYPES>,
    },
  },
  emits: ["setCurrentCategory"], // 为了提示作用
  setup(props, context) {
    console.log(props);
    
    let state = reactive({
      options: [
        {text: '全部课程', value: CATEGORY_TYPES.ALL},
        {text: 'react课程', value: CATEGORY_TYPES.REACT},
        {text: 'vue课程', value: CATEGORY_TYPES.VUE},
        {text: 'node课程', value: CATEGORY_TYPES.NODE}
      ]
    })

    function change (value:CATEGORY_TYPES) {
      context.emit('setCurrentCategory', value);
    }
    return {
      ...toRefs(state),
      change
    }
  },
});
</script>

<style lang="scss">
.home-header {
  width: 95%;
  height: 65px;
  background: #2a2a2a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  position: fixed;
  top: 0;
  left: 0;
  img{
    height: 50px;
  }
  .van-dropdown-menu__title {
    color: #ffffff;
  }
  .van-dropdown-menu__bar{
    background: #2a2a2a;
  }
}
</style>