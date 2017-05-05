<template>
    <footer id="footer" class="hover-highlight section">
        <!-- <div class="footer__copyright"> -->
            <!-- Copyright &copy; {{ moment(new Date()).format('YYYY') }}
            <div class="footer__mailto hover-highlight__follow" :style="{ left: overlayLeft, top: overlayTop }">
                Email
                <br>
                James Ramirez
            </div> -->
            <div class="section__main">
            Got a project in mind?
                <br>
                Wanna grab a coffee
                <br>
                and quote Seinfeld?
                <br>
                Lets talk.
                <br></div>
            <div class="footer__mailto hover-highlight__follow" :style="{ left: overlayLeft, top: overlayTop }">
                <a href="mailto:hello@jamescramirez.com" class="footer__link link">hello@jamescramirez.com</a>
            </div>
            <a href="mailto:hello@jamescramirez.com" class="hover-highlight__target" @mousemove="recordHover"></a>
        <!-- </div> -->
    </footer>
</template>

<script>
    import moment from '../../libs/moment.min.js';
    export default {
        name: 'footer',
        data() {
            return {
                overlayLeft: 0,
                overlayTop: 0,
                activeHover: 0,
            };
        },
        methods: {
            moment: function(date) {
                return moment(date);
            },
            recordHover(event) {
                this.recordedActiveHover = event.srcElement.getAttribute('index');
                this.recordedHoverLeft = event.offsetX;
                this.recordedHoverTop = event.offsetY;

                window.raf(this.followText);
            },
            recordHoverFromChild(event) {
                this.recordedActiveHover = event.srcElement.parentElement.getAttribute('index');

                this.recordedHoverLeft = event.offsetX + event.target.offsetLeft - (event.target.offsetWidth / 2);
                this.recordedHoverTop = event.offsetY + event.target.offsetTop - (event.target.offsetHeight / 2);

                window.raf(this.followText);
                event.stopPropagation();
                return false;
            },
            followText() {
                this.overlayLeft = this.recordedHoverLeft + 'px';
                this.overlayTop = this.recordedHoverTop + 'px';
                this.activeHover = this.recordedActiveHover;
            }
        }
    };
</script>
