<template>
  <div id="lM" :class="s_h"  >
      <h1>新闻  资讯</h1>
      <img src="../../../public/images/lM_pic1.jpg" alt="">
      <h2>在线 留言</h2>
   
      
  </div>
</template>

<script>
export default {
  data(){
      return{
         s_h:{initAnimate1:false},
         
      }
  },
  mounted(){
     this.$store.getters.getScrollListen("#lM",this);
     },
     
  
  methods:{
      
  }
  
}
</script>
<style>

</style>