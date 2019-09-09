<template>
    <VAppBar>
        <VAppBarNavIcon />
        <HeaderTitle />
        <div class="flex-grow-1"></div>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <HeaderNavMenu />
    </VAppBar>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HeaderTitle from "@/components/atomic/atoms/header/HeaderTitle.vue";
    import HeaderNavMenu from "@/components/atomic/molecules/Header/HeaderNavMenu.vue";
    @Component({
        components: {HeaderNavMenu, HeaderTitle}
    })
    export default class HeaderMenu extends Vue {

    }
</script>
