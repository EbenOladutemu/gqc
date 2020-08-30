<template>
  <div>
    <Header>
      <h1 slot="heading" class="intro-title mb-4 mt-5">Contact Us</h1>
    </Header>
    <section class="paralax-mf footer-paralax bg-image sect-mt4 route" style="background-image: url(img/background-2.jpg)">
    <div class="overlay-mf"></div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-mf">
              <div id="contact" class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        Get In Touch
                      </h5>
                    </div>
                    <div>
                        <form action="" method="post" role="form" class="contactForm">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <div class="row">
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                              <div class="validation"></div>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                              <div class="validation"></div>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                              <div class="form-group">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div class="validation"></div>
                              </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                              <div class="validation"></div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="title-box-2 pt-4 pt-md-0">
                      <h5 class="title-left">
                        Membership Forms
                      </h5>
                      <div class="mt-forms">
                        <p>Membership Form here</p>
                        <p>Reference Form here</p>
                        <p>Commitment Form here</p>
                      </div>
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
import Footer from '@/components/Footer'

export default {
  components:{
    Header, Footer
  },
  created(){
    document.title = 'Contact Us | Gentlemen Quintessence'
  }
}
</script>

<style scoped>
.mt-forms{
  margin-top: 2.8rem;
}
.footer-paralax{
  padding: 0;
}
</style>