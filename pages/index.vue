<template>
  <div>
    <h1>this is index</h1>
    <nuxt-link :to="localePath('login')">登入</nuxt-link>
    <nuxt-link :to="localePath('login','en')">login</nuxt-link>
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('tw')">中文</nuxt-link>
    <h1>current lang: {{ $i18n.locale }}</h1>
  </div>
</template>

<script>
export default {
    mounted() {
        console.log(
            `%c don's backend %c Detected Version v0.0.0 %c`,
            'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
            'background:#2d8cf0 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
            'background:transparent'
        )
    }
}
</script>

<style lang="scss" scoped>

</style>
