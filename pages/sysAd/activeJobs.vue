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

<style lang="scss" scoped>
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>
