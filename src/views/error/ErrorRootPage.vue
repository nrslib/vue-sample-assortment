<template>
    <ErrorTemplate>
        <Contents>
            <router-view />
        </Contents>
    </ErrorTemplate>
</template>

<script>
    import ErrorTemplate from "../../components/atomic/templates/layers/ErrorTemplate";
    import Contents from "../../components/atomic/templates/contents/Contents";
    export default {
        name: "ErrorRootPage",
        components: {Contents, ErrorTemplate}
    }
</script>
