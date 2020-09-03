/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,dice,previousScore=0,inputScore=100;
init();
//
//scores = [0,0];
//roundScore = 0;
//activePlayer = 0;


//consol.log(dice);

//DOM Manipulation

//1st Method for setting DOM values 
 //document.querySelector('#current-'+activePlayer).textContent = dice;


//2nd Method for setting DOM values using 
//document.querySelector('#current-'+activePlayer).innerHTML= '<em>'+dice+'</em>'


//var x = document.querySelector('#score-0').textContent;
//console.log(x);
//
//document.querySelector('.dice').style.display='none';
//document.getElementById('score-0').textContent ='0';
//document.getElementById('score-1').textContent ='0';
//document.getElementById('current-0').textContent ='0';
//document.getElementById('current-1').textContent ='0';
//two arguments one is event
//second is function
//
//
//document.querySelector('.btn-roll').addEventListener('click',btn);


//we can directy call function anonymously
document.querySelector('.input-score').addEventListener('change',function() { 
    inputScore=document.getElementById('input-score').value;
    console.log('input score is '+inputScore);
});
document.querySelector('.btn-roll').addEventListener('click',function() {
    //DO something heree
    //1.Random Number
    previousScore = dice;
    dice = Math.floor(Math.random() * 6)+1;
    
    
    
    //2.Dispay the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display= 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    
    //3.Update the round socre If the rolled was number was NOT a 1
    
    //Type cohersion not done
    //!= does type cohersion
    console.log('active player : '+activePlayer+' previous : '+previousScore +' and current : '+dice);
    if((previousScore === dice) && dice=== 6)
        {    
             scores[activePlayer]=0;
             document.getElementById('current-'+activePlayer).textContent='0';
             document.getElementById('score-'+activePlayer).textContent ='0';
             nextPlayer();
        }
    
    else {
            if(dice !== 1){
    //Add score    
        roundScore +=dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }else {
        //Next player
        //TERNARY OPERATOR
        nextPlayer();      
    }
}
});

    document.querySelector('.btn-hold').addEventListener('click',function(){
    scores[activePlayer] += roundScore;
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    document.querySelector('#current-'+activePlayer).textContent='0';  
    roundScore=0;
     
    // The first player to reach 100 points on GLOBAL score wins the game
//        console.log('active palyer'+scores[activePlayer] );
        if(scores[activePlayer]>=inputScore)
            {
                console.log('active palyer'+scores[activePlayer] );
                document.querySelector('#name-'+activePlayer).textContent='Winner!';
                document.querySelector('.dice').style.display='none';     
                document.querySelector('.btn-hold').style.display='none';     
                document.querySelector('.btn-roll').style.display='none';     
                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                
            }
        else
            {
                nextPlayer();            
            }
        
    
})

function nextPlayer(){
        activePlayer === 0 ? activePlayer =1 : activePlayer =0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').classList.toggle('player0');
        document.querySelector('.dice').classList.toggle('player1');
        
        document.querySelector('.dice').style.display='none';
//        document.querySelector('.player-0-panel').classList.remove('active');
//        
//        document.querySelector('.player-1-panel').classList.add('active');
        
    
}

//Implementation of new game button

document.querySelector('.btn-new').addEventListener('click',init);




function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.btn-hold').style.display='block';     
    document.querySelector('.btn-roll').style.display='block'; 
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('score-0').textContent ='0';
    document.getElementById('score-1').textContent ='0';
    document.querySelector('.dice').style.display='none';
    document.getElementById('name-0').textContent ='Player 1';
    document.getElementById('name-1').textContent ='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');  
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.dice').classList.add('player0');
    document.querySelector('.dice').classList.remove('player1');
}

























































