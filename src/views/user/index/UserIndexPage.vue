<template>
    <v-container>
        UserIndex
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import wraxios from '@/library/net/wraxios';

    @Component
    export default class UserIndexPage extends Vue {
        public created() {
            wraxios.get('/user')
                .then(res => {
                    console.log(res)
                });
        }
    }
</script>
