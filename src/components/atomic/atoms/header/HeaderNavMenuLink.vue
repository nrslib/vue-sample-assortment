<template>
    <v-list-item-content>
        <v-list-item-title @click="onClick" style="cursor: pointer;">
            <slot />
        </v-list-item-title>
    </v-list-item-content>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {RawLocation} from "vue-router";

    @Component
    export default class HeaderNavMenuLink extends Vue {
        @Prop() to!: RawLocation;

        public onClick() {
            this.$router.push(this.to);
        }
    }
</script>

<style scoped>

</style>