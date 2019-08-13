<template>
  <div id="partThree" :class="s_h"  >
      <h1>绍兴  黄酒</h1>
      <div>
          <img src="../../../public/images/part3_pic1.jpg" alt="">
          <h4>浙江省绍兴市特产，中国国家地理标志产品</h4>
          <p>绍兴酒，又称绍兴黄酒、绍兴老酒，随着时间的久远而更为浓烈，所以绍兴酒称老酒，越陈越香。</p>
      </div>
      <div>
          <img src="../../../public/images/part3_pic2.jpg" alt="">
          <h4>女儿红的来历著名的绍兴花雕酒又名女儿酒</h4>
          <p>一种具甜、酸、苦、辛、鲜、涩6味于一体的丰满酒体，加上有高出其他酒的营养价值。</p>
      </div>
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
     this.$store.getters.getScrollListen("#partThree",this);
     },
     
  
  methods:{
      
  }
  
}
</script>
<style>

</style>