<template>
  <section class="container">
    <el-form ref="form" :model="form" label-position="left">
      <div class="logo-container">
        <nuxt-link :to="{ path: '/' }">
          <img src="~/assets/v2.svg" class="logo-image" />
        </nuxt-link>
      </div>
      <el-form-item label="Username">
        <el-input
          ref="usernameField"
          v-model="form.username"
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
        <el-button type="primary" round @click="onSubmit">Login</el-button>
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
            name: user.role === 'sysad' ? 'sysAd' : 'student'
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
  background-image: linear-gradient(
    to right bottom,
    #c0ffee,
    #acece1,
    #9ad8d3,
    #89c5c5,
    #79b2b7
  );
}

.el-form {
  padding: 5em 18em;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}

.logo-container {
  margin-bottom: 2em;
}

.logo-image {
  height: 100px;
}
</style>
