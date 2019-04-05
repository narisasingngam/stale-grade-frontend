<template>
  <section class="container">
    <div class="banner" />
    <div class="curriculums">
      <Curriculum title="Year 1" :courses="year"></Curriculum>
      <Curriculum title="Year 2"></Curriculum>
      <Curriculum title="Year 3"></Curriculum>
      <Curriculum title="Year 4"></Curriculum>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  height: 40vh;
  text-align: center;
  background: url('~assets/img/cover.jpg');
  background-size: cover;
  background-position: center;
}

.curriculums {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.Curriculum {
  flex: 1;
}
</style>

<script>
import Curriculum from '@/components/Curriculum.vue'
export default {
  components: {
    Curriculum
  },
  data() {
    return {
      year: [
        {
          groupTitle: 'OOP',
          courses: ['OOPI', 'OOPII', 'OOPIII']
        }
      ]
    }
  }
}
</script>
