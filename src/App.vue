<template>
  <div id="app">
    <Nav/>
    <transition>
      <router-view/>
    </transition>
    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  components:{
    Nav
  }
}
</script>

<style lang="scss">
html{
  scroll-behavior: smooth;
}
.intro .intro-title{
  font-size: 1.5rem!important;
}

.intro .intro-subtitle{
  font-size: 2rem!important;
}

@media (min-width: 768px){
  .intro .intro-title {
    font-size: 1.5rem!important;
  }
  .intro .intro-subtitle {
    font-size: 3.5rem!important;
  }
}
</style>
