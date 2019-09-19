<template>
    <NormalPageTemplate>
        <RouterView />
    </NormalPageTemplate>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import NormalPageTemplate from "@/components/atomic/templates/layers/NormalPageTemplate.vue";
    @Component({
        components: {NormalPageTemplate}
    })
    export default class UserRootPage extends Vue {

    }
</script>
