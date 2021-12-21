import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./components/Profile.vue')
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import("./components/ArticlesList.vue")
    },
    {
      path: '/articles/:id',
      name: 'article-details',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Article.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import("./components/AddArticle.vue")
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./components/ContentAdmin.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./components/ContentUser.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
   const publicPages = ['/login', '/register', '/home'];
   const authRequired = !publicPages.includes(to.path);
   const loggedIn = localStorage.getItem('user');

   // trying to access a restricted page + not logged in
   // redirect to login page
   if (authRequired && !loggedIn) {
     next('/login');
   } else {
     next();
   }
});

//const router = new VueRouter({
//  mode: 'history',
//  base: process.env.BASE_URL,
//  routes
//})
//export default router