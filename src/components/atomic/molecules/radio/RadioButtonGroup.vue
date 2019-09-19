<template>
    <v-radio-group v-model="innerValue">
        <slot />
        <v-radio v-for="radio in radios"
                 :key="radio.id"
                 :id="radio.id"
                 :value="radio.value"
                 :label="radio.label" />
    </v-radio-group>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue, Watch} from "vue-property-decorator";
    import RadioButton from "@/components/atomic/atoms/radio/RadioButton.vue";

    interface IRadioButton {
        id: string;
        value: string;
        label?: string;
    }

    @Component
    export default class RadioButtonGroup extends Vue {
        public innerValue: any = null;

        @Prop() public value: any;
        public radios: IRadioButton[] = [];

        public created() {
            this.innerValue = this.value;
        }

        public mounted() {
            if (!this.$slots.default) {
                return;
            }

            // Hack: Do you have any ideas?
            const radioButtons = this.$slots.default
                .filter(component => component.componentInstance)
                .filter(component => component.componentInstance instanceof RadioButton)
                .map(column => column.componentInstance)
                .map(x => <IRadioButton><any>x)
                .map(x => {
                    return {
                        id: x.id,
                        value: x.value,
                        label: x.label
                    }
                });

            this.radios = radioButtons;
        }

        @Watch('value')
        public onValueChanged() {
            this.innerValue = this.value;
        }

        @Watch('innerValue')
        @Emit('input')
        public onInput() {}
    }
</script>