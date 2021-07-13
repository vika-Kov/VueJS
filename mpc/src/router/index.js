import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../page/PageDashboard'
import PageAbout from '../page/PageAbout'
import Page404 from '../page/Page404'
import AddPaymentFood from '../page/AddPaymentFood'
Vue.use(Router)

const router =  new Router({
    mode:'history',
    routes:[
        {
            path:'/dashboard',
            name: 'dashboard',
            component:PageDashboard
        },
        {
            path:'/about',
            name: 'about',
            component:PageAbout
        },
        {
            path:'/page404',
            name: 'page404',
            component:Page404
        },
        {
            path:'/Food?value=200',
            name: 'Food?value=200',
            component:AddPaymentFood
        },
    ]
})

export default router