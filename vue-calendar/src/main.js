import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBkqhsgRi-bocXEWEqS3Z62zWnWlCvYMwg",
  authDomain: "vue-calendar-52cc6.firebaseapp.com",
  databaseURL: "https://vue-calendar-52cc6.firebaseio.com",
  projectId: "vue-calendar-52cc6",
  storageBucket: "vue-calendar-52cc6.appspot.com",
  messagingSenderId: "304154019351",
  appId: "1:304154019351:web:2c77b605bd7a1fe12afe52"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
