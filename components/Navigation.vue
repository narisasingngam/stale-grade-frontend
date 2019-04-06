<template>
  <section class="container">
    <nav class="main-navigation">
      <div class="nav-logo">
        <img class="nav-logo-image" src="~/assets/v2.svg" />
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
  background: #c0ffee;
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

.nav-logo-image {
  height: 40px;
}
</style>
