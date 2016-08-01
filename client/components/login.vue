<template>
    <!-- <CardHeader title="Login" /> -->
    <form class="login_form" v-on:submit="do_login">
        <input type="text" v-model="email" />
        <input type="password" v-model="pwd" />
        <a href="#!" @click.prevent="test_method">Test Method</a>

        <div v-if="error">
            {{ error }}
        </div>

        <div class="login_button">
            <button>Login</button>
            <!-- <RaisedButton type="submit" label="Login" primary={true} /> -->
        </div>
    </form>

    <a href="#!" @click="check_auth('test')">Check Auth Status</a>
</template>

<script>
import { login } from '../vuex/actions.js';
export default {
    name: 'login',
    data() {
        return {
            email: 'brian@whicheloe.us',
            pwd: '123456',
            error: '',
        };
    },
    created() {
    },
    methods: {
        do_login(event) {
            event.preventDefault();
            this.error = '';
            let endpoint = '/api/login';
            let payload = {email: this.email, pwd: this.pwd};
            this.$http.post(endpoint, payload).then(response => {
                let answer = response.data;
                console.log(answer);
                if (answer.success && answer.token) {
                    login(this.$store, answer.token);
                } else if (answer.error) {
                    this.error = answer.error;
                }
            });
        },
        test_method() {
            let endpoint = '/api/check-auth';
            // let payload = {email: this.email, pwd: this.pwd};
            let payload = {token: localStorage.token};
            this.$http.post(endpoint, payload).then(response => {
                let answer = response.data;
                console.log(answer);
            });
        },
        // check_auth() {
        //     let endpoint = 'http://localhost:3005/api/test';
        //     let payload = {token: localStorage.token};
        //     this.$http.post(endpoint, payload).then(response => {
        //         console.log(response.data);
        //     }, response => {
        //         console.log(response);
        //     });
        // },
    },
};
</script>
