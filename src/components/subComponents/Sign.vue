<template>
  <div id="pageSign" class="initAnimate1">
   <ul class="signList">
        <li><div><img src="../../../public/images/sign1.png" alt=""></div><P>微海报</P></li>
        <li><div><img src="../../../public/images/sign2.png" alt=""></div><P>绍兴黄酒</P></li>
        <li><div><img src="../../../public/images/sign3.png" alt=""></div><P>燕麦酒</P></li>
        <li><div><img src="../../../public/images/sign4.png" alt=""></div><P>联系我们</P></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
      return{
         
      }
  },
  created(){
      /*setTimeout(()=>{this.s_h=true;},500)*/
  }
  
}
</script>
<style>
#pageSign{
    padding-top: 10px;
}
ul.signList{
    margin: 0;
    padding:0;
    list-style: none;
    display: flex;
    justify-content: space-around;
}
ul.signList>li{
    margin:5px;
}
</style>