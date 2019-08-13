<template>
  <div id="partSix" :class="s_h"  >
      <h1>红酒  专区</h1>
      
    
      <ul class="psxUl">
          <li><img src="../../../public/images/part6_pic1.jpg" alt=""><p>金玉满堂20年绍兴花雕酒整件2.5L*2</p></li>
            <li><img src="../../../public/images/part6_pic2.jpg" alt=""><p>裕雕十年陈绍兴酒整件500mi*6瓶零售</p></li>
            <li><img src="../../../public/images/part6_pic3.jpg" alt=""><p>裕雕青瓷福寿花雕酒整件2.5L*2瓶零售</p></li>
            <li><img src="../../../public/images/part6_pic4.jpg" alt=""><p>裕雕珍品富贵花雕酒整件500mi*6瓶*</p></li>
            <li><img src="../../../public/images/part6_pic5.jpg" alt=""><p>圣塔裕雕醉十年陈绍兴黄酒整件500mi*</p></li>
            <li><img src="../../../public/images/part6_pic6.jpg" alt=""><p>裕雕盛世十五年绍兴花雕酒500mi*6瓶</p></li> 
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
     this.$store.getters.getScrollListen("#partSix",this);
     },
     
  
  methods:{
      
  }
  
}
</script>
<style>

ul.psxUl{
    margin: 0;
    padding:0;
    list-style:none;
    width: 100%;
    
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;


}
ul.psxUl>li{
    width: 100px;
    height:200px;

}
ul.psxUl>li>img{
    width: 100px;
    height:100px;
}
</style>