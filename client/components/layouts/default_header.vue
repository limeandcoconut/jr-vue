<template>
    <header id="header">
        <a v-link="{path: '/'}" class="link--hidden">
            <div @mouseover="beginAnimation" @mouseleave="declineAnimation" @animationiteration="checkAnimation" v-el:logo class="header__logo"></div>
        </a>
    </header>
</template>

<script>
// import { logout } from '../../vuex/actions.js';
export default {
    name: 'header',
    data() {
        return {
            // show_admin: true,
            // cart_count: 0,
            logoAnimated: false,
            logoHovered: false,
        };
    },
    // vuex: {
    //     getters: {
    //         cart_total: state => state.get_cart_total,
    //         is_authed: state => state.is_authed,
    //     },
    // },
    created() {
        // if (localStorage.cart) {
            // let cart = JSON.parse(localStorage.cart);
            // cart.products.forEach(product => {
            //     console.log(product);
            // });
            // this.cart_count = cart.count;
            // this.cart_total = cart.total;
        // }
    },
    ready() {
        // console.log(this.$els.logo);
    },
    methods: {
        // logout() {
        //     logout(this.$store);
        // },
        beginAnimation() {
            if (!this.logoHovered) {
                this.$els.logo.className += ' header__logo--animated';
                this.logoHovered = true;
                this.logoAnimated = true;
            }
        },
        declineAnimation() {
            if (this.logoHovered) {
                this.logoHovered = false;
            }
        },
        checkAnimation() {
            if (!this.logoHovered && this.logoAnimated) {
                this.$els.logo.className = 'header__logo';
            }
        },
    },
};
</script>
