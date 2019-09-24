<template>
    <ContentsWithBreadcrumbs>
        <template slot="breadcrumbs">
            <Breadcrumbs :items="[
                    {text: 'user', to: {name: 'user-index'}, exact: true},
                    {text: 'input', to: {name: 'user-add-input'}, exact: true, disabled: true}
                ]"
            />
        </template>
        <v-container>
            <List>
                <ListItem>
                    Id: {{id}}
                </ListItem>
                <ListItem>
                    Name: {{name}}
                </ListItem>
                <ListItem>
                    Role: {{role}}
                </ListItem>
                <ListItem>
                    Password: ********
                </ListItem>
            </List>
        </v-container>
        <v-container>
            <SecondaryButton @click="onBackButtonClick">
                Back
            </SecondaryButton>
            <PrimaryButton @click="onSubmitButtonClick">
                Submit
            </PrimaryButton>
        </v-container>
    </ContentsWithBreadcrumbs>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import ContentsWithBreadcrumbs from "@/components/atomic/templates/contents/ContentsWithBreadcrumbs.vue";
    import Breadcrumbs from "@/components/atomic/organisms/breadcrumbs/Breadcrumbs.vue";
    import {RawLocation, Route} from "vue-router";
    import {UserInputModel} from "@/components/atomic/organisms/form/user/UserInputModel";
    import List from "@/components/atomic/organisms/list/List.vue";
    import ListItem from "@/components/atomic/molecules/list/ListItem.vue";
    import PrimaryButton from "@/components/atomic/atoms/button/PrimaryButton.vue";
    import SecondaryButton from "@/components/atomic/atoms/button/SecondaryButton.vue";
    import wraxios from "@/library/net/wraxios";
    import {pushNextWithError} from "@/library/net/wraxios/core/WraxiosCore";
    import {IUserCreateResponse} from "@/library/dto/user";

    Component.registerHooks(['beforeRouteEnter']);

    @Component({
        components: {SecondaryButton, PrimaryButton, ListItem, List, Breadcrumbs, ContentsWithBreadcrumbs}
    })
    export default class UserAddConfirmPage extends Vue {
        public model!: UserInputModel;

        public beforeRouteEnter(to: Route, from: Route, next: Function) {
            if (to.params instanceof UserInputModel) {
                next();
            } else {
                next({name: 'user-add-input'})
            }
        }

        public get id(): string { return this.model.id; }
        public get name(): string { return this.model.name; }
        public get role(): string { return this.model.role; }

        public created() {
            this.model = <UserInputModel><any>this.$route.params;
        }

        public onBackButtonClick() {
            this.$router.push(this.backLocation());
        }

        public onSubmitButtonClick() {
            wraxios.post<IUserCreateResponse>(
                'user',
                this.model,
                { onError: (res) => { pushNextWithError(res, this.backLocation()); }})
                .then(res=> {
                    const data = res.data;
                    this.$router.push({name: "user-detail", params: { id: data.createdUuid }})
                });
        }

        private backLocation(): RawLocation {
            return {name: 'user-add-input', params: <any>this.model};
        }
    }
</script>
