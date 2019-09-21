<template>
    <v-label>
        <slot />
    </v-label>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export class Label extends Vue {
    }
</script>
