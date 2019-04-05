<template>
  <section
    class="container"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card" style="height: 100%">
      <div class="year-title">
        <div v-if="hover && courses" class="courses"></div>
        <div v-else class="vertical-center">
          <h1>{{ title }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Curriculum',
  data() {
    return {
      hover: false
    }
  },
  props: {
    title: String,
    courses: Array
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 25%;
}

.year-title {
  height: 100%;
  position: relative;
}
</style>

<style lang="scss">
.card {
  flex: 1;
  border: 1px solid #60626660;
  border-radius: 4px;
  margin: 0 10px;
  min-height: 400px;
  height: 100%;
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

.vertical-center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
