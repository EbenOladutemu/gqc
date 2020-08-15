<template>
  <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll" href="#page-top">
        <img src="./../assets/img/logo.png" alt="The GQ Membership Club" width="50" height="50">
      </a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation" @click="scrollUp">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
        <ul class="navbar-nav" @click="toggleNavLink">
          <li class="nav-item">
            <router-link class="nav-link js-scroll" active-class="active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll" active-class="active" to="about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll" active-class="active" to="#">News</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll" active-class="active" to="club-directory">Club Directory</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll" active-class="active" to="photo-gallery">Photo Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll" active-class="active" to="contact">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods: {
    scrollUp(){
      const nav = document.getElementById('mainNav')
      nav.classList.add('navbar-reduce')
    },
    toggleNavLink(){
      const nav = document.getElementById('navbarDefault')
      const btn = document.querySelector('button')

      nav.classList.remove('show')
      btn.classList.add('collapsed')
    }
  },
  mounted(){
    const nav = document.getElementById('mainNav')
    const navLink = document.getElementsByClassName('nav-link')
    const menu = document.querySelectorAll('span')
    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        nav.classList.add('scrolled')
        for (let i = 0; i < menu.length; i++) {
          menu[i].classList.add('scrolled-menu');
        }
        for (let i = 0; i < navLink.length; i++) {
          navLink[i].classList.add('scrolled-color');
        }
      } else {
        nav.classList.remove('scrolled')
        nav.classList.remove('navbar-reduce')
        for (let i = 0; i < menu.length; i++) {
          menu[i].classList.remove('scrolled-menu');
        }
        for (let i = 0; i < navLink.length; i++) {
          navLink[i].classList.remove('scrolled-color');
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;

  a {
    &.router-link-exact-active::before {
      background: black!important;
    }
  }
}

.nav-link{
  text-transform: capitalize!important;
  font-size: 18px;
}

.navbar-b{
  padding-top: .8rem;
  padding-bottom: .8rem;
}

.scrolled{
  background-color: white!important;
}
.scrolled-color{
  color: #be3132!important;
  &::before{
    background: #be3132!important;
  }
}
.scrolled-menu{
  background: #000!important;
}
</style>