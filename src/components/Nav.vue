<template>
  <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll" href="#page-top">
        <img src="./../assets/img/logo.png" alt="The GQ Membership Club" width="50" height="50">
      </a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link js-scroll active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll" to="about">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="#">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="club-directory">Club Directory</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="gallery">Photo Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>