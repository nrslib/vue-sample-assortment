<template>
    <a v-if="href" href="href" target="_blank" rel="noopener">
        <slot />
    </a>
    <router-link v-else
                 :to="to">
        <slot />
    </router-link>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {RawLocation} from "vue-router";

    @Component
    export default class LinkComponent extends Vue {
        @Prop() public href?: string;
        @Prop() public to?: RawLocation;
    }
</script>
