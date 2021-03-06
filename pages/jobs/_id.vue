<template>
  <section class="container">
    <div class="page-nav">
      <el-button type="text" @click.prevent="back">
        <i class="el-icon-caret-left" />Back
      </el-button>
    </div>
    <div class="head-content">
      <h1>{{ job.title }}</h1>
      <div v-if="isStudent" class="buttons">
        <div v-if="job.accepted">
          <el-button type="primary" plain>Contact Client</el-button>
        </div>
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
      <div v-if="!isStudent && job.accepted">
        <el-popover v-model="visible" placement="top" width="160">
          <p>You sure to approve this job?</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false"
              >cancel</el-button
            >
            <el-button type="primary" size="mini" @click="approveJob"
              >confirm</el-button
            >
          </div>
          <el-button
            slot="reference"
            :type="!isApproved ? 'primary' : 'danger'"
            :disabled="job.accepted && isApproved"
          >
            {{ !isApproved ? 'Approve' : 'Approved' }}
          </el-button>
        </el-popover>
      </div>
    </div>
    <div class="subtitle">
      <p>
        <strong>Status:</strong>
        {{
          job.approved ? 'Approved' : job.accepted ? 'Pending' : 'Not accepted'
        }}
      </p>
      <p><strong>Due:</strong> {{ job.due }}</p>
      <p><strong>Company:</strong> {{ job.company }}</p>
    </div>
    <div class="description">
      <h4>Description:</h4>
      {{ job.description }}
    </div>
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
.buttons {
  display: flex;
  align-items: center;
  align-content: space-between;
  button {
    margin: 0 1em;
  }
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
    isApproved() {
      return this.job.approved
    }
  },
  mounted() {
    if (!this.$store.state.currentUser) {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    approveJob() {
      this.visible = false
      this.$store.dispatch('setApproved', this.job)
    }
  }
}
</script>
