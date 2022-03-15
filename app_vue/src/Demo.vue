<template>
  <div>
    <h2>VUE APP</h2>
    <router-link to="/">Home</router-link> | <router-link to="about">About</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Demo"
}
</script>

<style scoped>

</style>
