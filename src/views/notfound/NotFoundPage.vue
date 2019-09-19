<template>
    <NoAuthorityTemplate>
        <Contents>
            <v-flex md12>
                Not found
            </v-flex>
        </Contents>
    </NoAuthorityTemplate>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Contents from "@/components/atomic/templates/contents/Contents.vue";
    import NoAuthorityTemplate from "@/components/atomic/templates/layers/NoAuthorityTemplate.vue";

    @Component({
        components: {NoAuthorityTemplate, Contents}
    })
    export default class NotFoundPage extends Vue {
    }
</script>

