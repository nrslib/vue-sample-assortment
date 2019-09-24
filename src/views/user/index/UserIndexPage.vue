<template>
    <ContentsWithBreadcrumbs>
        <template slot="breadcrumbs">
            <Breadcrumbs :items="[
                    {text: 'user', to: {name: 'user-index'}, exact: true},
                ]"
            />
        </template>
        <v-container>
            <Heading1>
                User Index
            </Heading1>
        </v-container>
        <v-container>
            <List>
                <ListItem v-for="(user, index) in users" :key="index">
                    <ListTitle>
                        <LinkComponent :to="{name:'user-detail', params: {id: user.id}}">
                            {{user.name}}
                        </LinkComponent>
                    </ListTitle>
                </ListItem>
            </List>
        </v-container>
        <v-container>
            <PrimaryButton v-if="showAddButton" @click="onAddButtonClick">Add</PrimaryButton>
        </v-container>
    </ContentsWithBreadcrumbs>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import wraxios from '@/library/net/wraxios';
    import ContentsWithBreadcrumbs from "@/components/atomic/templates/contents/ContentsWithBreadcrumbs.vue";
    import Breadcrumbs from "@/components/atomic/organisms/breadcrumbs/Breadcrumbs.vue";
    import {IUserGetResponse, IUserModel} from "@/library/dto/user";
    import List from "@/components/atomic/organisms/list/List.vue";
    import ListItem from "@/components/atomic/molecules/list/ListItem.vue";
    import ListTitle from "@/components/atomic/atoms/list/ListTitle.vue";
    import Heading1 from "@/components/atomic/atoms/heading/Heading1.vue";
    import LinkComponent from "@/components/atomic/atoms/link/LinkComponent.vue";
    import PrimaryButton from "@/components/atomic/atoms/button/PrimaryButton.vue";
    import {AccountRole} from "@/library/account/AccountRole";
    import {Getter} from "vuex-class";

    @Component({
        components: {
            PrimaryButton,
            LinkComponent, Heading1, ListTitle, ListItem, List, Breadcrumbs, ContentsWithBreadcrumbs}
    })
    export default class UserIndexPage extends Vue {
        @Getter("account/isAllowed") public accountIsAllowed!: (_: AccountRole) => boolean;
        public users:IUserModel[] = []

        public get showAddButton(): boolean {
            return this.accountIsAllowed(AccountRole.Administrator);
        }

        public created() {
            wraxios.get<IUserGetResponse>('/user')
                .then(res => {
                    this.users = res.data.users;
                });
        }

        public onAddButtonClick() {
            this.$router.push({name: 'user-add-input'});
        }
    }
</script>
