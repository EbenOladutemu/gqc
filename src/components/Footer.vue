<template>
  <section>
    <div class="footer-copyright text-center mt-4 mb-4">
      Copyright &copy; {{year}} All rights reserved. Website Crafted with 
      <i class="fa fa-heart-o" aria-hidden="true"></i> by 
      <a href="https://eben.com.ng" style="color: #be3131" title="Ebenezer Oladutemu" target="_blank"><b>Eben</b></a>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>

</style>