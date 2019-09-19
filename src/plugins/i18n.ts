import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messageJson = require('../data/message.json');
export default new VueI18n({
    locale: 'ja',
    messages: messageJson
});
