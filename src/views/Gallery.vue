<template>
  <div>
    <Header>
      <h1 slot="heading" class="intro-title mb-4 mt-5">Gallery</h1>
    </Header>
    <section id="work" class="portfolio-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                GALLERY
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
            <div class="work-box">
              <a href="https://picsum.photos/500/500" data-lightbox="gallery-mf">
                <div class="work-img">
                  <img src="https://picsum.photos/500/500" alt="Gentlemen Quintessence" class="img-fluid">
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="https://picsum.photos/500/500" data-lightbox="gallery-mf">
                <div class="work-img">
                  <img src="https://picsum.photos/500/500" alt="Gentlemen Quintessence" class="img-fluid">
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="https://picsum.photos/500/500" data-lightbox="gallery-mf">
                <div class="work-img">
                  <img src="https://picsum.photos/500/500" alt="Gentlemen Quintessence" class="img-fluid">
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 mx-auto">
            <div class="work-box">
              <a href="https://picsum.photos/500/500" data-lightbox="gallery-mf">
                <div class="work-img">
                  <img src="https://picsum.photos/500/500" alt="Gentlemen Quintessence" class="img-fluid">
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 mx-auto">
            <div class="work-box">
              <a href="https://picsum.photos/500/500" data-lightbox="gallery-mf">
                <div class="work-img">
                  <img src="https://picsum.photos/500/500" alt="Gentlemen Quintessence" class="img-fluid">
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4 mx-auto">
            <div class="work-box">
              <a href="https://picsum.photos/500/500" data-lightbox="gallery-mf">
                <div class="work-img">
                  <img src="https://picsum.photos/500/500" alt="Gentlemen Quintessence" class="img-fluid">
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer.vue'

export default {
  components:{
    Header, Footer
  },
  created(){
    document.title = 'Photo Gallery | Gentlemen Quintessence'
  }
}
</script>

<style scoped>
.bg-image{
  background-image: url('./../assets/img/members/Image-2020-07-28_2.jpeg');
}
</style>