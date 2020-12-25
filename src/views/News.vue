<template>
  <div>
    <Header>
      <h1 slot="heading" class="intro-title mb-4 mt-5">News</h1>
    </Header>
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-12">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-a text-center">
                        News
                      </h5>
                      <div class="line-mf"></div>
                    </div>
                    <h3>Heading.</h3>
                    <p class="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus est, varius eu eros ut, gravida porttitor quam. Maecenas ante elit, finibus in leo non, dignissim tincidunt massa. Suspendisse ac vestibulum enim. Nullam at velit in magna porttitor mattis. Phasellus elementum dapibus elit vitae iaculis. Maecenas porta urna at nisl rutrum consectetur. Nunc quis metus non ante imperdiet faucibus. Nunc convallis id risus nec ornare. Proin vitae augue sit amet risus venenatis fringilla ut gravida quam. Quisque urna ligula, ultricies id lorem quis, congue ultrices dolor. In semper euismod nulla, et posuere lacus ullamcorper a. Pellentesque nisl enim, tempor tempus porttitor vel, sollicitudin ut erat.
                    </p>
                    <p>
                      Proin non posuere tellus, id egestas turpis. Aliquam sed facilisis erat, sed tincidunt ex. Mauris eu quam sed velit condimentum malesuada a ac neque. Integer tempor tellus et est pretium vestibulum. Maecenas mattis tristique magna eu aliquet. Aenean interdum lectus massa, ac cursus lectus rutrum vel. Proin sed tellus vel tortor blandit euismod.
                    </p>
                    <p>
                     Nullam nec ante urna. Vestibulum ligula ante, imperdiet vitae ante sit amet, lobortis facilisis turpis. Donec lobortis mauris ac fringilla consequat. Nullam pellentesque faucibus tellus, sit amet imperdiet ligula gravida in. In quis odio non ipsum bibendum volutpat. Donec auctor efficitur diam, ut suscipit urna sagittis nec. Ut bibendum lectus eget augue auctor dignissim. Curabitur eu sem eget metus scelerisque sollicitudin. Suspendisse non ante enim. Maecenas pulvinar sagittis erat sed suscipit. 
                    </p>
                  </div>
                </div>
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
import Header from '@/components/Header'
import Footer from '@/components/Footer.vue'

export default {
  components:{
    Header, Footer
  },
  created(){
    document.title = 'News | Gentlemen Quintessence'
  }
}
</script>

<style scoped>
.bg-image{
  background-image: url('./../assets/img/members/Image-2020-11-17.jpeg');
}
</style>