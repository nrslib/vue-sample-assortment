<template>
    <VAppBar>
        <VAppBarNavIcon />
        <HeaderTitle />
        <div class="flex-grow-1"></div>
        <v-label>
            {{accountName}} ({{accountRoleText}})
        </v-label>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <HeaderNavMenu />
    </VAppBar>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HeaderTitle from "@/components/atomic/atoms/header/HeaderTitle.vue";
    import HeaderNavMenu from "@/components/atomic/molecules/header/HeaderNavMenu.vue";
    import {Getter} from "vuex-class";
    import {AccountRole} from "@/library/account/AccountRole";

    @Component({
        components: {HeaderNavMenu, HeaderTitle}
    })
    export default class HeaderMenu extends Vue {
        @Getter("account/name") public accountName!: string;
        @Getter("account/role") public accountRole!: AccountRole;

        public get accountRoleText() {
            return this.accountRole.toString();
        }
    }
</script>
