import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Accueil from '@/views/accueil'
import Patient from '@/views/patient'
import PageNotFound from '@/views/404'

Vue.use(Router)
export default new Router({
  mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        redirect: '/accueil'
      },
      {
        path: '/accueil',
        name: 'Accueil',
        meta: { bodyClass: 'm-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default' },
        component: Accueil
      },
      {
        path: '/patient',
        name: 'Patient',
        meta: { bodyClass: 'm-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default' },
        component: Patient
      },
      { path: "*", 
        meta: { bodyClass: 'm-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default' },
        component: PageNotFound }
    ]
  })
  