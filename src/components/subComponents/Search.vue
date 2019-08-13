<template>
  <div id="pageSearch">
    <span class="iconfont icon-searchamagnifyingglass"></span>
    <input type="search">
    <!--<mt-search v-model="value"></mt-search>-->
  </div>
</template>

<script>
export default {
  data(){
      return{
          value:""
      }
  },
  
}
</script>
<style>
#pageSearch{
  position:relative;
}
#pageSearch>span{
  position:absolute;
  top:10px;
  left:10px;
}
input[type=search]{
  border-radius:5px;
  width: 100%;
  height: 40px;
  font-size: 25px;
  margin: 5px 0;
  background-color: rgba(109, 109, 109, 0.096);
  border:none;
  text-indent: 46px;
}
</style>