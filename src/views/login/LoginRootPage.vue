<template>
    <NoAuthorityTemplate>
        <Contents>
            <LoginForm :disabled="formDisabled" @submit="onSubmit" />
        </Contents>
    </NoAuthorityTemplate>
</template>

<script lang="ts">
    import wraxios from '@/library/net/wraxios';
    import {Component, Vue} from "vue-property-decorator";
    import { Action } from 'vuex-class';
    import NoAuthorityTemplate from "@/components/atomic/templates/layers/NoAuthorityTemplate.vue";
    import LoginForm from "@/components/atomic/organisms/form/login/LoginForm.vue";
    import Contents from "@/components/atomic/templates/contents/Contents.vue";
    import ServiceLocator from "@/library/service/ServiceLocator";
    import {ILoginRequest} from "@/library/dto/login";

    @Component({
        components: {Contents, LoginForm, NoAuthorityTemplate}
    })
    export default class LoginRootPage extends Vue {
        @Action("account/loadAccountInfo") public loadAccountInfo!: () => Promise<void>;

        public formDisabled: boolean = false;

        public onSubmit(model: ILoginRequest) {
            ServiceLocator.instance.messageService.clearMessage();
            this.formDisabled = true;
            wraxios.post('/login', model, { onErrored: () => { this.formDisabled = false; }})
                .then(_ => {
                    this.onLoggedIn();
                });
        }

        public async onLoggedIn() {
            await this.loadAccountInfo();
            const routeService = ServiceLocator.instance.routeService;
            if (routeService.hasBackRoute) {
                const nextRoute = routeService.pathToBack();
                routeService.clear();
                this.$router.push(nextRoute);
            } else {
                this.$router.push({name: 'top'});
            }
        }
    }
</script>
