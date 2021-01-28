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
    <el-button
      class="go-top"
      type="primary"
      round
      icon="el-icon-arrow-up"
      @click.native="scrollToTop"
    ></el-button>
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
    this.$router.push({ path: '/student/activeJobs' })
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 5em 10em;
  position: relative;
}

.head-content {
  display: flex;
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  z-index: 1;
  align-items: center;
  h1 {
    margin-right: 3em;
  }
}

.tab-menu {
  flex: 1;
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
