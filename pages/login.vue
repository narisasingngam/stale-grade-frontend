<template>
  <section class="container">
    <el-form ref="form" :model="form" label-position="top">
      <el-form-item label="Username">
        <el-input v-model="form.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          v-model="form.password"
          placeholder="Password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Login</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: pink;
}

.el-form {
  padding: 6em 12em;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
