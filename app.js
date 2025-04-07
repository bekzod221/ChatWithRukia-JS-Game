const msgStore = document.getElementById('store')
const startMenu = document.getElementById('menu')
const answer = document.getElementById('answer')
const option = document.getElementById('option')
const DIALOG_LIST = [
    {
        message: 'Hello! my name is Rukia Kuchiki, what is yours',
        response: 'My name is...',
        identityCheck: true
    }
]

const createMessage = (msg)=>{
    const now = new Date();

    const options = {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };

    const formatted = now.toLocaleString('en-US', options).replace(',', '');
    const El = document.createElement('div')
    El.className = 'sent'
    msgStore.appendChild(El)
    El.innerHTML = `
        <h3>Rukia Kuchiki</h3>
        <p>${msg}</p>
        <p>${formatted}</p>
    `


}

const startGame = () => {
    menu.style.display = 'none'
    msgStore.style.display = 'flex'
    localStorage.setItem('started', true)
}

if(localStorage.getItem('started')){
    menu.style.display = 'none'
    msgStore.style.display = 'flex'
}

const identityCheck = () => {
    const user = prompt('Enter your username...')
    const username = user
    if(username){
        createMessage(`Nice to meet you ${user}, what a lovely name!`)
    }
}

const responseSystem = () => {
    const response = answer.textContent;

    switch (response){
        case 'My name is...':
            identityCheck()
            setTimeout(() => {
                createMessage('Do you know who i am?')
            }, 2500);
            answer.innerHTML = 'Yeah, you are Rukia Kuchiki'
        break;
    }
}

option.addEventListener('click', ()=>{
    responseSystem()
})