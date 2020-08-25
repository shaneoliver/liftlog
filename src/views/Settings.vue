<template>
  <div class="about">
    <h1 class="">Settings</h1>

    <div class="form-group">
      <label for="">Unit</label>
      <select class="custom-select" v-model="unit">
        <option value="kg">Kilograms</option>
        <option value="lb">Pounds</option>
      </select>
    </div>

    <div class="form-group">
      <label for="">Rounding</label>
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input"
        id="customSwitch1" v-model="roundingEnabled">
        <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
      </div>
      <select class="custom-select" :disabled="!roundingEnabled" v-model="roundingDirection">
        <option value="up">Round up</option>
        <option value="down">Round down</option>
      </select>
    </div>

    <div class="form-group">
      <label for="rest">Rest</label>
      <input id="rest" type="number" class="form-control" v-model="rest">
      <span class="form-text text-muted">Rest time in seconds</span>
    </div>

    <h1>Training Maxes</h1>
    <div class="form-group">
      <label for="squat">Squat</label>
      <input id="squat" type="number" class="form-control" v-model="squat">
    </div>
    <div class="form-group">
      <label for="bench">Bench</label>
      <input id="bench" type="number" class="form-control" v-model="bench">
    </div>
    <div class="form-group">
      <label for="deadlift">Deadlift</label>
      <input id="deadlift" type="number" class="form-control" v-model="deadlift">
    </div>

    <button class="btn btn-primary btn-block" @click="save">Save Settings</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      save: 'settings/saveSettings',
    }),
  },
  computed: {
    unit: {
      get() {
        return this.$store.state.settings.unit;
      },
      set(value) {
        this.$store.commit('settings/updateSetting', { key: 'unit', value });
      },
    },
    roundingEnabled: {
      get() {
        return this.$store.state.settings.roundingEnabled;
      },
      set(value) {
        this.$store.commit('settings/updateSetting', { key: 'roundingEnabled', value });
      },
    },
    roundingDirection: {
      get() {
        return this.$store.state.settings.roundingDirection;
      },
      set(value) {
        this.$store.commit('settings/updateSetting', { key: 'roundingDirection', value });
      },
    },
    rest: {
      get() {
        return this.$store.state.settings.rest;
      },
      set(value) {
        this.$store.commit('settings/updateSetting', { key: 'rest', value: Number(value) });
      },
    },
    squat: {
      get() {
        return this.$store.state.settings.maxes.squat;
      },
      set(value) {
        this.$store.commit('settings/updateMax', { key: 'squat', value: Number(value) });
      },
    },
    bench: {
      get() {
        return this.$store.state.settings.maxes.bench;
      },
      set(value) {
        this.$store.commit('settings/updateMax', { key: 'bench', value: Number(value) });
      },
    },
    deadlift: {
      get() {
        return this.$store.state.settings.maxes.deadlift;
      },
      set(value) {
        this.$store.commit('settings/updateMax', { key: 'deadlift', value: Number(value) });
      },
    },
  },
};
</script>
