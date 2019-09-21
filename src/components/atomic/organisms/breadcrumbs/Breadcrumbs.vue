<template>
    <v-breadcrumbs divider=">" :items="itemsWithTop">
<!--        <BreadcrumbsItem v-for="(item, index) in itemsWithTop" :to="item.to" :key="index">-->
<!--            {{item.text}}-->
<!--        </BreadcrumbsItem>-->
    </v-breadcrumbs>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {IBreadcrumb} from "@/components/atomic/organisms/breadcrumbs/IBreadcrumb";
    import BreadcrumbsItem from "@/components/atomic/atoms/breadcrumbs/BreadcrumbsItem.vue";
    @Component({
        components: {BreadcrumbsItem}
    })
    export default class Breadcrumbs extends Vue {
        @Prop() items!: IBreadcrumb[];

        public get itemsWithTop(): IBreadcrumb[] {
            return [
                {text: "Top", to: "/"}, // cannot use named route...
                ...this.items
            ];
        }
    }
</script>
