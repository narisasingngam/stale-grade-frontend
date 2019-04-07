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
      <el-button type="text" @click="centerDialogVisible = true"
        >New jobs</el-button
      >
      <el-dialog
        title="Add new jobs"
        :visible.sync="centerDialogVisible"
        width="30%"
        center
      >
        <div style="margin: 20px;"></div>
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          v-model="form"
        >
          <el-form-item label="Title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="Due Date">
            <el-input v-model="form.due"></el-input>
          </el-form-item>
          <el-form-item label="Company">
            <el-input v-model="form.company"></el-input>
          </el-form-item>
          <el-form-item label="Description">
            <el-input v-model="form.description" type="textarea"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="save">Save</el-button>
        </span>
      </el-dialog>
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
  name: 'SysAdIndex',
  data() {
    return {
      activeIndex: 'activeJobs',
      centerDialogVisible: false,
      labelPosition: 'right',
      form: {
        id: this.$store.state.jobs.length,
        title: '',
        due: '',
        company: '',
        description: ''
      }
    }
  },
  mounted() {
    this.$router.push({ path: '/sysAd/activeJobs' })
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    save() {
      this.centerDialogVisible = false
      this.$store.commit('addJobs', this.form)
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
  .tab-menu {
    flex: 1;
  }
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
