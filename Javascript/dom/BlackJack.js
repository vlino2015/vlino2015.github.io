$(document).ready(function(){
	$('#play-again').hide();
	$('#hit-button').hide();
	$('#stand-button').hide();
	let deck  = new Deck();
	let dealerHand = new Hand();
	let playerHand= new Hand();
	let revealTime = 1000;
	$('#player-points').text("0");
	$('#dealer-points').text("0");

	// deck Object
	function Deck(){
		this.cards = [];
		for (let i = 1; i <= 13; i++) {
			    this.cards.push(new Card(i,'spades')); 
			    this.cards.push(new Card(i,'hearts'));
			    this.cards.push(new Card(i,'clubs'));
			    this.cards.push(new Card(i,'diamonds'));
		}

		let j, x, i;
		    for (i = this.cards.length; i; i--) {
		        j = Math.floor(Math.random() * i);
		        x = this.cards[i - 1];
		        this.cards[i - 1] = this.cards[j];
		        this.cards[j] = x;
		    }

	}

	Deck.prototype.shuffle = function(){
			let j, x, i;
		    for (i = this.cards.length; i; i--) {
		        j = Math.floor(Math.random() * i);
		        x = this.cards[i - 1];
		        this.cards[i - 1] = this.cards[j];
		        this.cards[j] = x;
		    }
	}

	Deck.prototype.numCardsLeft = function(){
		return this.cards.length;
	}

	Deck.prototype.draw = function(){
		return this.cards.pop();
	} // end deck Object


	//hand Object
	function Hand(){
		this.cards = [];
	}
	Hand.prototype.addCard = function(card){
		this.cards.push(card);
	};
	Hand.prototype.getPoints = function(){
			let myCards = this.cards.slice(0);
	 		myCards.sort(function(a, b) {
	    		return b.point - a.point;
	  		});
	  		return myCards.reduce(function(sum, card) {
	    		let point = card.point;
	    		if (point > 10) {
	      			point = 10;
	   			}
	    		if (point === 1 && sum < 11) {
	      			point = 11;
	    		}
	    		return sum + point;
	  		}, 0);
	}; //end hand Object

	//card object
	function Card(point, suit){
		this.point = point;
		this.suit = suit;
	} 
	Card.prototype.getImageUrl = function(){
		if(this.point === 1){
			return '<img src =\'images/ace_of_'+this.suit+'.png\'>';
		}else if(this.point === 11){
			return '<img src =\'images/jack_of_'+this.suit+'.png\'>';
		}else if (this.point ===12){
			return '<img src =\'images/queen_of_'+this.suit+'.png\'>';
		}else if (this.point ===13){
			return '<img src =\'images/king_of_'+this.suit+'.png\'>';
		}
		else{
			return '<img src =\'images/'+parseInt(this.point)+'_of_'+this.suit+'.png\'>';
		}
	}; //end card object

	function showCard(card, element){	
		$(element).append(card.getImageUrl());
		$(element).find(':last-child').hide().fadeIn(revealTime,"swing");

	}

	function updatePoint(element){
		if(element ==="#player-points"){
			$(element).text(playerHand.getPoints());
		}
		if(element ==="#dealer-points"){
			$(element).text(dealerHand.getPoints());
		}
	}

	function deal(element){
		if(element ==="#dealer-hand"){

			let card = deck.draw();
			dealerHand.addCard(card);
			showCard(card, "#dealer-hand");
			updatePoint("#dealer-points");
		}
		if(element ==="#player-hand"){
			let card = deck.draw();
			playerHand.addCard(card);
			showCard(card, "#player-hand");
			updatePoint("#player-points");
		}
		
	}

	function reveal(){
		let card = deck.draw();	
		dealerHand.addCard(card);
		$("#dealer-hand").find(':first-child').replaceWith(card.getImageUrl());
		$("#dealer-hand").find(':first-child').hide().fadeIn(revealTime,"swing");
		
		updatePoint("#dealer-points");	
	}

	$("#deal-button").click(function(){

		$('#dealer-hand').append('<img src = images/back.jpg>').hide().fadeIn(revealTime,"swing");
		deal("#player-hand");
		deal("#dealer-hand");
		deal("#player-hand");
		$('#stand-button').show();
		$('#hit-button').show();
		$('#deal-button').hide();

	});

	function gameOver(){
		$('#play-again').show();
		$('#hit-button').hide();
		$('#stand-button').hide();
		$('#hit-button').hide();
	}

	function check(){
		let points = [];
		points.push(playerHand.getPoints());
		points.push(dealerHand.getPoints());
		return points;
	}

	$("#hit-button").click(function(){
		deal("#player-hand");
		if(check()[0] > 21){
			$("#messages").text("You Lose!");
			$('#stand-button').hide();
			$('#hit-button').hide();
			$('#play-again').show();
		}
	});

	$("#stand-button").click(function(){	
		let p = check()[0];
		let d = check()[1];
		//$("#dealer-hand").find(':first-child').remove();
		reveal();
		//$("#dealer-hand").find(':first-child').hide().fadeIn(revealTime,"swing");
		while(d < 17){
			deal("#dealer-hand");
			if( d > 21){
			$("#messages").text("You Win.");
				gameOver();
			}
			d = check()[1];
		}
		if(d > 21 && p<= 21){
			$("#messages").text("You Win!");
			gameOver();
		}	
		else if(p <= 21 && d >21){
			$("#messages").text("You Win!");
			gameOver();
		}

		else if(d > p){
			$("#messages").text("You Lose!");
			 gameOver();
		}

		else if(d < p){
			$("#messages").text("You Win!");
			 gameOver();	
		}
		else if(d === p){
			$("#messages").text("Draw!");
			 gameOver();	
		}
	});

	$("#play-again").click(function(){
		$('#play-again').hide();
		$('#hit-button').hide();
		$('#stand-button').hide();
		$('#deal-button').show();
		deck  = new Deck();
		dealerHand = new Hand();
		playerHand= new Hand();
		$('#player-points').text("0");
		$('#dealer-points').text("0");
		$("#messages").text("");
		$("#dealer-hand img").remove();
		$("#player-hand img").remove();
	});
});