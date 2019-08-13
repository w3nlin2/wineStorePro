import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrollListen:function(idx,This){
      window.addEventListener("scroll",function(){
        if((document.documentElement.scrollTop+document.documentElement.clientHeight)>(document.querySelector(idx).offsetTop)){
            console.log("xxxx");
            This.s_h.initAnimate1=true;
        }
    })
    },
  },
  mutations: {

  },
  actions: {

  },
  getters:{getScrollListen(state){return state.scrollListen}}
})
