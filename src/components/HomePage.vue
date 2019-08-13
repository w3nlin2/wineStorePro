<template >
  <div id="homePage">
      
   <Title/>
   <Banner/>
   <Search/> 
   <Sign/>
   <PartOne/>
   <PartTwo/>
   <PartThree/>
   <PartFour/>
   <PartFive/>
   <PartSix/>
   <News/>
   <LM/>
  </div>
  
</template>

<script>
import Banner from './subComponents/Banner'
import Title from './subComponents/Title'
import Search from './subComponents/Search'
import Sign from './subComponents/Sign'
import PartOne from './subComponents/PartOne'
import PartTwo from './subComponents/PartTwo'
import PartThree from './subComponents/PartThree'
import PartFour from './subComponents/PartFour'
import PartFive from './subComponents/PartFive'
import PartSix from './subComponents/PartSix'
import News from './subComponents/News'
import LM from './subComponents/LM'

export default {
  data(){
      return{
       
      }
  },
  props: {
    
  },
  methods:{
      
  },
  created(){
    
  },
  components:{
      Banner,Title,Search,Sign,PartOne,PartTwo,PartThree,PartFour,PartFive,PartSix,News,LM
  },
  
}
</script>
<style>
#homePage{
  width: 100%;
}
.initAnimate1{
  position: relative;
  animation: iniani 0.5s ease-in ;
  animation-fill-mode:backwards;
}
.initAnimate2{
  position: relative;
  animation: iniani 0.5s ease-in 0.3s;
  animation-fill-mode:backwards;
}

@keyframes iniani{
  from{top: 100px;opacity: 0;}
  to{top:0;opacity: 1;}
}
ul{
  margin: 0;
  padding:0;
  
  }
</style>