<template>
    <div>
        <MessageArea />

        <slot />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import MessageArea from "../../organisms/message/MessageArea.vue";
    @Component({
        components: {MessageArea}
    })
    export default class Contents extends Vue {
    }
</script>
