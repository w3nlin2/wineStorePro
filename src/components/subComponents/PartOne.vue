<template>
  <div id="partOne" class="initAnimate2">
      <h1>燕麦 酒区</h1>
        <ul class="part1Ul">
        <li><img src="../../../public/images/part1_pic1.jpg"/><p>沽牌燕麦酒42度整箱500mi*6瓶29</p></li>
        <li><img src="../../../public/images/part1_pic2.jpg"/><p>沽牌燕麦酒金筱6号整箱500mi*6瓶2</p></li>
        <li><img src="../../../public/images/part1_pic3.jpg"/><p>沽牌燕麦烧42度整箱500mi*6瓶22</p></li>
        <li><img src="../../../public/images/part1_pic4.jpg"/><p>沽牌燕麦酒39度整箱500mi*6瓶18</p></li>
        <li><img src="../../../public/images/part1_pic5.jpg"/><p>沽牌燕麦烧100mi*6*4提108一提</p></li>
        <li><img src="../../../public/images/part1_pic6.jpg"/><p>沽牌燕麦烧718mi*4瓶168/瓶</p></li>
    </ul>
    <p>查看更多</p>
  </div>
</template>

<script>
export default {
  data(){
      return{
        
      }
  },
  created(){
      /*setTimeout(()=>{this.s_h=true;},1000)*/
  }
  
}
</script>
<style>
#partOne{
    
}
ul.part1Ul{
    list-style: none;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin:0;
    padding:0;
    
}
ul.part1Ul>li{
    width: 100px;
    
    margin:10px 0;
    
}
ul.part1Ul>li>img{
    width: 100px;
    height:100px;
}

</style>