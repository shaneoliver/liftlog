<template>
  <div id="app">
    <Navigation />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: { Navigation },
};
</script>

<style>

</style>
