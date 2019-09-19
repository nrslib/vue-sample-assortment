<template>
    <v-breadcrumbs :items="items" divider=">" />
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {IBreadcrumb} from "@/components/atomic/organisms/breadcrumbs/IBreadcrumb";

    @Component
    export default class Breadcrumbs extends Vue {
        @Prop() items!: IBreadcrumb[];
    }
</script>
