<template>
  <nuxt-link to="/">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Title :</span>
        <el-button style="float: right; padding: 3px 0" type="text">{{
          job.title
        }}</el-button>
      </div>
      <div>
        {{ job.status }}
        <br />
        {{ job.due }}
        <br />
        {{ job.company }}
      </div>
    </el-card>
  </nuxt-link>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    job: Object
  }
}
</script>

<style>
.box-card {
  flex-basis: 33.3%;
}
/* .clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.item {
  margin-bottom: 18px;
}
/*  */
/* .box-card {
  height: 200px;
  width: 100px;
} */
</style>
