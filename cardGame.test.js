const functions = require('./cardGame');

//toBeNull for null only
//toBeUndefined ...
//toBeDefined ...
//toBeTruthy only for when an if statement would read as true
//toBeFalsy ...

test('getDeck returns a deck', () => {
    expect(functions.getDeck()).toBeDefined();
})
 
test('shuffleDeck returns a deck', () => {
    var deck = functions.getDeck();
    expect(functions.shuffleDeck(deck)).toBeDefined();
})

test('getDeck returns ace of spades at index 0', () => {
    var deck = functions.getDeck();
    expect(deck[0]).toEqual({Value: 'A', Suit: "spades"});
})

test('getDeck returns king of hearts at index 51', () => {
    var deck = functions.getDeck();
    expect(deck[51]).toEqual({Value: 'K', Suit: "hearts"});
})

test('shuffleDeck does not return king of hearts at index 51', () => {
    var deck = functions.getDeck();
    var shuffledDeck = functions.shuffleDeck(deck);
    expect(shuffledDeck[51]).not.toEqual({Value: 'K', Suit: "hearts"});
})

test('shuffleDeck does not return ace of spades at index 0', () => {
    var deck = functions.getDeck();
    var shuffledDeck = functions.shuffleDeck(deck);
    expect(shuffledDeck[0]).not.toEqual({Value: 'A', Suit: "spades"});
})

test('getNumberOfPlayers returns value of "1"', () => {
    var playerChoice = '1';
    expect(functions.getNumberOfPlayers(playerChoice)).toBe('1');
})

test('getNumberOfPlayers returns value of "2"', () => {
    var playerChoice = '2';
    expect(functions.getNumberOfPlayers(playerChoice)).toBe('2');
})

// test('computerPlayer remains undefined', () => {
//     var playerOne;
//     var playerTwo;
//     var computerPlayer;
//     functions.createPlayers('2');
//     expect(computerPlayer).toBeUndefined();
// })

// test('playerOne is defined', () => {
//     var playerOne;
//     functions.createPlayers('2');
//     expect(playerOne).toBeDefined();
// })

