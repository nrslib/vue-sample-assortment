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
            <v-list-item>
                <HeaderNavMenuLink :to="{ name: 'user-index' }">
                    user list
                </HeaderNavMenuLink>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import LinkComponent from "@/components/atomic/atoms/link/LinkComponent.vue";
    import HeaderNavMenuLink from "@/components/atomic/atoms/header/HeaderNavMenuLink.vue";
    @Component({
        components: {HeaderNavMenuLink, LinkComponent}
    })
    export default class HeaderNavMenu extends Vue {
    }
</script>
