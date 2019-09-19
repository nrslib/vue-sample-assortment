<template>
    <v-container v-if="hasAnyMessage">
        <v-layout>
            <v-list-item>
                <Message>{{head}}</Message>
            </v-list-item>
        </v-layout>
        <v-layout v-for="(message, index) in tails" :key="index">
            <v-list-item>
                <Message>{{message}}</Message>
            </v-list-item>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import ServiceLocator from "../../../../library/service/ServiceLocator";
    import Message from "@/components/atomic/atoms/message/Message.vue";
    @Component({
        components: {Message}
    })
    export default class MessageArea extends Vue {
        private messageService = ServiceLocator.instance.messageService;

        public get hasAnyMessage(): boolean {
            return this.messageService.hasAnyMessage;
        }

        public get head(): string {
            return this.messageService.headMessage;
        }

        public get tails(): string[] {
            return this.messageService.tailMessages;
        }
    }
</script>

