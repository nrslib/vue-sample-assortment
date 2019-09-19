<template>
    <Contents>
        <v-container>
            TopIndex
        </v-container>
        <v-container>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>たいとる</v-list-item-title>
                        <v-list-item-subtitle>さぶたいとる</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-container>
    </Contents>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Contents from "@/components/atomic/templates/contents/Contents.vue";
    @Component({
        components: {Contents}
    })
    export default class TopIndexPage extends Vue {

    }
</script>
