import Vue from 'vue'
import VueRouter  from 'vue-router'

import home from '@/components/pages/Home.vue'
import about from '@/components/pages/About.vue'


Vue.use(VueRouter)

const router = new VueRouter ({
    base: __dirname,
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', name: 'home', component: home, meta:{requireAuth:false}},
        { path: '/about', name: 'about', component: about, meta:{requireAuth:false}}
       
    ]
})


// router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some(record => record.meta.requireAuth)
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user && !requiresAuth) {
//             next({name:'home'});
//         } 
//         else if (!user && requiresAuth) {
//             next({name:'login'});
//         }
//         else{
//             next()
//         }
//     });
 
//  })

  export default router;