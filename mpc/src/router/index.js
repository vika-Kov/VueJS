import Vue from 'vue'
import Router from 'vue-router'

// import PageDashboard from '../page/PageDashboard'
// import PageAbout from '../page/PageAbout'
//import Page404 from '../page/Page404'



Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: ()=> import(/* webpackChunkName: "dashboard" */ '../page/PageDashboard.vue')
        },
        {
            path: '/dashboard/:page',
            name: 'dashboard',
            component: ()=> import(/* webpackChunkName: "dashboard" */ '../page/PageDashboard.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: ()=> import(/* webpackChunkName: "PageAbout" */ '../page/PageAbout.vue')
        },
        // {
        //     path: '/auth',
        //     name: 'Login',
        //     component: Page404
        // },
        // {
        //     path: "*",
        //     name: "NotFound",
        //     component: Page404
        // },
    ]
})

// const isAuth = false

// router.beforeEach((to, from, next)=>{
//     if(to.name !== 'Login' && !isAuth) {
//         next({
//             name: 'Login'
//         })
//     }else {
//         next()
//     }
// })

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