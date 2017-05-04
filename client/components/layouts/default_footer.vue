<template>
    <footer id="footer" class="hover-highlight">
        <!-- <div class="footer__copyright"> -->
            <!-- Copyright &copy; {{ moment(new Date()).format('YYYY') }} -->
            <div class="footer__mailto hover-highlight__follow" :style="{ left: overlayLeft, top: overlayTop }">
                Email
                <br>
                James Ramirez
            </div>
            <a href="mailto:ramirez.c.james@gmail.com" class="hover-highlight__target" @mousemove="recordHover"></a>
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

                // console.log(event.offsetX. ' ' '
                // );
                console.log(this.recordedHoverLeft);

                window.raf(this.followText);
            },
            recordHoverFromChild(event) {
                this.recordedActiveHover = event.srcElement.parentElement.getAttribute('index');

                this.recordedHoverLeft = event.offsetX + event.target.offsetLeft - (event.target.offsetWidth / 2);
                this.recordedHoverTop = event.offsetY + event.target.offsetTop - (event.target.offsetHeight / 2);

                // console.log(event.offsetX, '  ', this.recordedHoverLeft + 150);
                // console.log(event.offsetY, '  ', this.recordedHoverTop);

                // console.log(event.offsetX);
                // console.log(event.target.offsetLeft);
                // console.log(event.target.offsetWidth/2);
                // console.log(event.target.offsetHeight);

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
