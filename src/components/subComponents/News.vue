<template>
  <div id="news" :class="s_h"  >
      <h1>新闻  资讯</h1>
      <img src="../../../public/images/news_pic1.jpg" alt="">
      <ul class="newsUl">
          <li>“舍得”、“沱牌”新品交相辉映，舍得酒业闪耀百届糖酒会</li>
          <li>無酒不成席 安徽白酒消費量躋身全國前十</li>
          <li>临沂著名的白酒品牌盘点 老酒鬼肯定全都喝过</li>
          <li>酒立方酿酒设备:2019年酒业迎来成熟期,正是做酿酒生意的好时机</li>
          <li>大咖云集！泸州老窖养生酒业将打造春糖重头戏</li>
          <li>2019白酒发展趋势盘点，纯粮酒江小白踩准趋势</li>
          <li>首届中国杜甫诗酒文化节暨杜甫酒业集团发展大会举行</li>
          <li>积极融入“一带一路”建设 泸州老窖加速引领中国白酒国际化</li>
      </ul>
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
     this.$store.getters.getScrollListen("#news",this);
     },
     
  
  methods:{
      
  }
  
}
</script>
<style>
ul.newsUl{
    
    text-align: left;
    list-style:disc!important;
}
ul.newsUl>li{
    color: grey;
    font-size:14px; 
    border-bottom:1px solid grey;
    padding: 5px 0;
}
</style>