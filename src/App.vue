<template>
  <div id="nav">
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="orders-o">课程</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
</style>
