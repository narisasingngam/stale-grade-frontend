<template>
  <section class="container">
    <div class="main-content">
      <img
        src="https://pbs.twimg.com/profile_images/1051157346796400646/t33XAm04.jpg"
        class="profile-pic"
      />
      <h2>Samart Hackable</h2>
      <h4>Software Engineering</h4>
      <h5>Kasetsart University</h5>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss" scoped>
.container {
  padding: 5em 10em;
}

.main-content {
  .profile-pic {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
}
</style>
