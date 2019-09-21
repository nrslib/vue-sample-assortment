import {AccountRole} from "../../../../../library/account/AccountRole";
<template>
    <v-form @submit.prevent="onSubmit">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <Textbox v-model="id" label="id" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <Textbox v-model="name" label="name" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <Textbox v-model="password" label="password" type="password" />
                </v-col>
            </v-row>
            <v-col cols="12" md="4">
                <RadioButtonGroup v-model="role">
                    <RadioButton id="advanced" value="advanced" label="advanced" />
                    <RadioButton id="user" value="user" label="user" />
                </RadioButtonGroup>
            </v-col>
            <slot name="button-left-space" />
            <PrimaryButton type="submit" class="mr-4">
                Next
            </PrimaryButton>
        </v-container>
    </v-form>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";
    import RadioButtonGroup from "@/components/atomic/molecules/radio/RadioButtonGroup.vue";
    import RadioButton from "@/components/atomic/atoms/radio/RadioButton.vue";
    import PrimaryButton from "@/components/atomic/atoms/button/PrimaryButton.vue";
    import Textbox from "@/components/atomic/atoms/text/Textbox.vue";
    import {UserInputModel} from "@/components/atomic/organisms/form/user/UserInputModel";

    @Component({
        components: {Textbox, PrimaryButton, RadioButton, RadioButtonGroup}
    })
    export default class UserInputForm extends Vue {
        public id: string = "";
        public name: string = "";
        public password: string = "";
        public role: string = "user";

        @Prop() initialValue?: UserInputModel;

        public created() {
            if (!!this.initialValue) {
                this.id = this.initialValue.id;
                this.name = this.initialValue.name;
                this.password = this.initialValue.password;
                this.role = this.initialValue.role;
            }
        }

        public onSubmit() {
            this.submit(new UserInputModel(this.id, this.name, this.password, this.role))
        }

        @Emit()
        public submit(model: UserInputModel) {}
    }
</script>
