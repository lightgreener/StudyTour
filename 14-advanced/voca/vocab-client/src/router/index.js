import Vue from 'vue';
import Router from 'vue-router';

import Words from '../views/Words.vue'
import New from '../views/New.vue'
import Show from '../views/Show.vue'
import Edit from '../views/Edit.vue'
import Test from '../views/Test.vue'

Vue.use(Router);

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes:[
        {
            path:'/',
            redirect:'/words'
        },
        {
            path:'/words',
            name:'words',
            component: Words
        },
        {

        },
    ]
});
