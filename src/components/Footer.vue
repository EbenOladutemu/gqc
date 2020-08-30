<template>
  <section id="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <div class="more-info">
            <ul class="list-ico">
              <!-- <li><span class="ion-ios-location"></span> Owo</li> -->
              <li><span class="ion-ios-telephone"></span> 
                <a href="tel:">081000000</a>
              </li>
              <li><span class="ion-email"></span> 
                <a href="#">youremail@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 order-lg-last">
          <div class="socials">
            <ul>
              <li>
                <a href="#">
                  <span class="ico-circle"><i class="ion-social-facebook"></i></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="ico-circle"><i class="fa fa-instagram"></i></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="ico-circle"><i class="ion-social-twitter"></i></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="footer-copyright text-center mt-4 mb-4">
            Copyright &copy; {{ year }} All rights reserved. Website Crafted with 
            <i class="fa fa-heart-o" aria-hidden="true"></i> by 
            <a href="https://eben.com.ng" style="color: #be3131" title="Ebenezer Oladutemu" target="_blank"><b>Eben</b></a>
          </div>
        </div>
      </div>
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

<style scoped>
#footer{
  padding: 40px 0;
  background: #222;
  color: #fff;
  text-align: center;
}

ul > li > a{
  color: #fff;
}

.socials{
  padding: .8rem 0;
}
</style>