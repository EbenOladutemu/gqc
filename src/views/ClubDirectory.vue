<template>
  <div>
    <Header>
      <h1 slot="heading" class="intro-title mb-4 mt-5">Club Directory</h1>
    </Header>
    <section id="service" class="services-mf route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center mt-4">
              <h3 class="title-a">
                Club Members
              </h3>
              <!-- <p class="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p> -->
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <img src="https://picsum.photos/150/150" class="d-block mx-auto br-10" alt="GQ Member">
              </div>
              <div class="service-content">
                <h2 class="s-title">GQ Oba Ajibade Gbadegesin</h2>
                <p class="v-hidden">Nothing here</p>
                <!-- <p class="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident.
                </p> -->
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <img src="https://picsum.photos/150/150" class="d-block mx-auto br-10" alt="GQ Member">
              </div>
              <div class="service-content">
                <h2 class="s-title">GQ Chief Abiodun Obajuluwa</h2>
                <p class="s-description text-center">
                  President
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <img src="https://picsum.photos/150/150" class="d-block mx-auto br-10" alt="GQ Member">
              </div>
              <div class="service-content">
                <h2 class="s-title">GQ Olatoye Famakinwa General</h2>
                <p class="s-description text-center">
                  Secretary
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <img src="https://picsum.photos/150/150" class="d-block mx-auto br-10" alt="GQ Member">
              </div>
              <div class="service-content">
                <h2 class="s-title">GQ Olugbenga Michael</h2>
                <p class="s-description text-center">
                  Treasurer
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <img src="https://picsum.photos/150/150" class="d-block mx-auto br-10" alt="GQ Member">
              </div>
              <div class="service-content">
                <h2 class="s-title">GQ Adebo Ogunoye</h2>
              </div>
              <p class="v-hidden">Nothing</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box" style="padding-bottom: 3.3rem;">
              <div class="service-ico">
                <img src="https://picsum.photos/150/150" class="d-block mx-auto br-10" alt="GQ Member">
              </div>
              <div class="service-content">
                <h2 class="s-title">GQ Adedayo Sikiru Hassan</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components:{
    Header, Footer
  },
  created(){
    document.title = 'Club Directory | Gentlemen Quintessence'
  }
}
</script>

<style scoped>
.bg-image{
  background-image: url('./../assets/img/members/Image-2020-11-29_2.jpeg');
  background-position: top;
}
.v-hidden{
  visibility: hidden;
}
.br-10{
  border-radius: 10px;
}
</style>