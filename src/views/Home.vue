<template>
  <div class="home">
    <Nav/>
    <Header/>
    <Intro/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Nav, Header, Intro, Footer
  }
}
</script>
