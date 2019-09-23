<template>
    <v-btn color="primary" :type="type" :to="to" @click="onClick">
        <slot />
    </v-btn>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import ButtonBase from "@/components/atomic/atoms/button/ButtonBase";

    @Component
    export default class PrimaryButton extends ButtonBase {
    }
</script>
