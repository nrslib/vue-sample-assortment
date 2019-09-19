<template>
    <v-text-field :value="value"
                  :label="label"
                  :type="type"
                  @input="onInput"
                  @blur="onBlur"
                  @change="onChange"
    />
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Textbox extends Vue {
        @Prop({default: ''}) value!: string;
        @Prop() label?: string;
        @Prop() type?: string;
        @Prop() placeholder?: string;

        @Emit('input')
        public onInput(value: string) {}

        @Emit('change')
        public onChange(value: string) {}

        @Emit('blur')
        public onBlur(value: string) {}
    }
</script>
