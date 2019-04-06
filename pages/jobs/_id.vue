<template>
  <section class="container">
    <div class="head-content">
      <h1>{{ job.title }}</h1>
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
      id: Number(this.$route.params.id)
    }
  },
  computed: {
    job() {
      return this.$store.state.jobs[this.id]
    }
    // isStudent() {
    //   return this.$store.state.currentUser.role === 'student'
    // }
  },
  methods: {
    back() {
      this.$route.back()
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
