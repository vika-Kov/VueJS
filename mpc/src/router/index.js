import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../page/PageDashboard'
import PageAbout from '../page/PageAbout'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: PageDashboard
        },
        {
            path: '/dashboard/:page',
            name: 'dashboard',
            component: PageDashboard
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
    ]
})

const getTitleTemplatesName = routeName => {
    return {
        'dashboard': "My personal Cost",
        'about': "About Page",
        'NotFound': 'Page Not Found'
    }[routeName]
}

router.afterEach((to)=>{
    document.title = getTitleTemplatesName(to.name)

})

export default router