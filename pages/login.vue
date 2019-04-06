<template>
  <section class="container">
    <el-form ref="form" :model="form" label-position="top">
      <el-form-item label="Username">
        <el-input
          v-model="form.username"
          ref="usernameField"
          placeholder="Username"
        ></el-input>
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
      },
      allUser: this.$store.state.users,
      userExist: false
    }
  },
  methods: {
    onSubmit() {
      for (const user of this.allUser) {
        if (user.username === this.form.username) {
          this.$store.dispatch('login', user)
          this.userExist = true
          this.$router.push({
            name: user.role === 'sysad' ? 'sysAdIndex' : 'studentIndex'
          })
        }
      }

      if (!this.userExist) {
        this.$message.error('Username/Password combination was incorrect')
      }
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
