<template>
  <div class="container">

    <div class="row align-items-center">

      <div class="col-lg-4 ">
        <span id="title_1" class="fs-1"> UN <b>LUOGO</b> IN CUI PUOI </span> <span id="pensare"
          class="fs-1">PENSARE</span>
      </div>
      <div class="col-lg-7">
      </div>

    </div>

    <div class="row align-items-center">
      <div class="col-12 col-lg-9 col-sm-12">
        <p id="quote">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nobis tenetur dignissimos
          eligendi
          labore voluptate fuga, esse aspernatur mollitia recusandae quae sequi praesentium aliquid! Itaque, rerum!
          Sapiente
          quibusdam ratione inventore.</p>
        <p id="author">Author. Author</p>
      </div>
      <div class="col col-lg-2"></div>
      <div class="col col-lg-1">
        <button id="addToLibrary">+</button>
      </div>
    </div>

    <button id="nextPage" @click="setTransition()">
      <div class="arrow-down"></div>
    </button>

  </div>
</template>

<script>



export default {
  name: 'Quote',
  props: ["transitionNames", "curTransition"],
  emits: ['setCurTransition'],
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    setTransition() {
      this.$emit("setCurTransition", this.transitionNames.SCROLL_DOWN);
      this.$router.push('/pagina2');
    }
  },
  mounted() {
    let root = document.documentElement;
    root.style.setProperty("--title-span-width", document.getElementById("title_1").offsetWidth + "px");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --title-span-width: 0px;
}

body {
  background-color: rgba(255, 234, 0, 0.422) !important;

}

.row:nth-child(1) {
  height: 40vh;
  width: 100%;
  padding: 30px;
  padding-top: 90px;

}

.col-lg-4 {
  text-align: left;
}

.row:nth-child(2) {
  height: 30vh;
  text-align: left;
  margin-top: -3rem;
  color: #2c3e50 !important;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
}

.col-lg-2 {
  text-align: center;
}

#quote {
  font-size: 1.7rem;
  text-decoration: underline rgba(255, 234, 0, 0.555);
}

#author {
  font-size: 1.2rem;
  margin-left: 0px;
  text-align: left;
}

#addToLibrary {
  display: block;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  text-align: center;
  border: none;
  transform: translateY(-50%);
  background-color: rgba(255, 234, 0, 0.555);
  font-size: 1.5rem;
  transition: .2s;
}

#addToLibrary:hover {
  transform: scale(1.2) translateY(-45%);
}

.arrow-down {
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg) translate(-1px, -2px);
}


#nextPage {
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 90vh;
  left: 50%;
  width: 3.5rem;
  height: 3.5rem;
  transform: translateX(-50%);
  padding: 0px;
  text-align: center;
  transition: .2s;
}

#nextPage:hover {
  background-color: rgba(255, 234, 0, 0.555);
}

#pensare {
  display: inline-block;
  color: darkgoldenrod !important;
  font-weight: 700 !important;

}

@media screen and (min-width: 768px) {
  #pensare {
    animation: shake 2.5s;
    transform: rotate(0deg);
    animation-fill-mode: forwards;
  }
}


@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }

  5% {
    transform: translate(-2px, -4px) rotate(-2deg);
  }

  7% {
    transform: translate(-6px, 0px) rotate(2deg);
  }

  10% {
    transform: translate(6px, 4px) rotate(0deg);
  }

  12% {
    transform: translate(2px, -2px) rotate(2deg);
  }

  15% {
    transform: translate(-2px, 4px) rotate(-2deg);
  }

  17% {
    transform: translate(-6px, 2px) rotate(0deg);
  }

  20% {
    transform: translate(6px, 2px) rotate(-2deg);
  }

  23% {
    transform: translate(-6px, 2px) rotate(0deg);
  }

  25% {
    transform: translate(-2px, 4px) rotate(-2deg);
  }

  27% {
    transform: translate(0px, 0px) rotate(0deg);
  }

  35% {
    transform: translate(0px, 0px) rotate(0deg);
  }

  37%{
    transform-origin: center right;
    transform: translate(0px, -2px) rotate(180deg);
  }

  40% {
    transform-origin: center right;
    transform: translate(0px, -2px) rotate(180deg);
  }

  45% {
    transform-origin: center right;
    transform: translate(0px, -2px) rotate(180deg);
  }

  50% {
    transform-origin: center right;
    transform: translate(0px, -2px) rotate(180deg);
  }
  
  70%{
    transform-origin: center right;
    transform: translate(-100%, -2px) rotate(180deg);
  }

  100%{
    transform-origin: center right;
    transform: translate(-100%, -2px) rotate(180deg);
  }
}
</style>
