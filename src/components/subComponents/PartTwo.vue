<template>
  <div id="partTwo" :class="s_h"  >
      <h1>热销  产品</h1>
      <ul class="partTwo_Ul">
        <li>
            <img src="../../../public/images/part2_pic1.jpg" alt="">
            <ul>
                <li>会稽山典藏葫芦五年绍兴花雕酒500mi*</li>
                <li>￥270</li>
                <li>会稽山典藏葫芦五年绍兴花雕酒500mi*6瓶零售58元/瓶</li>
            </ul>
        </li>

        <li>
            <img src="../../../public/images/part2_pic2.jpg" alt="">
            <ul>
                <li>会稽山典藏葫芦五年绍兴花雕酒500mi*</li>
                <li>￥270</li>
                <li>会稽山典藏葫芦五年绍兴花雕酒500mi*6瓶零售58元/瓶</li>
            </ul>
        </li>

        <li>
            <img src="../../../public/images/part2_pic3.jpg" alt="">
            <ul>
                <li>会稽山典藏葫芦五年绍兴花雕酒500mi*</li>
                <li>￥270</li>
                <li>会稽山典藏葫芦五年绍兴花雕酒500mi*6瓶零售58元/瓶</li>
            </ul>
        </li>

        <li>
            <img src="../../../public/images/part2_pic4.jpg" alt="">
            <ul>
                <li>会稽山典藏葫芦五年绍兴花雕酒500mi*</li>
                <li>￥270</li>
                <li>会稽山典藏葫芦五年绍兴花雕酒500mi*6瓶零售58元/瓶</li>
            </ul>
        </li>
      </ul>
      <p>查看更多</p>
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
     this.$store.getters.getScrollListen("#partTwo",this);
     },
     /*window.addEventListener("scroll",function(){
          if((document.documentElement.scrollTop+document.documentElement.clientHeight)>(document.querySelector("#partTwo").offsetTop)){
              console.log("xxxx");
              This.s_h.initAnimate1=true;
          }
      })*/
  
  methods:{
      
  }
  
}
</script>
<style>
#partTwo{
    border-top:1px solid grey;
    border-bottom:1px solid grey;
}

#partTwo{
    width: 100%;
    position:relative;
    top:0;
    left:0;
    
}
ul.partTwo_Ul{
  
    
}
ul.partTwo_Ul>li{
    display: flex;
    margin: 10px;
    background: whitesmoke;
}
ul.partTwo_Ul img{
    width:100px;
    height:100px;
}
ul.partTwo_Ul ul{
    
}
ul.partTwo_Ul ul>li{
    font-size: 12px;
    padding: 5px 10px;
    text-align: left;
}
ul.partTwo_Ul ul>li:nth-child(2){
    color: darkgoldenrod;
    font-size: 10px;
}
ul.partTwo_Ul ul>li:nth-child(3){
    color: grey;
}
</style>