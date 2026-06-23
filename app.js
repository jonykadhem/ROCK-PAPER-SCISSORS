/*-------------------------------- Constants --------------------------------*/
const choicesArr = ['rock','paper','scissors']
/*-------------------------------- Variables --------------------------------*/

let userChoice =null
let pcChoice = ''
let des = ''
let wen = ''
/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices')
const rock = document.querySelector('#dwayne-johnson')
const paper = document.querySelector('#A4')
const scissers = document.querySelector('#scissors')
const reset = document.querySelector('#reset')
const result = document.querySelector('#result-display')
const winLose = document.querySelector('#winlose')

/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function(event){
    let randchoice = Math.floor(Math.random()*3)
    userChoice = event.target.id

        if(userChoice === 'dwayne-johnson'){
            A4.setAttribute('disabled', 'disabled')
            scissers.setAttribute('disabled', 'disabled')
        }else if(userChoice === 'A4'){
            rock.setAttribute('disabled', 'disabled')
            scissers.setAttribute('disabled', 'disabled')
        }else {
            rock.setAttribute('disabled', 'disabled')
            A4.setAttribute('disabled', 'disabled')
        }

    pcChoice = choicesArr[randchoice]
    
    if (userChoice === pcChoice) {
        wen = 'tie'
    }  else if(userChoice === 'dwayne-johnson' && pcChoice === 'scissors') {
        wen = 'you won 🎉' 
        
        }else if(userChoice === 'A4' && pcChoice === 'dwayne-johnson') {
            wen = 'you won 🎉' 
        }else if(userChoice === 'scissors' && pcChoice === 'A4') {
            wen = 'you won 🎉' 
        }else if(userChoice === 'dwayne-johnson' && pcChoice === 'A4') {
            wen = 'you lost 😭'            
        }else if(userChoice === 'A4' && pcChoice === 'scissors') {
            wen = 'you lost 😭'            
        }else if(userChoice === 'scissors' && pcChoice === 'dwayne-johnson') {
            wen = 'you lost 😭'            
        }
        
        result.textContent = `computer chose: ${pcChoice} & you chose ${userChoice} the results is: ${wen}  `
    console.log('user Choice: ',pcChoice)
})
reset.addEventListener('click',function () {
    A4.removeAttribute('disabled')
    scissers.removeAttribute('disabled')
    rock.removeAttribute('disabled')
    result.textContent = 'Results go here '
})

/*-------------------------------- Functions --------------------------------*/