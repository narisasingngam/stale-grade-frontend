<template>
  <section class="container">
    <h1>Active Jobs</h1>
    <br />
    <nuxt-link to="/">
      <el-card v-for="item in getJobDetail" :key="item.id">
        <div slot="header" class="clearfix">
          <span>{{ item.title }}</span>
        </div>
        <div>
          Status: {{ item.status }}
          <br />
          Due date: {{ item.due }}
          <br />
          Company: {{ item.company }}
        </div>
      </el-card>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'ActiveJobs',
  data() {
    return {
      user: this.$store.state.users,
      job: this.$store.state.jobs,
      getJobDetail: this.$store.getters.userActiveJob
    }
  }
}
</script>
