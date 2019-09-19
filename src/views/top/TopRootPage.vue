<template>
    <NormalPageTemplate>
        <RouterView />
    </NormalPageTemplate>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import NormalPageTemplate from "@/components/atomic/templates/layers/NormalPageTemplate.vue";
    import Contents from "@/components/atomic/templates/contents/Contents.vue";

    @Component({
        components: {Contents, NormalPageTemplate}
    })
    export default class TopRootPage extends Vue {

    }
</script>
