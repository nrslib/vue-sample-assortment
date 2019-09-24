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
                    <Textbox v-model="password" label="password" type="password" />
                </v-col>
            </v-row>
            <v-col cols="12" md="4">
                <RadioButtonGroup v-model="role">
                    <RadioButton id="admin" value="administrator" label="administrator" />
                    <RadioButton id="advanced" value="advanced" label="advanced" />
                    <RadioButton id="user" value="user" label="user" />
                </RadioButtonGroup>
            </v-col>
            <PrimaryButton type="submit" class="mr-4" :disabled="disabled">
                Login
            </PrimaryButton>
        </v-container>
    </v-form>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";
    import Textbox from "@/components/atomic/atoms/text/Textbox.vue";
    import RadioButtonGroup from "@/components/atomic/molecules/radio/RadioButtonGroup.vue";
    import RadioButton from "@/components/atomic/atoms/radio/RadioButton.vue";
    import PrimaryButton from "@/components/atomic/atoms/button/PrimaryButton.vue";
    import {ILoginRequest} from "@/library/dto/login";

    @Component({
        components: {PrimaryButton, RadioButton, RadioButtonGroup, Textbox}
    })
    export default class LoginForm extends Vue {
        public id: string = '';
        public password: string = '';
        public role: string ='administrator';

        @Prop() public disabled?: boolean;

        public onSubmit(){
            const payload: ILoginRequest = {
                id: this.id,
                password: this.password,
                role: this.role
            };

            this.submit(payload)
        }

        @Emit('submit')
        public submit(model: ILoginRequest) {
        }
    }
</script>
