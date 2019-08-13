import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage'
import Banner from './components/subComponents/Banner'
import Title from './components/subComponents/Title'
import Search from './components/subComponents/Search'
import Sign from './components/subComponents/Sign'
import PartOne from './components/subComponents/PartOne'
import PartTwo from './components/subComponents/PartTwo'
import PartThree from './components/subComponents/PartThree'
import PartFour from './components/subComponents/PartFour'
import PartFive from './components/subComponents/PartFive'
import PartSix from './components/subComponents/PartSix'
import News from './components/subComponents/News'
import LM from './components/subComponents/LM'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/Title',
      name: 'Title',
      component: Title
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/PartOne',
      name: 'PartOne',
      component: PartOne
    },
    {
      path: '/PartTwo',
      name: 'PartTwo',
      component: PartTwo
    },
    {
      path: '/PartThree',
      name: 'PartThree',
      component: PartThree
    },
    {
      path: '/PartFour',
      name: 'PartFour',
      component: PartFour
    },
    {
      path: '/PartFive',
      name: 'PartFive',
      component: PartFive
    },
    {
      path: '/PartSix',
      name: 'PartSix',
      component: PartSix
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/LM',
      name: 'LM',
      component: LM
    },
    
  ]
})
