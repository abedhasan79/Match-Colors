
const cardArray=[
    {
        name:'Red',
        color: 'red'
    },

    {
        name:'Green',
        color: 'green'
    },

    {
        name:'Yellow',
        color: 'yellow'
    },

    {
        name:'Purple',
        color: 'purple'
    },

    {
        name:'Black',
        color: 'black'
    },

    {
        name:'Orange',
        color: 'orange'
    },

    {
        name:'Red',
        color: 'red'
    },

    {
        name:'Green',
        color: 'green'
    },

    {
        name:'Yellow',
        color: 'yellow'
    },

    {
        name:'Purple',
        color: 'purple'
    },

    {
        name:'Black',
        color: 'black'
    },

    {
        name:'Orange',
        color: 'orange'
    },
]



cardArray.sort(()=>0.5 - Math.random());


const grid = document.querySelector('#grid');
const score = document.querySelector('#score');
const attempt = document.querySelector('#attempt');
let count = 10;
let cardChosen = [];
let cardsChosenIds =[];
const cardsWin = [];
function checkMatch(){
    const cards = document.querySelectorAll('h2');

    if(cardsChosenIds[0] === cardsChosenIds[1]){
        cards[cardsChosenIds[1]].setAttribute('style', 'background-color:gb(0, 174, 255)');
        cards[cardsChosenIds[0]].setAttribute('style', 'background-color:gb(0, 174, 255)');
        

    }else if(cardChosen[0] === cardChosen[1]){
       
        // cards[cardsChosenIds[0]].setAttribute('style', 'background-color:rgb(238, 126, 253)');
        // cards[cardsChosenIds[1]].setAttribute('style', 'background-color:rgb(238, 126, 253)');
        document.getElementById('body-color').setAttribute('style','background-color: rgb(146, 180, 148)');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWin.push(cardChosen);
    }else{
        count--;
        cards[cardsChosenIds[0]].setAttribute('style', 'background-color:gb(0, 174, 255)');
        cards[cardsChosenIds[1]].setAttribute('style', 'background-color:gb(0, 174, 255)');
        attempt.innerHTML = count;
        if(count<=0){
            attempt.innerHTML = 'TRY AGAIN';
            for(let j=0; j<cardArray.length;j++){
                cards[cardsChosenIds[i]].removeEventListener('click', flipCard);
            }
           
        }
        document.getElementById('body-color').setAttribute('style','background-color: rgb(207, 136, 118)');
    }
    score.innerHTML = cardsWin.length;
    cardChosen = [];
    cardsChosenIds = [];
    if(cardsWin.length === cardArray.length/2){
        score.innerHTML = 'You got them all'
        document.getElementById('body-color').setAttribute('style','background-color: rgb(165, 221, 218); transition:3s');

    }
}

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
       const card= document.createElement('h2');
       card.setAttribute('data-id', i);
       card.innerHTML='';
       card.addEventListener('click', flipCard);
       grid.appendChild(card);
       
    }
}

createBoard();

function flipCard(event){
    event.preventDefault();
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('style', `transform-style: preserve-3d;perspective: 1000px;transform: rotateY(180deg);background-color:${cardArray[cardId].color}`);
    if(cardChosen.length ===2){
        setTimeout(checkMatch, 600);
    }
}

document.getElementById('restart').addEventListener('click', ()=>{
    location.reload();
});



const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installBtn.style.visibility = 'visible';
  textHeader.textContent = 'Click the button to install!';

  installBtn.addEventListener('click', () => {
    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
  });
});

window.addEventListener('appinstalled', (event) => {
    installBtn.setAttribute('style', 'display:none');
  textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
});
