<template>
    <v-layout row>
        <v-container md12>
            <slot name="breadcrumbs" />
        </v-container>

        <MessageArea />

        <slot />
    </v-layout>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import MessageArea from "../../organisms/message/MessageArea.vue";
    @Component({
        components: {MessageArea}
    })
    export default class ContentsWithBreadcrumbs extends Vue {
    }
</script>
