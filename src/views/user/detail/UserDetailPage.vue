<template>
    <ContentsWithBreadcrumbs>
        <template slot="breadcrumbs">
            <Breadcrumbs :items="[
                    {text: 'user', to: {name: 'user-index'}, exact: true},
                    {text: 'detail', to: {name: 'user-detail'}, exact: true}
                ]"
            />
        </template>
        <v-container>
            <Heading1>User Detail</Heading1>
            <p>
                id: {{id}}
            </p>
            <p>
                name: {{name}}
            </p>
        </v-container>
        <v-container>
            <SecondaryButton :to="{name: 'user-index'}">
                Back
            </SecondaryButton>
        </v-container>
    </ContentsWithBreadcrumbs>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import wraxios from '@/library/net/wraxios';
    import {IUserGetDetailResponse} from "@/library/dto/user";
    import List from "@/components/atomic/organisms/list/List.vue";
    import ListItem from "@/components/atomic/molecules/list/ListItem.vue";
    import ListTitle from "@/components/atomic/atoms/list/ListTitle.vue";
    import Heading1 from "@/components/atomic/atoms/heading/Heading1.vue";
    import SecondaryButton from "@/components/atomic/atoms/button/SecondaryButton.vue";
    import ContentsWithBreadcrumbs from "@/components/atomic/templates/contents/ContentsWithBreadcrumbs.vue";
    import Breadcrumbs from "@/components/atomic/organisms/breadcrumbs/Breadcrumbs.vue";
    @Component({
        components: {Breadcrumbs, ContentsWithBreadcrumbs, SecondaryButton, Heading1, ListTitle, ListItem, List}
    })
    export default class UserDetailPage extends Vue {
        public id: string = "";
        public name: string = "";

        public created() {
            const id = this.$route.params.id;
            wraxios.get<IUserGetDetailResponse>('/user/' + id)
                .then(res => {
                    const data =res.data;
                    this.id = data.user.id;
                    this.name = data.user.name;
                })
        }
    }
</script>
