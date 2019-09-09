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

    @Component({
        components: {HeaderMenu}
    })
    export default class NormalPageTemplate extends Vue {
    }
</script>
