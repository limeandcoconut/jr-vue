import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
// import mixins from './mixins.js';
// import interceptors from './interceptors.js';
import routes from './routes.js';
import App from './components/app.vue';
import './raf.js';

Vue.use(Router);
Vue.use(Resource);
// Vue.mixin(mixins);
// Vue.use(interceptors);

const router = new Router({history: true});
router.map(routes);

// FIXME: guid()
// if (!localStorage.user_id) {
//     localStorage.user_id = 'tmp_' + Math.round(Math.random() * 1000000000000);
//     localStorage.guest = 'is_guest';
//     localStorage.token = '123';
// }

// router.on('/', {component: Default, page: 'home'});

router.beforeEach(function(transition) {
    window.scrollTo(0, 0);
    if (!transition.to.matched) {
        transition.redirect('/404');
    }

    transition.next();
});

router.start(App, '#app');
