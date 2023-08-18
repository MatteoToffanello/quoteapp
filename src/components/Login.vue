<template>
    <div id="form">

        <h2>LOGIN</h2>

        <label for="email">
            EMAIL
            <input type="email" name="email" id="email">
        </label>
        <label for="psw">
            PASSWORD
            <input type="password" name="psw" id="psw">
        </label>

        <button id="login_btn">Log In</button>

    </div>
</template>

<script>


</script>


<style scoped>
#form {
    width: 30vw;
    height: auto;
    margin: 40vh auto;
    transform: translateY(-50%);
    border: solid 1px lightgrey;
    padding: 3rem;
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
    text-align: center;
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