<template>
  <Navbar />
  <div>
    Theme - {{ THEME }}
  </div>
  <section class="container">
    <router-view />
  </section>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import { useThemeStore } from './stores/theme';
import { mapState } from 'pinia';

export default {
  components: {
    Navbar
  },
  computed: mapState(useThemeStore, ['THEME']),

}
</script>

<style>
</style>
