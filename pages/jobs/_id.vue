<template>
  <section class="container">
    <div class="head-content">
      <h1>{{ job.title }}</h1>
      <div v-if="isStudent">
        <!-- <div v-if="isActiveJob"> -->
        <el-popover placement="top" width="160" v-model="visible">
          <p>You sure to accept this job?</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false"
              >cancel</el-button
            >
            <el-button type="primary" size="mini" @click="acceptJob"
              >confirm</el-button
            >
          </div>
          <el-button
            slot="reference"
            :type="!isActiveJob ? 'primary' : 'danger'"
            :disabled="isActiveJob"
          >
            {{ !isActiveJob ? 'Accept job' : 'Accepted' }}
          </el-button>
        </el-popover>
        <!-- </div> -->
      </div>
    </div>
    <br />
    <br />
    Status: {{ job.status }}
    <br />
    Due date: {{ job.due }}
    <br />
    Company: {{ job.company }}
    <div><br /><br />{{ job.description }}</div>
    <NuxtChild />
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: Number(this.$route.params.id),
      visible: false
    }
  },
  computed: {
    job() {
      return this.$store.state.jobs[this.id]
    },
    jobs() {
      return this.$store.getters.userActiveJob
    },
    isStudent() {
      return this.$store.state.currentUser.role === 'student'
    },
    isActiveJob() {
      return this.jobs.find(j => j.id === this.id) !== undefined
    }
  },
  methods: {
    back() {
      this.$route.back()
    },
    acceptJob() {
      this.visible = false
      this.$store.dispatch('addActiveJob', this.job)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 6em 12em;
}

.head-content {
  display: flex;
  align-items: center;
  h1 {
    margin-right: 3em;
  }
}
</style>
