<template>
  <nuxt-link :to="{ path: `/jobs/${job.id}` }">
    <el-card class="box-card">
      <h4>{{ job.title }}</h4>
      <p class="status">
        <i
          :class="
            job.approved
              ? 'el-icon-success'
              : job.accepted
              ? 'el-icon-time'
              : 'el-icon-view'
          "
          class="approval"
        />
        {{
          job.approved ? 'Approved' : job.accepted ? 'Pending' : 'Not accepted'
        }}
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
  flex-basis: 100%;
  padding: 1em 1em;
}

.el-card {
  min-height: 50px;
}

.el-icon-success {
  color: rgb(103, 194, 58);
}

.el-icon-time.approval {
  color: #f56c6c;
}

.status {
  margin-top: 1em;
}

.dim {
  margin-left: 1em;
  font-size: 0.8em;
  color: #22222299;
}
</style>
