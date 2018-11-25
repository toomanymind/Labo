import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home'
import transition from '@/pages/transition'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: home},
    {path: '/transition', name: 'home', component: transition},
    {path: '/helloworld', name: 'HelloWorld', component: HelloWorld}
  ]
})
