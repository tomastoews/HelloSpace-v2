import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home';
import SearchOutput from '@/components/SearchOutput';
import ItemDetails from '@/components/ItemDetails';

import { Notification } from 'element-ui';

Vue.use(VueRouter);

const base = process.env.NODE_ENV === 'production'
            ? '/hellospace/'
            : '/';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: 'random',
            component: Home
        },
        {
            path: '/search/',
            redirect: '/'
        },
        {
            path: '/search/:searchTerm',
            name: 'search',
            component: SearchOutput
        },
        {
            path: '/item/',
            redirect: '/'
        },
        {
            path: '/item/:id',
            name: 'details',
            component: ItemDetails
        }
    ],
    base: base,
    mode: 'history',
});

router.beforeEach((to, from, next) => {
    // Clear all notifications
    Notification.closeAll();
    next();  
})

export default router;