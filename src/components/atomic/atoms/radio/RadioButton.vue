<template>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class RadioButton extends Vue {
        @Prop() public id!: string;
        @Prop() public value!: any;
        @Prop() public label?: string;
    }
</script>