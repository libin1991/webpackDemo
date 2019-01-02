import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";

new Vue({
    router,
    el:"#app",
    render:(e)=>e(App)
});