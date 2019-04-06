<template>
  <nuxt-link :to="{ path: `/jobs/${job.id - 1}` }">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Title :</span>
        <el-button style="float: right; padding: 3px 0" type="text">{{
          job.title
        }}</el-button>
      </div>
      <div>
        Status: {{ job.status }}
        <br />
        Due date: {{ job.due }}
        <br />
        Company: {{ job.company }}
      </div>
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

<style>
.box-card {
  flex-basis: 33.3%;
}
</style>
