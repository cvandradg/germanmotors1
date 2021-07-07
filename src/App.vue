<template>
  <body :style="back">
    <div class="wrapp" id="top">
      <Loading />
      <Home @order="makeOrder" />
      <Service />
      <Statics />
      <AboutUs />
      <Reviews />
      <Tables />
      <Certificates />
      <Faq />
      <Clients />
      <Contact />
      <Map />
      <Footer :didOrder="order" @out="out" />
    </div>
  </body>
</template>

<script>
import Home from "./components/home.vue";
import Service from "./components/service.vue";
import Statics from "./components/statics.vue";
import AboutUs from "./components/aboutUs.vue";
import Reviews from "./components/reviews.vue";
import Certificates from "./components/certificates.vue";
import Faq from "./components/faq.vue";
import Clients from "./components/clients.vue";
import Contact from "./components/Contact.vue";
import Map from "./components/map.vue";
import Footer from "./components/footer.vue";
import Tables from "./components/tables.vue";
import Loading from "./components/loading.vue";
export default {
  name: "App",
  components: {
    Home,
    Service,
    Statics,
    AboutUs,
    Reviews,
    Certificates,
    Faq,
    Clients,
    Contact,
    Map,
    Footer,
    Tables,
    Loading,
  },
  data() {
    return {
      loading: "loading",
      order: false,
      back: {},
    };
  },
  methods: {
    makeOrder() {
      this.order = true;
    },
    out() {
      this.order = false;
    },
  },
  mounted() {
    setTimeout(() => (this.loading = ""), 1000);
    this.tableOne = "";
    this.one = "active";
  },
};
</script>

<style>
@import "./assets/css/style.css";
@import "./assets/css/prettyMenu.css";
@import "./assets/css/owl.carousel.css";
@import "./assets/css/magnific-popup.css";
@import "./assets/css/hover.css";
@import "./assets/css/hamburgers.css";
@import "./assets/css/font-awesome.css";
@import "./assets/css/flatpickr.css";
@import "./assets/css/animate.css";
* {
  font-family: "Montserrat", sans-serif;
}
</style>
