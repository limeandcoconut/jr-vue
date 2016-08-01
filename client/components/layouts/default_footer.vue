<template>
    <footer id="footer">
        <!-- <div class="footer__copyright"> -->
            <!-- Copyright &copy; {{ moment(new Date()).format('YYYY') }} -->
            <a href="mailto:james@snapshot.is" class="footer__mailto">Contact</a>
        <!-- </div> -->
    </footer>
</template>

<script>
    import moment from '../../libs/moment.min.js';
    export default {
        name: 'footer',
        methods: {
            moment: function(date) {
                return moment(date);
            },
        },
    };
</script>
