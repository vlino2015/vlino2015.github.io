(function() {

    var dealerHand = new Array();
    var playerHand = new Array();
    
    var deck = [{point: 1, suit: 'hearts'},  {point: 1, suit: 'diamonds'}, {point: 1, suit: 'clubs'}, {point: 1, suit: 'spades'},
    {point: 1, suit: 'hearts'},  {point: 1, suit: 'diamonds'}, {point: 1, suit: 'clubs'}, {point: 1, suit: 'spades'},
    {point: 2, suit: 'hearts'},  {point: 2, suit: 'diamonds'}, {point: 2, suit: 'clubs'}, {point: 2, suit: 'spades'},
    {point: 3, suit: 'hearts'},  {point: 3, suit: 'diamonds'}, {point: 3, suit: 'clubs'}, {point: 3, suit: 'spades'},
    {point: 4, suit: 'hearts'},  {point: 4, suit: 'diamonds'}, {point: 4, suit: 'clubs'}, {point: 4, suit: 'spades'},
    {point: 5, suit: 'hearts'},  {point: 5, suit: 'diamonds'}, {point: 5, suit: 'clubs'}, {point: 5, suit: 'spades'},
    {point: 6, suit: 'hearts'},  {point: 6, suit: 'diamonds'}, {point: 6, suit: 'clubs'}, {point: 6, suit: 'spades'},
    {point: 7, suit: 'hearts'},  {point: 7, suit: 'diamonds'}, {point: 7, suit: 'clubs'}, {point: 7, suit: 'spades'},
    {point: 8, suit: 'hearts'},  {point: 8, suit: 'diamonds'}, {point: 8, suit: 'clubs'}, {point: 8, suit: 'spades'},
    {point: 9, suit: 'hearts'},  {point: 9, suit: 'diamonds'}, {point: 9, suit: 'clubs'}, {point: 9, suit: 'spades'},
    {point: 10, suit: 'hearts'},  {point: 10, suit: 'diamonds'}, {point: 10, suit: 'clubs'}, {point: 10, suit: 'spades'},
    {point: 11, suit: 'hearts'},  {point: 11, suit: 'diamonds'}, {point: 11, suit: 'clubs'}, {point: 11, suit: 'spades'},
    {point: 12, suit: 'hearts'},  {point: 12, suit: 'diamonds'}, {point: 12, suit: 'clubs'}, {point: 12, suit: 'spades'},
    {point: 13, suit: 'hearts'},  {point: 13, suit: 'diamonds'}, {point: 13, suit: 'clubs'}, {point: 13, suit: 'spades'}]
    
    var randomNumberBetween0and52 = Math.floor(Math.random() * (52));
    
    console.log(randomNumberBetween0and52);
    
    var newCard = deck[randomNumberBetween0and52]
    
    console.log(newCard);
    //can't get newCard pushed into dealerHand
    dealerHand.push(newCard);
    
    console.log(dealerHand[0]);
    
    var addCard = document.createElement('img');
    console.log(addCard);
    //addCard.setAttribute("src", 'JPEG/2C.jpg');
    addCard.src = 'JPEG/2C.jpg';
    addCard.width = '150';
    addCard.height = '250';
    //addCard.setAttribute(width = '150px');
    //addCard.setAttribute(height = '250px');
    
    var cardSpot = document.getElementById('cardRow');
    
    cardSpot.appendChild(addCard);
    console.log('test link');
    
   
    }());