import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import {createRouter, createWebHistory} from 'vue-router'

//cretating the routes
const routes=[
    {
        name:"Home",
        component:Home,
        path:'/'
    },

    {
        name:"SignUp",
        component:Signup,
        path:'/sign-up'
    },

    {
        name:'Login',
        component: Login,
        path:'/login'
    },

    {
        name:"Add",
        component:Add,
        path:'/add-a-restaurant'
    },

    {
        name:"Update",
        component:Update,
        path:'/update-restaurant/:id'
    }

]

//creting the router, which will keep the track of history object and routed array
const router=createRouter({
    history:createWebHistory(),
    routes
})

//exporting the router for its working
export default router