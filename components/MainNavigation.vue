<template>
  <section class="main-navigation">
    <nav class="navigation-bar">
      <div class="navigation-logo">
        <nuxt-link :to="{ name: 'index' }">
          <h1>GODDAMN LOGO</h1>
        </nuxt-link>
      </div>
      <el-menu :default-active="activeIndex" mode="horizontal">
        <el-menu-item index="1">Menu #1</el-menu-item>
        <el-menu-item index="2">Menu #2</el-menu-item>
      </el-menu>
      <div class="navigation-member">
        <el-button type="primary" round>Member huh?</el-button>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'MainNavigation',
  data() {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
.main-navigation {
  background: pink;
}
.navigation-bar {
  padding: 0 3em;
  display: flex;
}
.el-menu {
  background: none;
}
.navigation-logo {
  flex: 1;
}
.navigation-member {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
