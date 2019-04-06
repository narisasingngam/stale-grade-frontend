<template>
  <section class="container">
    <div class="flex-grid">
      <JobCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>

<script>
import JobCard from '@/components/JobCard.vue'
export default {
  name: 'AllJobs',
  components: { JobCard },
  data() {
    return {
      jobs: this.$store.state.jobs
    }
  }
}
</script>
