<template>
  <div>
    <Header>
      <h1 slot="heading" class="intro-title mb-4 mt-5">About</h1>
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
                        ABOUT US
                      </h5>
                      <div class="line-mf"></div>
                    </div>
                    <p class="lead">
                      <strong>Our goal</strong> is to foster the spirit of oneness and comradeship among ourselves for the purpose of promoting the ideals of noble, industrious and gentlemanly character, supporting one
                      another and our community Design/ organize programs and services for the benefit of our members and community.
                    </p>
                    <div class="mt-4">
                      <p class="lead text-center text-bold" style="font-size: 20px;">
                        Mission / Objectives
                      </p>
                      <ul>
                        <li>
                          To Cherish, uphold gentlemanship characters and project the honour and dignity of Owo culture, Language and tradition Worldwide
                        </li>
                        <li>
                          To support the Organisation as a non-partisan and non-religious group
                        </li>
                      </ul>
                    </div>
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
    document.title = 'About Us | Gentlemen Quintessence'
  }
}
</script>

<style scoped>

</style>