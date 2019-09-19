<template>
    <VNavigationDrawer v-show="show" permanent>
        <VListItem>
        </VListItem>
    </VNavigationDrawer>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class HeaderNavigation extends Vue {
        @Prop() public show?: boolean;
    }
</script>
