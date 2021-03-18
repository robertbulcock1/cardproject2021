
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
//test
function shuffle(deck){
    var rand1, rand2, temp
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

let cards=makeDeck();
let shuffledDeck=shuffle(cards);
console.log(shuffledDeck);
// hello theregstrsfs