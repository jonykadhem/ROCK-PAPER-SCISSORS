/*-------------------------------- Constants --------------------------------*/
const choicesArr = ['rock','paper','scissors']
/*-------------------------------- Variables --------------------------------*/

let userChoice =null
let pcChoice = ''

/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices')
const rock = document.querySelector('#dwayne johnson')
const A4 = document.querySelector('#A4')
const scissers = document.querySelector('#scissors')
const reset = document.querySelector('#reset')

/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function(event){
    let randchoice = Math.floor(Math.random()*3)
    userChoice = event.target.id

        if(userChoice === 'dwayne johnson'){
            A4.classList.add('hidden')
            scissers.classList.add('hidden')
        }if(userChoice === 'A4') {
            rock.classList.add('hidden')
            scissers.classList.add('hidden')
        }if(userChoice === 'scissers'){
            rock.classList.add('hidden')
            A4.classList.add('hidden')
        }

    pcChoice = choicesArr[randchoice]

    
    console.log('user Choice: ',pcChoice)
})
reset.addEventListener('click',function () {
    A4.classList.remove('hidden')
    scissers.classList.remove('hidden')
    rock.classList.remove('hidden')
})

/*-------------------------------- Functions --------------------------------*/