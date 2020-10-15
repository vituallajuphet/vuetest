<template>
  <div id="apps">
        <appnav/>
       <vue-page-transition name="fade-in-up">
            <router-view></router-view>
        </vue-page-transition>
  </div>
</template>

<script>
import appnav from '@/components/includes/Nav.vue'
export default {
  name: 'App',
  components: {
    appnav
  }
}
</script>

<style>

</style>
