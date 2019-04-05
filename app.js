var cardPlate = document.querySelectorAll(".card");

var cards = [...cardPlate];

var decker =  document.querySelector(".deck");

var openCards = [];

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

document.body.onload =  function(){
    cards = shuffle(cards);

    decker.innerHTML = "";

    cards.forEach(function(item){
        decker.appendChild(item);
    });

    cards.forEach(function(car){
        car.classList.remove("open","show","match");
    })
};

cards.forEach(function(car){
    car.addEventListener("click", function(){
        car.className+= " open show disabled"
        openCards.push(this);
        if((openCards.length)==2){
            if((openCards[0].querySelector("i").className)==(openCards[1].querySelector("i").className)){
                (openCards[0].className+= " match");
                (openCards[1].className+= " match");
                openCards = [];
            }else{
                openCards[0].className+= " wrong";
                openCards[1].className+= " wrong";
                setTimeout(function(){
                    (openCards[0].classList.remove("open","show","disabled","wrong"));
                    (openCards[1].classList.remove("open","show","disabled","wrong"));
                    openCards = [];
                }, 1100);
            }
        }
    });
});

