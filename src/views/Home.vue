<template>
  <div class="home">
    <h1>Smolov Jr</h1>
    <div class="card mb-3" v-for="(lift, index) in program" :key="index">
      <div class="card-header">
        Week {{ lift.week }} Day {{ lift.day }}
      </div>
      <div class="card-body">
        <div class="d-flex" v-for="(set, setIndex) in lift.sets" :key="setIndex">
          <div>
            {{ lift.weight }} x {{ lift.reps }}
          </div>
          <div class="ml-auto custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input"
            :id="`lift-${index}-${setIndex}`">
            <label class="custom-control-label"
            :for="`lift-${index}-${setIndex}`">complete</label>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      program: [],
      smolovJr: [
        {
          week: 1,
          day: 1,
          percent: 0.7,
          reps: 6,
          sets: 6,
          weight: null,
        },
      ],
    };
  },
  created() {
    const max = this.maxes.squat;
    const days = 4;
    const weeks = 3;

    const startSets = 6;
    const startReps = 6;
    const startPercent = 0.7;
    const increment = 5;

    for (let week = 0; week < weeks; week += 1) {
      const load = increment * week;

      for (let day = 0; day < days; day += 1) {
        const base = max * (startPercent + (0.05 * day));

        this.program.push({
          week: week + 1,
          day: day + 1,
          percent: ((startPercent + day * 0.05) * 100) / 100,
          reps: startReps - day,
          sets: day < 3 ? startSets + day : startSets + day + 1,
          weight: Math.floor(base + load),
          complete: false,
        });
      }
    }
  },
  computed: {
    ...mapState('settings', ['maxes']),
  },
};
</script>
