const msgStore = document.getElementById('store')
const startMenu = document.getElementById('menu')
const answer = document.getElementById('answer')
const option = document.getElementById('option')
const audio = document.getElementById('telegram')
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
    audio.play()
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
        case 'Yeah, you are Rukia Kuchiki':
            createMessage('Wait! How do you know that?!')
            answer.innerHTML = 'Well.. to be honest i am not from your world.'
            break;
        case 'Well.. to be honest i am not from your world.':
            createMessage('Not from my world? Well this is pretty ironic lol, so what do you mean by "Not from my world"')
            answer.innerHTML = 'NIGGER NIGGER NIGGER'
    }
}

option.addEventListener('click', ()=>{
    responseSystem()
})