/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let userChoice =''

/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices')


/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function(event){
    userChoice = event.target.id
    console.log('user Choice: ',userChoice)
})

/*-------------------------------- Functions --------------------------------*/