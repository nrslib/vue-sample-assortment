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
                    <RadioButton id="user" value="user" label="user" />
                </RadioButtonGroup>
            </v-col>
            <v-btn type="submit"
                   color="success"
                   class="mr-4">
                Login
            </v-btn>
        </v-container>
    </v-form>
</template>

<script lang="ts">
    import {Component, Emit, Vue} from "vue-property-decorator";
    import Textbox from "@/components/atomic/atoms/text/Textbox.vue";
    import RadioButtonGroup from "@/components/atomic/molecules/radio/RadioButtonGroup.vue";
    import RadioButton from "@/components/atomic/atoms/radio/RadioButton.vue";
    import wraxios from '@/library/net/wraxios';

    @Component({
        components: {RadioButton, RadioButtonGroup, Textbox}
    })
    export default class LoginForm extends Vue {
        public id: string = '';
        public password: string = '';
        public role: string ='administrator';

        public onSubmit(){
            const payload = {
                id: this.id,
                password: this.password,
                role: this.role
            };

            wraxios.post('/login', payload)
                .then(_ => {
                    this.onLoggedIn();
                });
        }

        @Emit('logged-in')
        public onLoggedIn() {}
    }
</script>
