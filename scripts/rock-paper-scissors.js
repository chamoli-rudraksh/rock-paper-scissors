    let score = JSON.parse(localStorage.getItem
    ('score')) ||{
        wins : 0,
        losses : 0,
        ties : 0
    };

    updateScoreElement();
        

    function playGame(playerMove){
        const computerMove=pickComputerMove();
                    let result='';

        if(playerMove=='scissors'){
            if( computerMove === 'rock'){
                    result=('You lose');
            }
            else if( computerMove === 'paper'){
                    result=('You win');
            }
            else if( computerMove === playerMove){
                    result=('Tie');
            }
        }
        
        else if(playerMove=='paper'){
        
            if( computerMove === 'rock'){
                    result=('You win');
            }
            else if( computerMove === 'paper'){
                    result=('Tie');
            }
            else if( computerMove === 'scissors'){
                    result=('You lose');
            }

            

        }
        
        else if(playerMove=='rock'){

                if( computerMove === 'rock'){
                    result=('Tie');
                    }
            else if( computerMove === 'paper'){
                    result=('You lose');
                    }
            else if( computerMove === 'scissors'){
                    result=('You win');
                    }

        

        }

        
        
        if(result==='Tie'){
            score.ties += 1;
        }
        else if(result==='You win'){
            score.wins += 1;
        }
        else if(result==='You lose'){
            score.losses += 1;
        }

        localStorage.setItem('score',JSON.stringify(score));

        document.querySelector('.js-result').innerHTML=(result)+'.';

        document.querySelector('.js-result-description').innerHTML=`You <img src="game-images/${playerMove}-emoji.png" class="move-icon">
                        <img src="game-images/${computerMove}-emoji.png" class="move-icon"> Computer`;
        
        updateScoreElement();
        
    }
    function updateScoreElement(){
        document.querySelector('.js-score')
        .innerHTML=`Wins : ${score.wins}  Losses : ${score.losses}  Tie : ${score.ties}`;
        
    }
    function pickComputerMove(){
        const randomNum=Math.random();
        let computerMove='';
        

        if(randomNum>=0 && randomNum<1/3){
            computerMove='rock';
            
        }
        else if(randomNum>=1/3 && randomNum<2/3){
            computerMove='paper';
        }
        else if(randomNum>=2/3 && randomNum<1){
            computerMove='scissors';
        }
        return computerMove;

    }

    let isAutoplaying = false;
    let intervalID;
    function autoplay(){
        if(!isAutoplaying){
            intervalID = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
            },1000)
            document.querySelector('.autoplay-button').innerHTML = 'Stop Play';
            isAutoplaying=true;
        }
        else{
             clearInterval(intervalID);
             isAutoplaying = false;
             document.querySelector('.autoplay-button').innerHTML = 'Auto Play';
        }

    }
    
    document.querySelector('.js-rock-button').addEventListener('click',() =>{
        playGame('rock');
    })
        document.querySelector('.js-paper-button').addEventListener('click',() =>{
        playGame('paper');
    })
        document.querySelector('.js-scissors-button').addEventListener('click',() =>{
        playGame('scissors');
    })
        document.body.addEventListener('keydown',(event) =>{
        if(event.key === 'r'){
            playGame('rock');
        }
        else if(event.key === 'p'){
            playGame('paper');
        }
        else if(event.key === 's'){
            playGame('scissors');
        } 
    })
        