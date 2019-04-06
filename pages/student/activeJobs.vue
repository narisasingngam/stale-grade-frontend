<template>
  <section class="container">
    <h1>Active Jobs</h1>
    <br />
    <JobCard v-for="job in jobs" :key="job.id" :job="job" />
  </section>
</template>

<script>
import JobCard from '@/components/JobCard.vue'
export default {
  name: 'ActiveJobs',
  components: {
    JobCard
  },
  data() {
    return {
      user: this.$store.state.users,
      jobs: this.$store.getters.userActiveJob
    }
  }
}
</script>
