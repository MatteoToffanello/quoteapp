<template>
  <div id="app">
    <componente-navbar></componente-navbar>
    <transition v-bind:name="this.curTransition" mode="out-in">
      <router-view :transitionNames="transitionNames" :curTransition="curTransition" @setCurTransition="setCurTransition"/>
    </transition>

  </div>
</template>

<script>

import navbar from "./components/Navbar.vue";

const transitionNames = {
  SCROLL_DOWN: "page-scroll-down",
  SCROLL_UP: "page-scroll-up"
}

export default {
  name: 'App',
  components: {
    "componente-navbar": navbar
  },
  data(){
    return {
      transitionNames: transitionNames,
      curTransition: transitionNames.SCROLL_DOWN
    }
  },
  methods: {
    setCurTransition(value){
      this.curTransition = value;
    }
  }
}
</script>

<style>


.page-scroll-down-enter-active, .page-scroll-down-leave-active {
  transition: 200ms ease all;
}
.page-scroll-down-enter{
  opacity: 0;
  transform: translateY(50vh);
}
.page-scroll-down-leave-to {
  opacity: 0;
  transform: translateY(-50vh);
}
.page-scroll-down-enter-to{
  opacity: 1;
  transform: translateY(0px);
}
.page-scroll-down-leave {
  opacity: 1;
  transform: translateY(0px);
}

.page-scroll-up-enter-active, .page-scroll-up-leave-active {
  transition: 200ms ease all;
}
.page-scroll-up-enter{
  opacity: 0;
  transform: translateY(-50vh);
}
.page-scroll-up-leave-to {
  opacity: 0;
  transform: translateY(50vh);
}
.page-scroll-up-enter-to{
  opacity: 1;
  transform: translateY(0px);
}
.page-scroll-up-leave {
  opacity: 1;
  transform: translateY(0px);
}



body{
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

#app {
  /*--text-color: #2c3e50;*/
  --text-color: black;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  height: 100vh;
}
</style>
