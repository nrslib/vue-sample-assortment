<template>
    <ContentsWithBreadcrumbs>
        <template slot="breadcrumbs">
            <Breadcrumbs :items="[
                    {text: 'user', to: {name: 'user-index'}, exact: true},
                    {text: 'input', to: {name: 'user-add-input'}, exact: true}
                ]"
            />
        </template>
        <v-container>
            <Heading1>User Add Input</Heading1>
        </v-container>
        <v-container>
            <UserInputForm :initialValue="initialValue" @submit="onSubmit" />
        </v-container>
        <v-container>
            <SecondaryButton @click="onBackButtonClick">
                Back
            </SecondaryButton>
        </v-container>
    </ContentsWithBreadcrumbs>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import ContentsWithBreadcrumbs from "../../../../components/atomic/templates/contents/ContentsWithBreadcrumbs.vue";
    import Breadcrumbs from "../../../../components/atomic/organisms/breadcrumbs/Breadcrumbs.vue";
    import Heading1 from "@/components/atomic/atoms/heading/Heading1.vue";
    import UserInputForm from "@/components/atomic/organisms/form/user/UserInputForm.vue";
    import {UserInputModel} from "@/components/atomic/organisms/form/user/UserInputModel";
    import PrimaryButton from "@/components/atomic/atoms/button/PrimaryButton.vue";
    import SecondaryButton from "@/components/atomic/atoms/button/SecondaryButton.vue";

    @Component({
        components: {SecondaryButton, PrimaryButton, UserInputForm, Heading1, Breadcrumbs, ContentsWithBreadcrumbs}
    })
    export default class UserAddInputPage extends Vue {
        public get initialValue(): UserInputModel | null {
            return this.$route.params instanceof UserInputModel ? <any>this.$route.params : null;
        }

        public onSubmit(model: UserInputModel) {
            this.$router.push({
                name: 'user-add-confirm',
                params: <any>model
            });
        }

        public onBackButtonClick() {
            this.$router.push({name: 'user-index'});
        }
    }
</script>
