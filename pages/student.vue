<template>
  <section class="container">
    <div class="head-content">
      <h1>Student</h1>
      <el-menu
        :default-active="activeIndex"
        class="tab-menu"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item ref="default" index="activeJobs">
          Active Jobs
        </el-menu-item>
        <el-menu-item index="allJobs">All Jobs</el-menu-item>
      </el-menu>
      <!-- <el-autocomplete
        v-model="searchQuery"
        class="inline-input"
        :fetch-suggestions="querySearch"
        prefix-icon="el-icon-search"
        placeholder="Please Input"
        @select="handleSelect"
      ></el-autocomplete> -->
    </div>
    <NuxtChild />
  </section>
</template>

<script>
export default {
  name: 'StudentIndex',
  data() {
    return {
      activeIndex: 'activeJobs',
      searchQuery: '',
      jobs: this.$store.state.jobs
    }
  },
  mounted() {
    this.$router.replace({ path: '/student/activeJobs' })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  padding: 4em 8em;
}

.tab-menu {
  flex: 1;
}

.head-content {
  display: flex;
  align-items: center;
  h1 {
    margin-right: 3em;
  }
}
</style>
