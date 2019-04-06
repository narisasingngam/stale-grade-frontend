<template>
  <section class="container">
    <div class="head-content">
      <h1>Admin</h1>
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
    </div>
    <NuxtChild />
  </section>
</template>

<script>
export default {
  name: 'SysAdIndex',
  data() {
    return {
      activeIndex: 'activeJobs'
    }
  },
  mounted() {
    this.$router.push({ path: 'sysAd/activeJobs' })
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 5em 10em;
}
.head-content {
  display: flex;
  align-items: center;
  h1 {
    margin-right: 3em;
  }

  .tab-menu {
    flex: 1;
  }
}
</style>
