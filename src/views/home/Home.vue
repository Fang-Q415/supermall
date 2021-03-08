<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/nav/navbar'
import { getHomeMultidata } from '@/network/home'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data(){
    return {
      result:null,
      banner:[],
      dKeyword:[],
      keywords:[],
      recommend:[]
    }
  },
  created(){
    getHomeMultidata().then(res=>{
      this.result = res
      this.banner = res.data.banner.list
      this.dKeyword = res.data.dKeyword
      this.keywords = res.data.keywords
      this.recommend = res.data.recommend
      console.log(this.banner)
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
