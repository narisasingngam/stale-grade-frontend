<template>
  <section class="container">
    <nav class="main-navigation">
      <div class="nav-logo">
        <h1>LOGO</h1>
      </div>
      <div class="nav-logout">
        <el-button type="danger" round>Log out</el-button>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
.container {
  background: pink;
}

.main-navigation {
  display: flex;
  padding: 3em 6em;
}

.nav-logo {
  flex: 1;
  display: flex;
  align-items: center;
}
</style>
