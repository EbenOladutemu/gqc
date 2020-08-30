<template>
  <div id="home" class="intro route bg-image">
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
          <!--<p class="display-6 color-d">Hello, world!</p>-->
          <p class="intro-subtitle">
            <vue-typed-js :strings="['Gentlemen Quintessence', 'Owo']" :backSpeed="50" :loop="true">
              <h1 class="typing"></h1>
            </vue-typed-js>
          </p>
          <slot name="heading"></slot>
          <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { VueTypedJs } from 'vue-typed-js'
 
Vue.use(VueTypedJs)
export default {
  components:{
    VueTypedJs
  }
}
</script>

<style scoped lang="scss">
.bg-image{
  background-image: url('./../assets/img/bg-1.jpg')
}

.typed-element{
  justify-content: center;
  color: white;
}
.typing{
  color: #fff;
  font-size: 4.5rem!important;
}

@media (max-width: 768px){
  .typing{
    font-size: 3.5rem!important;
  }
}
</style>