<template>
    <div id="page-wrapper">
        <default-header></default-header>
        <slot></slot>
        <default-footer></default-footer>
    </div>
</template>

<script>
    import DefaultHeader from './default_header.vue';
    import DefaultFooter from './default_footer.vue';

    export default {
        components: {
            DefaultHeader,
            DefaultFooter,
        },
    };
</script>
