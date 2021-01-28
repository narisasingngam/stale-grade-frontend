<template>
  <section class="container">
    <nav class="main-navigation">
      <div class="nav-logo">
        <nuxt-link to="/student/activeJobs">
          <img class="nav-logo-image" src="~/assets/v2.svg" />
        </nuxt-link>
      </div>
      <div v-if="currentUserRole === 'student'" class="nav-nav">
        <nuxt-link to="/profile">
          View Profile
        </nuxt-link>
      </div>
      <div class="nav-logout">
        <el-button type="danger" round @click="logout">Log out</el-button>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    currentUserRole() {
      if (!this.$store.state.currentUser) return 'guest'
      return this.$store.state.currentUser.role
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #9ad8d3;
}

.main-navigation {
  display: flex;
  padding: 1.5em 6em;
}

.nav-logo {
  flex: 1;
  display: flex;
  align-items: center;
}

.nav-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2em;
  a {
    color: #303133;
    font-weight: bold;
  }
}

.logo-button {
  background: #9ad8d3;
}
.nav-logo-image {
  height: 40px;
}
</style>
