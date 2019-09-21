import {AccountRole} from "../../../../library/account/AccountRole";
import {AccountRole} from "../../../../library/account/AccountRole";
<template>
    <v-menu
            left
            bottom
    >
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item v-if="isAdministrator">
                <HeaderNavMenuLink :to="{ name: 'user-index' }">
                    user list
                </HeaderNavMenuLink>
            </v-list-item>
            <v-list-item>
                <HeaderNavMenuLabel @click="onLogoutLabelClick">
                    logout
                </HeaderNavMenuLabel>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import LinkComponent from "@/components/atomic/atoms/link/LinkComponent.vue";
    import HeaderNavMenuLink from "@/components/atomic/atoms/header/HeaderNavMenuLink.vue";
    import HeaderNavMenuLabel from "@/components/atomic/atoms/header/HeaderNavMenuLabel.vue";
    import {Getter} from "vuex-class";
    import {AccountRole} from "@/library/account/AccountRole";

    @Component({
        components: {HeaderNavMenuLabel, HeaderNavMenuLink, LinkComponent}
    })
    export default class HeaderNavMenu extends Vue {
        @Getter("account/isAllowed") public accountIsAllowed!: (_: AccountRole) => boolean;
        @Getter("account/isAllowedAny") public accountIsAllowedAny!: (_: AccountRole[]) => boolean;

        public get isAdministrator() {
            return this.accountIsAllowedAny([AccountRole.Administrator, AccountRole.Advanced]);
        }

        public onLogoutLabelClick() {
            this.$router.push({name: 'logout'})
        }
    }
</script>
