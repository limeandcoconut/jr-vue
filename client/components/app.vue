<template>
    <div id="site_container">
        <router-view class="view" transition transition-mode="out-in">
            <template v-if="show_auth">
                <login></login>
            </template>
            <template v-if="!show_auth">
                <component :is="page"></component>
            </template>
        </router-view>
    </div>
</template>

<script>
import Home from './home.vue';
import Project from './project.vue';
import Clever from './clever.vue';
import FourOhFour from './four_oh_four.vue';

export default {
    // store: store,
    components: {
        Home,
        Project,
        Clever,
        // CountryStore,
        // Products,
        // Product,
        // Cart,
        // Checkout,
        // Profile,
        FourOhFour,
        // Login,
        // Register,
    },
    data() {
        console.log(this.$route);
        return {
            template: this.$route.template,
            page: this.$route.page,
            show_auth: false,
        };
    },
    watch: {
        $route: function() {
            console.log(this.$route);
            this.template = (this.$route.template) ? this.$route.template : 'default';
            this.page = (this.$route.page) ? this.$route.page : 'home';
            // this.check_auth();
        },
    },
    created() {
        // this.check_auth();

        // if (localStorage.cart) {
        //     console.log('my cart:', localStorage.cart);
        // } else {
        //     this.create_cart();
        // }

        // window.addEventListener('storage', event => {
        //     if (event.key === 'is_authed') {
        //         this.$store.dispatch('set_auth_status', event.newValue);
        //     }
        // });
    },
    methods: {
        // check_auth() {
        //     if (this.$route.auth && !localStorage.token) {
        //         this.show_auth = true;
        //     } else {
        //         this.show_auth = false;
        //     }
        // },
        // create_cart() {
        //     this.$http.post('/api/carts/create').then(response => {
        //         if (response.data) {
        //             console.log('created card:', response.text());
        //             localStorage.cart = response.text();
        //         }
        //     }, error => {
        //         if (error) {
        //             console.log(error);
        //         }
        //     });
        // },
    },
};
</script>
