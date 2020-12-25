<template>
  <div id="app">
    <Nav/>
    <transition name="animate" enter-active-class="animated fadeIn" leave-active-class="animate__delay-2s" mode="out-in">
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
  },
  data(){
    return{
      siteUrl: 'https://gqc.netlify.app/',
      siteLogo: 'https://gqc.netlify.app/logo.png',
      siteName: 'Gentlemen Quintessence',
      siteDescription: 'GQ Club, Owo',
      siteKeywords: 'Gentlemen, quintessence, club'
    }
  },
  metaInfo(){
    return{
      meta: [
        { name: 'description', content: this.siteDescription },
        { name: 'author', content: 'Eben Web Krafts' },
        { name: 'keywords', content: this.siteKeywords },
        { name: 'website', content: this.siteName },
        { name: 'image', content: this.siteLogo },
        // Schema.org for Google
        { itemprop: 'name', content: this.siteName },
        { itemprop: 'title', content: this.siteName },
        { itemprop: 'description', content: this.siteDescription },
        { itemprop: 'image', content: this.siteLogo },
        // Twitter - Product (e-commerce)
        // Open Graph general (Facebook, Pinterest & Google+)
        { property: 'og:title', content: this.siteName },
        { property: 'og:description', content: this.siteDescription },
        { property: 'og:url', content: this.siteName },
        { property: 'og:image', content: this.siteLogo },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_NG' },
        { property: 'og:site_name', content: this.siteName },
        // Twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:url', content: this.siteUrl },
        { name: 'twitter:title', content: this.siteName },
        { name: 'twitter:description', content: this.siteDescription },
        { name: 'twitter:image', content: this.siteLogo },
        { name: 'twitter:site', content:  this.siteUrl },
        { name: 'twitter:creator', content: '@EbenOladutemu' }
      ]
    }
  }
}
</script>

<style lang="scss">
html{
  scroll-behavior: smooth;
}

.typed-cursor{
  margin-bottom: 1rem;
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
