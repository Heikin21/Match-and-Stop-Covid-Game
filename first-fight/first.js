let card = document.getElementsByClassName("card");
let cards = [...card];
const deck = document.getElementById("card-deck");

let matchedCard = document.getElementsByClassName("match");

let model = document.getElementById("popup1")

var openedCards = [];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

document.body.onload = startGame();

function startGame(){

    openedCards = [];

    cards = shuffle(cards);

    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
}

var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

function matched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
}

function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
    },1100);
}

function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}
function covidsymptoms(){
    if (matchedCard.length == 2) {
        document.getElementById("symptoms").innerHTML = "Covid symptoms may appear 2-14 days after exposure to the virus.";
    };
    if (matchedCard.length == 4) {
        document.getElementById("symptoms").innerHTML = "Covid symptoms may vary with each individual.";
    };
    if (matchedCard.length == 6) {
        document.getElementById("symptoms").innerHTML = "Older Adults and people with underlying medical conditions are at higher risk from Covid.";
    };
}
function congratulations(){
    if (matchedCard.length == 8){

        model.classList.add("show");

    };
}

for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click",congratulations);
    card.addEventListener("click", covidsymptoms);
};

var talking = 0;
function stageOneTalk() {
    talking += 1;
    if (talking == 1) {
        document.getElementById("header").innerHTML = "In this stage we will learn about the symptoms of Covid.";
    }
    else if (talking == 2) {
        document.getElementById("header").innerHTML = "Flip the cards below and find clues.";
    }
    else if (talking == 3) {
        document.getElementById("header").innerHTML = "Matching cards will teach you something about covid symptoms.";
    }
    else if (talking == 4) {
        document.getElementById("header").innerHTML = "Pay attention to the 'Information' Box in the bottom."
    }
    else if (talking == 5) {
        document.getElementById("header").innerHTML = "Match all the clues together and get more information needed to know for Covid!"
        document.getElementById("headerButton").style.display = "none";
    }
}