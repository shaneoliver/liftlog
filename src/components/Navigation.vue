<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Lift Log</a>
    <button class="navbar-toggler"
    @click="toggleMenu"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  <div class="collapse navbar-collapse" :class="{ show }" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/settings">Settings</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: mapState({
    show: (state) => state.menuOpen,
  }),
  methods: {
    ...mapMutations(['toggleMenu']),
  },
};
</script>
