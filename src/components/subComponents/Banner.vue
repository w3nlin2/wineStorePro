<template>
  <div id="pjBanner">
    <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../../public/images/banner1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../../public/images/banner2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../../public/images/banner3.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../../public/images/banner4.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../../public/images/banner5.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../../public/images/banner6.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../../public/images/banner7.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../../public/images/banner8.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data(){
      return{

      }
  },
  props: {
    
  }
}
</script>

<style>
#pjBanner{
    height: 200px;
}
</style>