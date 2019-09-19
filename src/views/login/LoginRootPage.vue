<template>
    <NoAuthorityTemplate>
        <Contents>
            <LoginForm @logged-in="onLoggedIn" />
        </Contents>
    </NoAuthorityTemplate>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import { Action } from 'vuex-class';
    import NoAuthorityTemplate from "@/components/atomic/templates/layers/NoAuthorityTemplate.vue";
    import LoginForm from "@/components/atomic/organisms/form/login/LoginForm.vue";
    import Contents from "@/components/atomic/templates/contents/Contents.vue";
    import ServiceLocator from "@/library/service/ServiceLocator";
    @Component({
        components: {Contents, LoginForm, NoAuthorityTemplate}
    })
    export default class LoginRootPage extends Vue {
        @Action("account/loadAccountInfo") public loadAccountInfo!: () => Promise<void>;

        public async onLoggedIn() {
            await this.loadAccountInfo();
            const routeService = ServiceLocator.instance.routeService;
            if (routeService.hasBackRoute) {
                const nextRoute = routeService.pathToBack();
                routeService.clear();
                this.$router.push(nextRoute);
            }else {
                this.$router.push({name: 'top'});
            }
        }
    }
</script>
