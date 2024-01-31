<template>
    <div>
        <div id="helper">
            <img src="../assets/arrow_icon.png" alt="" class="arrow_icon">
            Click to go back
        </div>

        <div class="container">

            <div class="card">
                <div class="header">
                    <div class="row">
                        <div class="col"> <span>titolo</span>
                        </div>
                        <div class="col"> <span>data creazione</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col"> <span>data ult modifica</span>
                        </div>
                    </div>
                </div>
                <div class="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo delectus quod impedit laboriosam
                    nisi atque, temporibus, necessitatibus consequatur culpa officiis architecto voluptatem aliquam ipsa
                    praesentium eligendi voluptas quam possimus.
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <div class="row">
                        <div class="col"> <span>titolo</span>
                        </div>
                        <div class="col"> <span>data creazione</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col"> <span>data ult modifica</span>
                        </div>
                    </div>
                </div>
                <div class="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo delectus quod impedit laboriosam
                    nisi atque, temporibus, necessitatibus consequatur culpa officiis architecto voluptatem aliquam ipsa
                    praesentium eligendi voluptas quam possimus.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo delectus quod impedit laboriosam
                    nisi atque, temporibus, necessitatibus consequatur culpa officiis architecto voluptatem aliquam ipsa
                    praesentium eligendi voluptas quam possimus.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo delectus quod impedit laboriosam
                    nisi atque, temporibus, necessitatibus consequatur culpa officiis architecto voluptatem aliquam ipsa
                    praesentium eligendi voluptas quam possimus.

                </div>
            </div>
            <div class="card">
                <div class="header">
                    <div class="row">
                        <div class="col"> <span>titolo</span>
                        </div>
                        <div class="col"> <span>data creazione</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col"> <span>data ult modifica</span>
                        </div>
                    </div>
                </div>
                <div class="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo delectus quod impedit laboriosam
                    nisi atque, temporibus, necessitatibus consequatur culpa officiis architecto voluptatem aliquam ipsa
                    praesentium eligendi voluptas quam possimus.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo delectus quod impedit laboriosam
                    nisi atque, temporibus, necessitatibus consequatur culpa officiis architecto voluptatem aliquam ipsa
                    praesentium eligendi voluptas quam possimus.
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <div class="row">
                        <div class="col"> <span>titolo</span>
                        </div>
                        <div class="col"> <span>data creazione</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col"> <span>data ult modifica</span>
                        </div>
                    </div>
                </div>
                <div class="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo delectus quod impedit laboriosam
                    nisi atque, temporibus, necessitatibus consequatur culpa officiis architecto voluptatem aliquam ipsa
                    praesentium eligendi voluptas quam possimus.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo delectus quod impedit laboriosam
                    nisi atque, temporibus, necessitatibus consequatur culpa officiis architecto voluptatem aliquam ipsa
                    praesentium eligendi voluptas quam possimus.
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <div class="row">
                        <div class="col"> <span>titolo</span>
                        </div>
                        <div class="col"> <span>data creazione</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col"> <span>data ult modifica</span>
                        </div>
                    </div>
                </div>
                <div class="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo delectus quod impedit laboriosam
                    nisi atque, temporibus, necessitatibus consequatur culpa officiis architecto voluptatem aliquam ipsa
                    praesentium eligendi voluptas quam possimus.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo delectus quod impedit laboriosam
                    nisi atque, temporibus, necessitatibus consequatur culpa officiis architecto voluptatem aliquam ipsa
                    praesentium eligendi voluptas quam possimus.
                </div>
            </div>

        </div>

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
        },
    },
    mounted() {
        setCardsOnPage();
    }
}

function setCardsOnPage() {
    let cards = document.getElementsByClassName("card");

    let columns = 3;
    let padding = 20;
    let minHeight = 200;
    let maxHeight = 300;
    let containerWidth = document.getElementsByClassName("container")[0].clientWidth;
    let cardWidth = document.getElementsByClassName("container")[0].clientWidth / 3 - ((columns - 1) * padding);

    let minLength = cards[0].querySelector(".content").innerHTML.length;
    let maxLength = cards[0].querySelector(".content").innerHTML.length;
    for (let i = 1; i < cards.length; i++) {

        let contentLength = cards[i].querySelector(".content").innerHTML.length;

        if (contentLength > maxLength)
            maxLength = contentLength
        else if (contentLength < minLength)
            minLength = contentLength

    }



    for (let i = 0; i < cards.length; i++) {

        let r = Math.floor(i / columns);
        let c = Math.floor(i % columns);

        let height = mapValue(cards[i].querySelector(".content").innerHTML.length, minLength, maxLength, minHeight, maxHeight);

        let pR = r - 1;
        let prevHeight = 0;
        while (pR >= 0) {
            let index = columns * pR + c;
            prevHeight += cards[index].clientHeight;
            pR--;
        }

        console.log(prevHeight);

        let top = (r * padding) + prevHeight;
        let left = ((containerWidth / columns * (c + 1)) - ((containerWidth / columns) / 2)) - (cardWidth / 2);

        cards[i].style.height = height + "px";
        cards[i].style.width = cardWidth + "px";
        cards[i].style.top = top + "px";
        cards[i].style.left = left + "px";


    }
}


function mapValue(value, fromMin, fromMax, toMin, toMax) {
    // Assicurati che il valore sia compreso nell'intervallo di partenza
    const clampedValue = Math.min(Math.max(value, fromMin), fromMax);

    // Calcola la percentuale del valore nell'intervallo di partenza
    const percentage = (clampedValue - fromMin) / (fromMax - fromMin);

    // Mappa la percentuale nell'intervallo di destinazione
    const mappedValue = percentage * (toMax - toMin) + toMin;

    return mappedValue;
}

</script>

<style scoped>
.card .header {
    padding-bottom: 10px;
    transition: all ease-in-out .2s;

}

.card{
    transition: all ease-in-out .2s;
    cursor: pointer;

}

.card:hover{
    transform: scale(1.1);
    /*background: rgb(148,187,233);
    background: linear-gradient(180deg, rgba(174, 212, 255, 0.164) 0%, rgba(255,255,255,0) 20%);*/
}

.card .header .row .col:nth-child(1) {
    text-align: left;
}

.card .header .row .col:nth-child(2) {
    text-align: right;
}

#helper {
    position: absolute;
    top: .5rem;
    left: 10rem;
    padding-top: .6rem;
    animation: helperAnimation .5s ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    border-radius: 5px;
    opacity: 1;
    transition: opacity .5s;
    height: 5vh;
    width: auto;
    font-size: .7rem
}

@keyframes helperAnimation {
    from {
        transform: scale(1)
    }

    to {
        transform: scale(1.05)
    }
}

.arrow_icon {
    display: inline-block;
    transform: scale(.3) rotate(-90deg) translateX(.2rem);
    margin-left: 0rem;
}

.content {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    padding-top: 10px;
}

.container {
    margin-top: 8%;
    font-size: .8rem;
    position: relative;
}

.container .card {
    position: absolute;
    padding: 20px;
}

.arrow-up {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(-135deg) translate(-1px, -1px);
}

span.tag {
    display: inline-block;
    width: 5rem;
    height: 1rem;
    border-radius: 30px;
    background-color: lightgrey;
    position: relative;
}

span.tag::after {
    content: '';
    width: .5rem;
    height: .5rem;
    background-color: white;
    position: absolute;
    top: .25rem;
    left: 5px;
    border-radius: 50%;

}
</style>
