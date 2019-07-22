<template>
    <div id="app">
        <home></home>
    </div>
</template>
<script>
export default {
    components: {
        home: () => import("./components/home/home")
    }
};
</script>


