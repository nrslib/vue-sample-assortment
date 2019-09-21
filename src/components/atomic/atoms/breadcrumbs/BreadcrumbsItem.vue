<template>
    <v-breadcrumbs-item>
        <RouterLink :to="to" :class="{'router-link-active': false}">
            <slot />
        </RouterLink>
    </v-breadcrumbs-item>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Route} from "vue-router";

    @Component
    export default class BreadcrumbsItem extends Vue {
        @Prop() public to?: Route;
        @Prop() public disabled?: boolean;
    }
</script>
