
function makeDeck() {
    // Makes 2 arrays for the colours and numbers of the cards
    let colours = ["B", "Y", "R"];
    let numbers = ["1","2","3","4","5","6","7","8","9","10"];
    let deck= [];
    for(let i=0; i<colours.length;i++){
        for(let j=0;j<numbers.length;j++){
            // Makes a record of a colour and a number and appends it to an array
            let card={suit: colours[i], value:numbers[j]};
            deck.push(card);
        }
    }
    return deck;
}

function shuffle(deck){
    var rand1, rand2, temp;
    let count=2000;
    // Swaps 2 random records in the array and repeats 2000 times
    for(let i=0; i<count-1;i++){
        rand1=Math.floor(Math.random()*30);
        rand2=Math.floor(Math.random()*30);
        temp = deck[rand1];
        deck[rand1]=deck[rand2];
        deck[rand2]=temp;
    }
    return deck;
}

function pickCards (shuffledDeck){
    let player1Deck= [];
    let player2Deck=[];
    let i=1;
    while (i <shuffledDeck.length){
        if (shuffledDeck[i-1].suit==shuffledDeck[i].suit){
            if (shuffledDeck[i-1].value > shuffledDeck[i].value){
                player1Deck.push({Suit:shuffledDeck[i-1].suit, Value: shuffledDeck[i-1].value});
                player1Deck.push({Suit:shuffledDeck[i].Suit, Value: shuffledDeck[i].Value});
            }
            else{
                player2Deck.push({Suit:shuffledDeck[i-1].suit, Value: shuffledDeck[i-1].value});
                player2Deck.push({Suit:shuffledDeck[i].Suit, Value: shuffledDeck[i].Value});
            }
        }
        else{
            let q=cardComparison(shuffledDeck,player1Deck,player2Deck)
        }

        }
        i=i+2
    }

function cardComparison(shuffledDeck,player1Deck,player2Deck){

}

let cards=makeDeck();
let shuffledDeck=shuffle(cards);
console.log(shuffledDeck);
let game=pickCards(shuffledDeck);