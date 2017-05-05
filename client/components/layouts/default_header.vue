<template>
    <header id="header">
        <a v-link="{path: '/'}" class="link--hidden">
            <div @mouseover="beginAnimation" @mouseleave="declineAnimation" @animationiteration="checkAnimation" v-el:logo class="header__logo logo"></div>
            <!-- <div @mouseover="beginAnimation" @mouseleave="declineAnimation" @animationiteration="checkAnimation" v-el:logo class="header__logo"></div> -->
        </a>
        <scroll-up>
    </header>
</template>

<script>
import scrollUp from '../scrollup.vue';

export default {
    name: 'header',
    components: {
        scrollUp,
    },
    data() {
        return {
            logoAnimated: false,
            logoHovered: false,
        };
    },
    created() {
    },
    ready() {
    },
    methods: {
        beginAnimation() {
            if (!this.logoHovered) {
                this.$els.logo.className += ' logo--animated';
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
                this.$els.logo.className = 'header__logo logo';
            }
        },
    },
};
</script>
