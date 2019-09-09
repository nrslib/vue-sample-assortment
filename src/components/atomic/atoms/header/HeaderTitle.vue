<template>
    <VToolbarTitle @click="onClick" style="cursor: pointer;">
        Vue Sample Assortment
        <HeaderNavigation :show="false" />
    </VToolbarTitle>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import LinkComponent from "@/components/atomic/atoms/link/LinkComponent.vue";
    import HeaderNavigation from "@/components/atomic/atoms/header/HeaderNavigation.vue";
    @Component({
        components: {HeaderNavigation, LinkComponent}
    })
    export default class HeaderTitle extends Vue {
        public onClick() {
            this.$router.push({name: 'top-index'});
        }
    }
</script>
