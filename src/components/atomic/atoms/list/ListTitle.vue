<template>
    <v-list-item-content>
        <v-list-item-title>
            <slot />
        </v-list-item-title>
    </v-list-item-content>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class ListTitle extends Vue {
    }
</script>
