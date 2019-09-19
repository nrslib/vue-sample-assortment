<template>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import wraxios from "@/library/net/wraxios";
    import {Route} from "vue-router";

    Component.registerHooks(['beforeRouteEnter']);

    @Component
    export default class LogoutRootPage extends Vue {
        public beforeRouteEnter(to: Route, from: Route, next: Function) {
            wraxios.post('/logout', null)
                .then(_ => {
                    next({name: 'login'});
                });
        }
    }
</script>
