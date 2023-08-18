<template>
    <div>
        pagina2
        <!--<router-link to="/" @click.prevent="setTransition()">home</router-link>-->
        <button @click="setTransition()">home2</button>
    </div>
</template>

<script>
export default {
  name: 'pagina2',
  props:["transitionNames", "curTransition"],
  emits: ['setCurTransition'],
  methods: {
    setTransition(){
        this.$emit("setCurTransition", this.transitionNames.SCROLL_UP);
        this.$router.push('/');
    }
  }
}

</script>

<style scoped>

    div{
        margin-top: 5rem;
    }

</style>
