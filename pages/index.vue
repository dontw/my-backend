<template>
  <div>
    <h1>this is index</h1>
    <nuxt-link :to="localePath('login')">登入</nuxt-link>
    <nuxt-link :to="localePath('login','en')">login</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
