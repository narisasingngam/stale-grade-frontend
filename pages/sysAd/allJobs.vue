<template>
  <section class="container">
    <div class="flex-grid">
      <JobCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </section>
</template>

<script>
import JobCard from '@/components/JobCard.vue'
export default {
  name: 'AllJobs',
  components: { JobCard },
  computed: {
    jobs() {
      return this.$store.getters.allJobs
    }
  }
}
</script>
<style lang="scss" scoped>
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.go-top {
  position: fixed;
  right: 30px;
  bottom: 20px;
  &.hidden {
    display: none;
  }
}
</style>
