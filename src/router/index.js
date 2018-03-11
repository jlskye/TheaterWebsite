import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
import MovieCategory from '@/components/MovieCategory'
import MovieDetail from '@/components/MovieDetail'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect:'/index'
    },
    {
      path:'/index',
      component:index
    },
    {
      path:'/classify/:id',
      component:MovieCategory
    },
    {
      path:'/item/:id',
      component:MovieDetail
    }
  ]
})
