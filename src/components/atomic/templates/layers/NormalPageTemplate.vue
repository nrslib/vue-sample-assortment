<template>
    <div>
        <HeaderMenu />
        <v-content>
            <slot/>
        </v-content>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HeaderMenu from "@/components/atomic/organisms/header/HeaderMenu.vue";
    import MessageArea from "@/components/atomic/organisms/message/MessageArea.vue";

    @Component({
        components: {MessageArea, HeaderMenu}
    })
    export default class NormalPageTemplate extends Vue {
    }
</script>
