<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="green">
        <img slot="item-icon" src="~assets/images/tabbar/img1.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/img2.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
        <img slot="item-icon" src="~assets/images/tabbar/img1.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/img2.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path="/mine" >
        <img slot="item-icon" src="~assets/images/tabbar/img1.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/img2.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
      
    </tab-bar>

  </div>
</template>

<script>
import TabBar from "components/common/tabbar/tabbar"
import TabBarItem from "@/components/common/tabbar/TabBarItem"
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  },
  props: {

  }
}
</script>

<style scoped>

</style>
