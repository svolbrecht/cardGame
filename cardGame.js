"use strict"
console.log("cardGame");

var deck;
var shuffledDeck;
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var numberOfPlayers;
var playerOne;
var playerTwo;
var computerPlayer;


function cardGame(){
    deck = getDeck();
    
    shuffledDeck = shuffleDeck(deck);

    numberOfPlayers = getNumberOfPlayers();

    createPlayers(numberOfPlayers);

    dealCards(shuffledDeck);

}

const functions = {

    getDeck(){
	var deck = [];

	for(var i = 0; i < suits.length; i++)
	{
		for(var j = 0; j < values.length; j++)
		{
			var card = {Value: values[j], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
    },

    createPlayers(numberOfPlayers) {

        if(numberOfPlayers === "1"){
            playerOne = {Hand: []};
            computerPlayer = {Hand: []};
        }
        else{
            playerOne = {Hand: []};
            playerTwo = {Hand: []};
        }
    },

    shuffleDeck(deck) {
        var currentIndex = deck.length; 
        var temporaryValue;
        var randomIndex;
     
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
        };
     
        return deck;
    },

    getNumberOfPlayers(playerChoice){
          
        switch(playerChoice){
        case "1":
            return playerChoice;
    
        case "2":
            return playerChoice;
    
        default:
            alert("please enter a '1' or '2'")
            getNumberOfPlayers();
        }
    }
}
module.exports = functions;

function getDeck()
{
	var deck = [];

	for(var i = 0; i < suits.length; i++)
	{
		for(var j = 0; j < values.length; j++)
		{
			var card = {Value: values[j], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffleDeck(deck) {
    var currentIndex = deck.length; 
    var temporaryValue;
    var randomIndex;
 
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
    };
 
    return deck;
}

function getNumberOfPlayers(){
    var playerChoice = prompt("please enter '1' or '2' for number of players");
      
    switch(playerChoice){
    case "1":
        return playerChoice;

    case "2":
        return playerChoice;

    default:
        alert("please enter a '1' or '2'")
        getNumberOfPlayers();
    }
}

function createPlayers(numberOfPlayers) {

    if(numberOfPlayers === "1"){
        playerOne = {Hand: []};
        computerPlayer = {Hand: []};
    }
    else{
        playerOne = {Hand: []};
        playerTwo = {Hand: []};
    }
}

function dealCards(shuffledDeck){
    var i = 0;

    if(computerPlayer == undefined){
        while(i != shuffledDeck.length){
            playerOne.Hand.push(shuffledDeck[i]);
            playerTwo.Hand.push(shuffledDeck[i+1]);
            i+=2;
        }
    }
    else{
        while(i != shuffledDeck.length){
            playerOne.Hand.push(shuffledDeck[i]);
            computerPlayer.Hand.push(shuffledDeck[i+1]);
            i+=2;
        }
    }
}