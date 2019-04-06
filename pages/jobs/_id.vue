<template>
  <section class="container">
    <div class="page-nav">
      <el-button type="text" @click.prevent="back">
        <i class="el-icon-caret-left" />Back
      </el-button>
    </div>
    <div class="head-content">
      <h1>{{ job.title }}</h1>
      <div v-if="isStudent">
        <el-popover v-model="visible" placement="top" width="160">
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
      </div>
    </div>
    <div class="subtitle">
      <strong>Status:</strong> {{ job.status }}
      <br />
      <strong>Due:</strong> {{ job.due }}
      <br />
      <strong>Company:</strong> {{ job.company }}
    </div>
    <div class="description">
      <h4>Description:</h4>
      {{ job.description }}
    </div>
    <NuxtChild />
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 7em 18em;
}

.page-nav {
  padding: 2em 0;
}

.head-content {
  display: flex;
  align-items: center;
  h1 {
    margin-right: 3em;
    flex: 1;
  }
}

.subtitle {
  margin: 3em 0;
  line-height: 1.5em;
}

.description {
  h4 {
    margin: 1em 0;
  }
  line-height: 1.5em;
}
</style>

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
      this.$router.back()
    },
    acceptJob() {
      this.visible = false
      this.$store.dispatch('addActiveJob', this.job)
    }
  },
  mounted() {
    if (!this.$store.state.currentUser) {
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>
