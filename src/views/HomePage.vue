<template>
  <div class="">
    <Home />
    <Develop />
    <Music />
    <Design />
    <Contact />
  </div>
</template>

<script>
import Home from "./Homepage/Home.vue";
import Develop from "./Homepage/Develop.vue";
import Music from "./Homepage/Music.vue";
import Design from "./Homepage/Design.vue";
import Contact from "./Homepage/Contact.vue";

export default {
  name: "HomePage",
  components: {
    Home,
    Develop,
    Music,
    Design,
    Contact,
  },
};
</script>
