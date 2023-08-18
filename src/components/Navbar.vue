<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <span class="navbar-brand" @click="goToHome()"><img id="imgLogo" src="../assets/tophos transparent bg.png"
                    alt="logo"></span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li v-if="username != ''" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ username }}
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Libreria</a></li>
                            <li><a class="dropdown-item" href="#">Bacheca</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Classe</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Impostazioni</a></li>
                        </ul>
                    </li>
                    <li v-else>
                        <span @click="goToLogin()" class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            LOGIN
                        </span>
                    </li>


                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            msg: '',
            username: ""
        }
    },
    methods: {
        goToHome() {
            this.$router.push("/");
        },
        goToLogin(){
            this.$router.push("/login");
        }
    },
    beforeMount() {
        // check login
        let logged_in = false;


        let username = "";
        // se username != "" allora mostra un componente altrimenti l'altro


    },
}
</script>

<style scoped>
.navbar-brand:hover {
    cursor: pointer;
}

#imgLogo {
    width: 100px;
}

#navbarSupportedContent {
    flex-grow: 0;
}

.navbar {
    --side-padding: 30px;
    padding-left: var(--side-padding);
    padding-right: var(--side-padding);
    background-color: rgba(255, 234, 0, 0.555);
    /*rgba(0, 0, 128, 0.027);*/
    border-bottom: solid 1px rgba(0, 0, 0, 0.175);
}

/*
.navbar *{
    color: white;
}

a.show{
    color: white !important;
}
*/

.dropdown-item {
    color: var(--text-color)
}

.dropdown-menu {
    margin-top: 8.5%;
    margin-left: 0%;
    background-color: rgb(248, 248, 252);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top: none;
}
</style>