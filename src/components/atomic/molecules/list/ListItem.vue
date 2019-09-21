<template>
    <v-list-item>
        <slot />
    </v-list-item>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class ListItem extends Vue {
    }
</script>
