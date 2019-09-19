<template>
    <v-list-item-content>
        <v-list-item-title @click="onClick" style="cursor: pointer;">
            <slot />
        </v-list-item-title>
    </v-list-item-content>
</template>

<script lang="ts">
    import {Component, Emit, Vue} from "vue-property-decorator";

    @Component
    export default class HeaderNavMenuLabel extends Vue {
        @Emit('click')
        public onClick() {}
    }
</script>
