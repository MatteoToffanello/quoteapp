<template>
    <div>
        <button id="prevPage" @click="setTransition()">
            <div class="arrow-up"></div>
        </button>



</div>
</template>

<script>
export default {
    name: 'Library',
    props: ["transitionNames", "curTransition"],
    emits: ['setCurTransition'],
    methods: {
        setTransition() {
            this.$emit("setCurTransition", this.transitionNames.SCROLL_UP);
            this.$router.push('/');
        }
    }
}

</script>

<style scoped>

.arrow-up {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(-135deg) translate(-1px, -1px);
}

#prevPage {
    border: none;
    border-radius: 50%;
    position: absolute;
    top: 8vh;
    left: 50%;
    width: 3.5rem;
    height: 3.5rem;
    transform: translateX(-50%);
    padding: 0px;
    text-align: center;
    transition: .2s;
}

#prevPage:hover {
    background-color: rgba(255, 234, 0, 0.555);
}
</style>
