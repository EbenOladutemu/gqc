<template>
  <div class="home">
    <Header class="bg-image">
      <h6 slot="heading" class="intro-title mb-4 mt-4">Home</h6>
    </Header>
    <Intro/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header, Intro, Footer
  },
  created(){
    document.title = 'Home | Gentlemen Quintessence'
  }
}
</script>

<style scoped>
.bg-image{
  background-image: url('./../assets/img/members/Image-2020-11-29.jpeg');
}
</style>
