<template>

    <div class="row">
        <div id="helper">
            <img src="../assets/arrow_icon.png" alt="" class="arrow_icon">
            Click to go back
        </div>

        <div class="col" id="firstCol">

        </div>

        <div class="col">
            <div id="form">

                <h3>Welcome</h3>

                <label for="email">
                    <input type="email" name="email" id="email" placeholder="Enter your email">
                </label>
                <label for="psw">
                    <input type="password" name="psw" id="psw" placeholder="Enter your password">
                </label>

                <button id="login_btn">Log In</button>

            </div>
        </div>

    </div>

    
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {}
    },
    methods: { },
    beforeMount() {
        console.log("test");
        setTimeout(() => {
            console.log(document.querySelector("#helper").style);
            document.querySelector("#helper").style.opacity = "1";
        }, 700);
    },
}



</script>


<style scoped>

#helper{
    position: absolute;
    top: .5rem;
    left: 10rem;
    padding-top: .6rem;
    animation: helperAnimation .5s ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    border-radius: 5px;
    opacity: 0;
    transition: opacity .5s;
    height: 5vh;
    width: auto;
    font-size: .7rem
}

#firstCol{
    border-right: solid 1px lightgrey;
}

@keyframes helperAnimation{
    from{
        transform: scale(1)
    }
    to{
        transform: scale(1.05)
    }
}

.arrow_icon{
    display: inline-block;
    transform: scale(.3) rotate(-90deg) translateX(.2rem);
    margin-left: 0rem;
}

#form {
    width: 30vw;
    height: auto;
    margin: 40vh auto;
    transform: translateY(-50%);
    padding: 3rem;
    font-size: .8rem;
}

h2{
    margin-top: 1.5rem;
}

label{
    width: 90%;
    display: block;
    margin: 4rem auto;
}

input{
    border: none;
    display: block;
    border-bottom: solid 1px lightgrey;
    margin-top: .5rem;
    margin-left: auto;
    margin-right: auto;
    line-height: 30px;
    text-align: left;
    width: 70%;
    transition: .2s ease-in-out;
}

input:focus{
    border: none;
    border-bottom: solid 1px darkgoldenrod;
    outline: none;
}

#login_btn{
    width: 30%;
    height: 40px;
    background-color: rgba(255, 234, 0, 0.555);
    border: none;
    border-radius: 20px;
    margin: 1rem 0px;
    transition: .2s ease-in-out;
}

#login_btn:hover{
    transform: scale(1.05);
}
</style>