<template>
  <section class="container">
    <h1>All Jobs</h1>
    <JobCard v-for="job in jobs" :key="job.id" :job="job" />
  </section>
</template>

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
