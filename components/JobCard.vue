<template>
  <nuxt-link :to="{ path: `/jobs/${job.id - 1}` }">
    <el-card class="box-card">
      <h4>{{ job.title }}</h4>
      <p class="status">
        <i
          :class="
            job.status === 'Approved' ? 'el-icon-success' : 'el-icon-error'
          "
        />
        {{ job.status }}
        <span class="dim">
          <i class="el-icon-time" /> Due in {{ job.due }}
        </span>
      </p>
    </el-card>
  </nuxt-link>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    job: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-grid > a {
  flex-basis: 50%;
  padding: 1em 1em;
}

.el-card {
  min-height: 50px;
}

.el-icon-success {
  color: rgb(103, 194, 58);
}

.el-icon-error {
  color: #f56c6c;
}

.status {
  margin-top: 1em;
}
</style>
