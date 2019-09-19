<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title><slot /></v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Message extends Vue {
    }
</script>
